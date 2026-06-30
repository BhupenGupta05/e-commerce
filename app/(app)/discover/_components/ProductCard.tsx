import { Product } from "@prisma/client";
import Image from "next/image";

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  return (

    <article
      className="
    group
    overflow-hidden
    rounded-xl
    bg-white
    border
    border-slate-100
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-md
  "
    >
      <div className="relative h-[clamp(7rem,20vw,9rem)] overflow-hidden">
        <Image
          src={product.imageUrl[0]}
          alt={product.name}
          fill
          className="
        object-cover
        transition-transform
        duration-300
        group-hover:scale-105
      "
        />
      </div>

      <div className="p-[clamp(0.75rem,0.6rem+0.5vw,1rem)]">
        <p className="text-[clamp(0.625rem,0.55rem+0.25vw,0.75rem)] font-medium uppercase tracking-wide text-slate-500">
          {product.category}
        </p>

        <h3
          className="
    mt-1
    min-h-10
    text-[clamp(0.75rem,0.8rem+0.3vw,.9rem)]
    font-semibold
    leading-tight
    text-slate-900
    line-clamp-2
  "
        >
          {product.name}
        </h3>

        <p className="mt-1 text-[clamp(.875rem,0.9rem+0.4vw,1rem)] font-semibold text-slate-900">
          ₹{(product.priceInPaisa / 100).toLocaleString("en-IN")}
        </p>

      </div>
    </article>
  );
}