"use client";

import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";

export default function WishlistActions() {
  return (
    <div className="flex gap-3">
      <button
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
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
        <RiShoppingBagLine className="h-4 w-4" />
        <span>Buy Now</span>
      </button>

      <button
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-black
          px-5
          py-2.5
          text-sm
          font-medium
          transition
          hover:bg-black
          hover:text-white
          cursor-pointer
          whitespace-nowrap
        "
      >
        <FaRegBookmark className="h-4 w-4" />
        <span>Save</span>
      </button>
    </div>
  );
}