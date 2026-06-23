"use client";

import { useEffect, useState } from "react";

export function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(5);
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(2);
      }
    };

    update();
    window.addEventListener("resize", update);

    return () =>
      window.removeEventListener("resize", update);
  }, []);

  return itemsPerView;
}