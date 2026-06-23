"use client";

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Product } from "@prisma/client";
import ProductCarousel from "./ProductCarousel";
import { useItemsPerView } from "../_hooks/useItemPerView";
import Link from "next/link";

const CAROUSEL_LIMIT = 12;

interface Props {
  products: Product[];
  title: string;
}

export default function RecommendationSection({
  products,
  title,
}: Props) {
  const itemsPerView = useItemsPerView();
  const sliced = products.slice(0, CAROUSEL_LIMIT);

  const totalPages = Math.ceil(
    sliced.length / itemsPerView
  );

  const [page, setPage] = useState(0);

  const atStart = page === 0;
  const atEnd = page === totalPages - 1;

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(Math.max(totalPages - 1, 0));
    }
  }, [page, totalPages]);

  if (!sliced.length) return null;

  return (
    <section className="mt-8 px-3 md:px-2">
      <div className="mb-4 flex items-center justify-between mx-3">
        <p className="text-[clamp(1rem,0.9rem+0.5vw,1.125rem)] font-semibold text-slate-800">
          {title}
        </p>

        <div className="flex items-center gap-2">
          {!atStart && (
            <button
              onClick={() =>
                setPage((prev) => Math.max(prev - 1, 0))
              }
              className="
  flex
  h-[clamp(2rem,1.75rem+1vw,2.5rem)]
  w-[clamp(2rem,1.75rem+1vw,2.5rem)]
  items-center
  justify-center
  rounded-xl
  border
  border-gray-300
  cursor-pointer
"
            >
              <IoIosArrowBack
                size={16}
                className="lg:w-5 lg:h-5"
              />
            </button>
          )}

          {!atEnd ? (
            <button
              onClick={() =>
                setPage((prev) =>
                  Math.min(prev + 1, totalPages - 1)
                )
              }
              className="
  flex
  h-[clamp(2rem,1.75rem+1vw,2.5rem)]
  w-[clamp(2rem,1.75rem+1vw,2.5rem)]
  items-center
  justify-center
  rounded-xl
  border
  border-gray-300
  cursor-pointer
"
            >
              <IoIosArrowForward
                size={16}
                className="lg:w-5 lg:h-5"
              />
            </button>
          ) : (
            totalPages > 1 && (
              <Link
                href="/discover?source=recommended"
                className="flex h-8 px-3 lg:h-10 lg:px-4 items-center justify-center rounded-xl border border-gray-300 text-xs lg:text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                View all
              </Link>
            )
          )}
        </div>
      </div>

      <ProductCarousel
        products={sliced}
        page={page}
        itemsPerView={itemsPerView}
      />
    </section>
  );
}