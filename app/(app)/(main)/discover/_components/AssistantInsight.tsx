import { RxCross2 } from "react-icons/rx";

export default function AssistantInsight() {
  return (
    <section
      className="
      mt-4
        rounded-3xl
        bg-linear-to-r
        from-slate-950
        to-cyan-950
        p-6
        text-white
      "
    >
      <div className="flex items-center justify-between">
        <p className="
        inline-flex
          rounded-full
          bg-green-700
          px-3
          py-1
          text-[10px]
          md:text-xs
          lg:text-sm
        ">Assistant Insight</p>
        <button className="cursor-pointer p-1">
          <RxCross2 size={16} className="lg:w-5 lg:h-5" />
        </button>
      </div>

      <h2 className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl font-semibold">
        Based on your recent interest in
        minimalist architecture, I've found
        three unique pieces for your home.
      </h2>

      <button
        className="
          mt-6
          rounded-3xl
          bg-green-400
          px-4
          py-2
          font-medium
          text-xs
          md:text-sm
          lg:text-base
          text-black
          cursor-pointer
        "
      >
        View Recommendations
      </button>
    </section>
  );
}