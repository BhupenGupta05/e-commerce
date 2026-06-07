import Image from "next/image";
import { Mood } from "@/types/mood";

interface Props {
  mood: Mood;
}

export default function MoodCard({
  mood,
}: Props) {
  return (
    <article
      className="
    relative overflow-hidden 
    rounded-xl group transition-all 
    duration-300 ease-out hover:scale-105 
    cursor-pointer"
    >
      <Image
        src={mood.image}
        alt={mood.title}
        width={800}
        height={500}
        loading="eager"
        className="h-auto w-full"
      />

      <div
        className="
        absolute
        inset-0
        flex
        flex-col
        justify-end
        bg-black/30
        p-5
        text-white
      "
      >
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
          {mood.title}
        </h3>

        <p className="text-xs md:text-sm lg:text-base">{mood.description}</p>

        {mood.cta && (
          <button
            className="
              text-xs 
              md:text-sm 
              lg:text-base
              mt-4
              font-semibold
              w-fit
              rounded-md
              bg-white
              px-4
              py-2
              text-black
              opacity-0
              translate-y-2
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-y-0
              hover:bg-gray-100
              hover:scale-105
            "
          >
            {mood.cta}
          </button>
        )}
      </div>
    </article>
  );
}