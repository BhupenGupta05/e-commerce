"use client";

import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";
import { useState, useEffect, useCallback } from "react";
import { useInView } from 'react-intersection-observer'
import Link from "next/link";

interface Props {
  initialProducts: Product[];
  initialCursor: string | null;
  mood?: string;
}

export default function ProductGrid({
  initialProducts,
  initialCursor,
  mood,
}: Props) {
  const [products, setProducts] =
    useState(initialProducts);

  const [cursor, setCursor] =
    useState(initialCursor);

  const [loading, setLoading] =
    useState(false);

  const [hasMore, setHasMore] =
    useState(!!initialCursor);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "300px",
  })

  const loadMore = useCallback(async () => {
    if (!cursor || loading || !hasMore) return;

    try {
      setLoading(true);

      const params = new URLSearchParams();

      params.set("cursor", cursor);

      if (mood) {
        params.set("mood", mood);
      }

      const response = await fetch(`/api/products?${params}`);

      const data = await response.json();

      setProducts((prev) => [
        ...prev,
        ...data.products
      ]);

      setCursor(data.nextCursor);

      if (!data.nextCursor) {
        setHasMore(false);
      }
    }
    finally {
      setLoading(false);
    }
  }, [cursor, loading, hasMore, mood])

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/discover/${product.id}`}
            className="shrink-0 px-2"
            >
            <ProductCard key={product.id} product={product} />
          </Link>

        ))}
      </div>

      {hasMore && (
        <div
          ref={ref}
          className="mt-8 flex justify-center">
          {loading && (
            <p className="text-sm text-muted-foreground">
              Loading more...
            </p>
          )}

        </div>
      )}
    </>
  );
}