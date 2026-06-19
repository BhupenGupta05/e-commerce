import { Product } from "@prisma/client";
import MatchBadge from "./MatchBadge";
import ProductName from "./ProductName";
import ProductRating from "./ProductRating";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import ProductTags from "./ProductTags";
import ProductActions from "./ProductActions";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <section
      className="
        flex
        h-full
        flex-col
        justify-center
        py-6
        md:px-8
      "
    >
      <MatchBadge score={94} />

      <ProductName name={product.name} />

      <ProductRating
        rating={4.8}
        reviews={1248}
      />

      <ProductDescription
        description={product.description}
      />

      <ProductPrice
        priceInPaisa={product.priceInPaisa}
      />

      <ProductTags tags={product.tags} />

      <ProductActions />
    </section>
  );
}