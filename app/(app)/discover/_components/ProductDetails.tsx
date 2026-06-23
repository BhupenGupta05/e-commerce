import { Product } from "@prisma/client";
import ProductGallery from "./productGallery/ProductGallery";
import ProductInfo from "./productInfo/Info";

interface Props {
  product: Product;
  initialSaved: boolean;
}


export default function ProductDetails({ product, initialSaved }: Props) {
  const images = product.imageUrl.map((url, idx) => ({
    id: String(idx),
    url,
    alt: product.name,
  }));

  return (
    <>
      <section className="pb-20 lg:pb-0">
        <div className="mx-auto max-w-8xl px-6 md:px-7 lg:px-8">
          <div
            className="
          grid
          grid-cols-1
          md:grid-cols-[minmax(0,1fr)_380px]
          lg:grid-cols-[620px_1fr]
          md:gap-6
          lg:gap-4
          md:items-start
          lg:items-center
        "
          >
            <ProductGallery images={images} />
            <ProductInfo product={product} />
          </div>
        </div>

      </section>
    </>

  );
}