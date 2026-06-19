"use client";

import Image from "next/image";
import { ProductImage } from "./ProductGallery";

interface Props {
  images: ProductImage[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function MobileGallery({
  images,
  activeIndex,
  setActiveIndex,
}: Props) {

  if (!images.length) {
    return <div>No images available</div>;
  }
  return (
  <figure className="relative aspect-square w-full md:max-h-130 overflow-hidden">
      <Image
        src={images[activeIndex].url}
        alt={images[activeIndex].alt ?? ""}
        fill
        priority
        className="object-cover p-2"
      />

      <figcaption className="sr-only">
        Product image {activeIndex + 1} of {images.length}
      </figcaption>

      <output
        aria-label="Current image"
        className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white"
      >
        {activeIndex + 1} / {images.length}
      </output>

      <nav
        aria-label="Product images"
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2"
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            aria-label={`View image ${index + 1}`}
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${activeIndex === index
                ? "bg-black"
                : "bg-neutral-300"
              }`}
          />
        ))}
      </nav>
    </figure>
  );
}