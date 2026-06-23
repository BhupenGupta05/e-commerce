import { Product } from "@prisma/client";
import MatchBadge from "./MatchBadge";
import ProductName from "./Name";
import ProductRating from "./Rating";
import ProductDescription from "./Description";
import ProductPrice from "./Price";
import ProductTags from "./Tags";
import ProductActions from "./Actions";
import Name from "./Name";
import Rating from "./Rating";
import Description from "./Description";
import Price from "./Price";
import Tags from "./Tags";
import Actions from "./Actions";

interface ProductInfoProps {
  product: Product;
}

export default function Info({
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

      <Name name={product.name} />

      <Rating
        rating={4.8}
        reviews={1248}
      />

      <Description
        description={product.description}
      />

      <Price
        priceInPaisa={product.priceInPaisa}
      />

      <Tags tags={product.tags} />

      <Actions />
    </section>
  );
}