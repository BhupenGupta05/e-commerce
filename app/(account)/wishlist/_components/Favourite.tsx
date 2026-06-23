"use client";

import { IoMdHeartEmpty } from "react-icons/io";

export default function Favourite() {
  return (
    <button
      aria-label="Remove from favourites"
      className="transition hover:scale-105 cursor-pointer">
      <IoMdHeartEmpty fill="currentColor" size={18} />
    </button>
  );
}