import { HiOutlineSparkles } from "react-icons/hi2";
import FilterButton from "./FilterButton";

export default function DiscoverHeader() {
  return (
    <section aria-labelledby="discover-heading" className="px-3">
      {/* Badge */}
      <aside
        aria-label="Personalized updates"
        className="mb-4 flex w-full items-center gap-2 rounded-md bg-gray-200 px-4 py-3"
      >
        <HiOutlineSparkles
          aria-hidden="true"
          className="mt-0.5 h-[clamp(1rem,0.75rem+1vw,1.5rem)] w-[clamp(1rem,0.75rem+1vw,1.5rem)] shrink-0"
        />

        <div className="text-[clamp(0.75rem,0.7rem+0.3vw,0.875rem)]">
          <p className="font-medium ">
            5 new picks since your last visit
          </p>
          <p className="text-gray-600">
            Based on your saved items
          </p>
        </div>
      </aside>

      {/* Heading row */}
      <div className=" mt-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-[clamp(0.875rem,0.8rem+0.4vw,1.125rem)]">
            Good evening, Rahul
            </p>

          <div className="mt-1 flex items-end justify-between gap-4">
            <h1 className="text-[clamp(1.875rem,1.25rem+2vw,3rem)] font-semibold tracking-tight leading-[1.05]">
              Here&apos;s what&apos;s new
              <br className="sm:hidden" />
              {" "}for you
            </h1>
          </div>
        </div>

        <nav
          aria-label="Discover page actions"
          className="pt-10"
        >
          <FilterButton />
        </nav>
      </div>
    </section>
  );
}