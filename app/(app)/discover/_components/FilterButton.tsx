import { LuFilter } from "react-icons/lu";

export default function FilterButton() {
  return (
    <button
      className="
        flex
        h-[clamp(2.5rem,2.25rem+1vw,3rem)]
        w-[clamp(2.5rem,2.25rem+1vw,3rem)]
        items-center
        justify-center
        rounded-xl
        border
        border-gray-300
        transition-all
        duration-200
        hover:bg-gray-50
        active:bg-gray-100
        cursor-pointer
      "
    >
      <LuFilter
        className="
          text-gray-600
          h-[clamp(1rem,0.875rem+0.5vw,1.5rem)]
          w-[clamp(1rem,0.875rem+0.5vw,1.5rem)]
        "
      />
    </button>
  );
}