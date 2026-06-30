"use client";

import { Product } from "@prisma/client";
import Link from "next/link";
import ProductCard from "../ProductCard";
import { DISCOVER_SOURCE, discoverUrl } from "@/lib/routes/discover";

interface Props {
  products: Product[];
  title: string;
}

export default function Trending({
  products,
  title,
}: Props) {
  return (
    <section className="mt-8 md:px-1">
      <div className="mb-4 flex items-center justify-between mx-3">
        <p className="text-base md:text-lg font-semibold text-slate-800">
          {title}
        </p>
        <Link
          href={discoverUrl({ source: DISCOVER_SOURCE.TRENDING })}
          className="flex h-8 px-3 lg:h-10 lg:px-4 items-center justify-center rounded-xl border border-gray-300 text-xs lg:text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          View all
        </Link>
      </div>

      {/* 2-column grid for products */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4 px-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}