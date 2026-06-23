"use client";

import { IoTrashOutline } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";

export default function Actions() {
  return (
    <div className="flex gap-3">
      <button
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-black
          px-5
          py-2.5
          text-sm
          font-medium
          text-white
          transition
          hover:bg-black/90
          cursor-pointer
          whitespace-nowrap
        "
      >
        <PiShoppingCart className="h-4 w-4" />
        <span>Add to cart</span>
      </button>

      <button
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-black
          px-5
          py-2.5
          text-sm
          font-medium
          transition
          hover:border-red-500
          hover:text-red-500
          cursor-pointer
          whitespace-nowrap
        "
      >
        <IoTrashOutline className="h-4 w-4 hover:text-red-500" />
        <span>Remove</span>
      </button>
    </div>
  );
}