"use client";

import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";
import Link from "next/link";


interface Props {
  products: Product[];
  currentIndex: number;
  itemsPerView: number;
}

export default function ProductCarousel({
  products,
  currentIndex,
  itemsPerView,
}: Props) {
  return (
    <div className="overflow-hidden -mx-2">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${
            currentIndex * (100 / itemsPerView)
          }%)`,
        }}
      >
        {products.map((product) => (
          <Link
          href={`/discover/${product.id}`}
            key={product.id}
            className="shrink-0 px-2 cursor-pointer"
            style={{
              width: `${100 / itemsPerView}%`,
            }}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}