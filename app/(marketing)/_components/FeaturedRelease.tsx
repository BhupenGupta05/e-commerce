import Image from "next/image";

export default function FeaturedRelease() {
  return (
    <section className="mt-10 px-6 md:mt-0 md:px-0">
      <div className="relative overflow-hidden rounded-lg mx-auto">
        <Image
          src="/Tote.png"
          alt="Obsidian Tote"
          data-alt="A high-end, minimalist obsidian-colored leather tote bag placed on a polished marble surface. The lighting is dramatic and directional, creating soft shadows that emphasize the texture of the leather. The background is a clean, off-white architectural space with neutral tones, embodying a quiet, powerful, and luxury aesthetic consistent with high-end commerce design."
          width={700}
          height={900}
          priority
          className="h-auto max-h-100 object-cover w-full grayscale contrast-110 md:max-h-120 lg:max-h-130"
        />

        <div className="absolute bottom-8 left-8 text-on-primary">
          <p className="uppercase text-xs md:text-sm">
            Featured Release
          </p>

          <h2 className="mt-2 text-xl md:text-2xl">
            The Obsidian Tote
          </h2>
        </div>
      </div>
    </section>
  );
}