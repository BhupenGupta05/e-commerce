import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";

export default function ProductActions() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 mt-6">
      <button
        className="
          flex flex-1 items-center justify-center gap-2 tracking-wide rounded bg-black px-6 py-4
          font-medium text-white
          transition hover:bg-black/90
          cursor-pointer
        "
      >
        <RiShoppingBagLine size={20} className="w-5 h-5 lg:w-6 lg:h-6" />
        <span className="text-sm lg:text-base">

          Buy Now
        </span>
      </button>

      <button
        className="
        flex flex-1 justify-center items-center gap-2
        tracking-wide
          rounded border border-black
          px-6 py-4 font-medium
          transition hover:bg-black hover:text-white
          cursor-pointer
        "
      >
        <FaRegBookmark size={20} className="w-5 h-5 lg:w-6 lg:h-6" />
        <span className="text-sm lg:text-base">
          Save
        </span>
      </button>
    </div>
  );
}