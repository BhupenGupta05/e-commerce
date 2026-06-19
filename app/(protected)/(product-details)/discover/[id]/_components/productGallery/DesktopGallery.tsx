"use client";

import Image from "next/image";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { ProductImage } from "./ProductGallery";

interface Props {
  images: ProductImage[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const VISIBLE_COUNT = 4;
const THUMB_SIZE = 80;
const THUMB_GAP = 12;
const ITEM_HEIGHT = THUMB_SIZE + THUMB_GAP;

export default function DesktopGallery({
  images,
  activeIndex,
  setActiveIndex,
}: Props) {
  const [startIdx, setStartIdx] = useState(0);

  if (!images.length) {
    return <p>No images available</p>;
  }

  const maxStartIdx = Math.max(
    0,
    images.length - VISIBLE_COUNT
  );

  const canScrollUp = startIdx > 0;
  const canScrollDown = startIdx < maxStartIdx;

  return (
    <figure className="flex items-start gap-4 py-4">
      {/* Thumbnail Rail */}
      <nav
        aria-label="Product images"
        className="flex shrink-0 flex-col items-center gap-3"
      >
        <button
          type="button"
          aria-label="Previous thumbnails"
          disabled={!canScrollUp}
          onClick={() =>
            setStartIdx((prev) => Math.max(0, prev - 1))
          }
          className="
            flex h-8 w-8 items-center justify-center
            rounded-full border border-neutral-300 bg-white
            transition-all duration-200
            hover:bg-neutral-50
            disabled:pointer-events-none
            disabled:opacity-30
          "
        >
          <IoChevronUp size={18} />
        </button>

        <div
          className="overflow-hidden py-1"
          style={{
            height:
              VISIBLE_COUNT * THUMB_SIZE +
              (VISIBLE_COUNT - 1) * THUMB_GAP +
              8,
          }}
        >
          <ul
            className="flex flex-col gap-3 transition-transform duration-300 ease-out"
            style={{
              transform: `translateY(-${
                startIdx * ITEM_HEIGHT
              }px)`,
            }}
          >
            {images.map((image, index) => (
              <li key={image.id}>
                <button
                  type="button"
                  aria-label={`View image ${index + 1}`}
                  aria-current={
                    activeIndex === index
                      ? "true"
                      : undefined
                  }
                  onClick={() => setActiveIndex(index)}
                  className={`
                    relative h-20 w-20 overflow-hidden rounded-xl
                    border 
                    transition-all duration-200
                    focus:outline-none
                    ${
                      activeIndex === index
                        ? "border border-emerald-500"
                        : "border-slate-200 hover:border-neutral-300"
                    }
                  `}
                >
                  <Image
                    src={image.url}
                    alt={image.alt ?? ""}
                    fill
                    sizes="80px"
                    className="object-contain p-2"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          aria-label="Next thumbnails"
          disabled={!canScrollDown}
          onClick={() =>
            setStartIdx((prev) =>
              Math.min(maxStartIdx, prev + 1)
            )
          }
          className="
            flex h-8 w-8 items-center justify-center
            rounded-full border border-neutral-300 bg-white
            transition-all duration-200
            hover:bg-neutral-50
            disabled:pointer-events-none
            disabled:opacity-30
          "
        >
          <IoChevronDown size={18} />
        </button>
      </nav>

      {/* Main Image */}
      <div
  className="
    relative
    w-full
    aspect-square
    overflow-hidden
    rounded-3xl
  "
>
  <Image
    src={images[activeIndex].url}
    alt={images[activeIndex].alt ?? ""}
    fill
    priority
    className="object-contain p-4"
  />
</div>
    </figure>
  );
}