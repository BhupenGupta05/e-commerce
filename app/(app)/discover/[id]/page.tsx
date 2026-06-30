import ProductDetails from "../_components/ProductDetails";
import { after } from "next/server";
import { requireAuthSoft } from "@/lib/session";
import { getProductPageData } from "./_lib/queries";
import { trackProductView } from "@/lib/analytics";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Dynamic metadata for each product

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const {product} = await getProductPageData(params.id);

  if (!product) {
    // notFound() here keeps the 404 page's own metadata intact
    return { title: "Product not found" };
  }

  const ogImage = product.imageUrl?.[0]
    ? { url: product.imageUrl[0], alt: product.name }
    : undefined;

  return {
    title: product.name,                       
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
      ...(ogImage && { images: [ogImage] }),
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      ...(ogImage && { images: [ogImage.url] }),
    },
  };
}

// There is a major performance bug here, user has to wait for trackview to finish but user doesn't know about it and it is expensive(two sequential DB calls), so we can do it in the background using after() (Could've used kafka but it introduces complexity for this app)
// after() is process bound, meaning it runs inside the same process, so if the process restarts or crashes,
// the tracking might be lost. 

// Also, the session is check twice: once, here and again in requireAuth
// So, we can cache it

// Kafka decouples this entirely and it will execute the job atleast once 

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await requireAuthSoft();

    // Earlier
    // await trackView(id);

    // Now
    after(() => trackProductView(id));

    const { product, existingSave } = await getProductPageData(id, user?.id);

    if (!product) notFound();

    return (
        <ProductDetails
            product={product}
            initialSaved={!!existingSave} />
    )
}