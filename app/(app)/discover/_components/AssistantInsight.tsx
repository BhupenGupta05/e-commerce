"use client";

import { DISCOVER_SOURCE, discoverUrl } from "@/lib/routes/discover";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function AssistantInsight({ insight }: { insight: string }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;
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
        <p
          className="
    inline-flex
    rounded-full
    bg-green-700
    px-3
    py-1
    text-[clamp(0.625rem,0.55rem+0.3vw,0.875rem)]
  "
        >
          Assistant Insight
        </p>

        <button
          onClick={() => setDismissed(true)}
          className="cursor-pointer p-1">
          <RxCross2
            className="
    h-[clamp(1rem,0.9rem+0.4vw,1.25rem)]
    w-[clamp(1rem,0.9rem+0.4vw,1.25rem)]
  "
          />
        </button>
      </div>

      <h2
        className="
    mt-6
    max-w-2xl
    font-semibold
    text-[clamp(0.875rem,0.9rem+0.8vw,1rem)]
  "
      >
        {insight}
      </h2>

      <Link
        href={discoverUrl({ source: DISCOVER_SOURCE.ASSISTANT })}
        className="
    mt-6
    inline-block
    rounded-3xl
    bg-green-400
    px-4
    py-2
    font-medium
    text-[clamp(0.75rem,0.7rem+0.3vw,0.875rem)]
    text-black
  "
      >
        View Recommendations
      </Link>

    </section>
  );
}