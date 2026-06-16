"use client";

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useItemsPerView } from "@/app/(app)/(main)/discover/_hooks/useItemPerView";
import { Product } from "@prisma/client";
import ProductCarousel from "./ProductCarousel";


export default function RecommendationSection({products}: {products: Product[]}) {
  const itemsPerView = useItemsPerView();
  const [currIdx, setCurrIdx] = useState(0);

  const maxIndex = Math.max(
    0,
    products.length - itemsPerView
  );

  useEffect(() => {
    if (currIdx > maxIndex) {
      setCurrIdx(maxIndex);
    }
  }, [currIdx, maxIndex]);


  return (
    <section
      className="mt-8 md:px-1">
      <div className="mb-4 flex items-center justify-between mx-1">
        <p className="text-base md:text-lg font-semibold text-slate-800">
          Highly Recommended for You
        </p>

        <div
          className="flex items-center gap-2">
          <button
            onClick={() =>
              setCurrIdx((prev) =>
                Math.max(prev - 1, 0)
              )
            }
            disabled={currIdx === 0}
            className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-xl border border-gray-300 disabled:opacity-40 cursor-pointer"
          >
            <IoIosArrowBack size={16} className="lg:w-5 lg:h-5" />
          </button>

          <button
            onClick={() =>
              setCurrIdx((prev) =>
                Math.min(prev + 1, maxIndex)
              )
            }
            disabled={currIdx >= maxIndex}
            className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-xl border border-gray-300 disabled:opacity-40 cursor-pointer"
          >
            <IoIosArrowForward size={16} className="lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>

      <ProductCarousel
        products={products}
        currentIndex={currIdx}
        itemsPerView={itemsPerView}
      />
    </section>
  );
}