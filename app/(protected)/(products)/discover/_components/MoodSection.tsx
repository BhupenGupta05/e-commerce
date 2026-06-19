"use client";

import Masonry from "react-masonry-css";
import { moods } from "@/data/mood";
import MoodCard from "./MoodCard";

const breakpointColumns = {
  default: 4,
  1280: 4,
  1024: 3,
  768: 2,
  640: 2,
};

export default function MoodSection() {
  return (
    <section className="mt-10 md:px-1">
      <p className="mb-4 text-base md:text-lg font-semibold text-slate-800">
        Discover by Mood
      </p>

      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-4"
        columnClassName="space-y-4"
      >
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            mood={mood}
          />
        ))}
      </Masonry>
    </section>
  );
}