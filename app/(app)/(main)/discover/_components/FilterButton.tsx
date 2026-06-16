import { LuFilter } from "react-icons/lu";

export default function FilterButton() {
  return (
    <button
      className="
        flex
        h-10
        w-10
        md:h-11
        md:w-11
        lg:h-12
        lg:w-12
        border
        border-gray-300
        items-center
        justify-center
        rounded-xl
        hover:bg-gray-50
        active:bg-gray-100
        transition-all
        duration-200
        cursor-pointer
      "
    >
      <LuFilter 
        size={16} 
        className="
        text-gray-600
          md:w-5 md:h-5
          lg:w-6 lg:h-6
        " 
      />
    </button>
  );
}