"use client";

import { IoMdHeart } from "react-icons/io";

export default function WishlistFavoriteButton() {
  return (
    <button className="text-red-500 transition hover:scale-105">
      <IoMdHeart fill="currentColor" size={18} />
    </button>
  );
}