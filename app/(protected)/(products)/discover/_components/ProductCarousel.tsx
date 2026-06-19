"use client";

import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface Props {
  products: Product[];
  page: number;
  itemsPerView: number;
}

export default function ProductCarousel({
  products,
  page,
  itemsPerView,
}: Props) {
  return (
    <div className="overflow-hidden -mx-2">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${page * 100}%)`,
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/discover/${product.id}`}
            className="shrink-0 px-2"
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