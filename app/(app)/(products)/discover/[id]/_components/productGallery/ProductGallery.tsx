"use client";

import { useState } from "react";
import DesktopGallery from "./DesktopGallery";
import MobileGallery from "./MobileGallery";

export interface ProductImage {
  id: string;
  url: string;
  alt?: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
}

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  return (
    <>
      <div className="hidden md:block">
        <DesktopGallery
          images={images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>

      <div className="md:hidden">
        <MobileGallery
          images={images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </>
  );
}