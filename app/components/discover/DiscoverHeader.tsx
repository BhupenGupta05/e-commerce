import FilterButton from "./FilterButton";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function DiscoverHeader() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex gap-2 items-center rounded-full bg-green-100 px-3 py-1 font-medium text-emerald-800">
            <HiOutlineSparkles size={16} className="lg:w-5 lg:h-5" />
            <p className="text-xs lg:text-sm">Curated today</p>
          </div>

          <h1 className="mt-2 max-w-xl text-4xl font-bold md:text-6xl">
            Refined picks for{" "}
            <span className="whitespace-nowrap">
              your aesthetic.
            </span>
          </h1>
        </div>

        <div>
          <FilterButton />
        </div>
        
      </div>
    </section>
  );
}