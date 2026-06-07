import Image from "next/image";
import { Product } from "@/types/product";
import { PiLightningBold } from "react-icons/pi";

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  return (
    <article
      className="
        my-2
        group
        transition-all
        duration-300
        ease-out
        hover:scale-105
        cursor-pointer
      ">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          loading="eager"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <div
          className="
          flex items-center
          gap-1
          lg:gap-2
          absolute
          left-3
          top-3
          rounded-full
          bg-white
          px-2
          py-0.5
          lg:px-3 lg:py-1
          font-medium
          transition-all
          duration-200
          group-hover:bg-emerald-50
        "
        >
          <PiLightningBold size={10} className="text-emerald-800 lg:w-3 lg:h-3" />
          <span
            className="
          text-[10px]
          lg:text-xs font-bold">{product.match}% Match</span>
        </div>
      </div>

      <div className="mt-2 ml-3">
        <p className="text-xs lg:text-sm text-slate-600">
          {product.category}
        </p>

        <h3 className="mt-1 font-medium text-sm lg:text-base">
          {product.name}
        </h3>

        <p className="mt-1 text-sm lg:text-base font-bold">
          ${product.price}
        </p>
      </div>


    </article>
  );
}