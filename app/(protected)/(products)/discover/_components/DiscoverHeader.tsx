import { HiSparkles } from "react-icons/hi2";
import FilterButton from "./FilterButton";

export default function DiscoverHeader() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex gap-1 items-center rounded-full badge px-2 py-1 md:px-3 md:py-2">
            <HiSparkles size={16} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            <p className="text-[10px] font-medium md:text-sm">Curated today</p>
          </div>

          <h1 className="mt-2 max-w-xl text-3xl font-bold md:text-6xl">
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