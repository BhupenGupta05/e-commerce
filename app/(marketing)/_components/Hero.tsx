import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="px-6 pt-6 text-center md:px-0 md:pt-0">
      <div className="mx-auto inline-flex gap-2 rounded-full badge px-4 py-2">
        <HiOutlineSparkles />
        <span className="text-xs">
          Curated daily by AI
        </span>
      </div>

      <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">
        Your taste,
        <br />
        finally understood.
      </h1>

      <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-zinc-600 md:mx-0 md:max-w-full wrap-break-word">
        Shop a feed that learns what you love and gets better every day.
      </p>

      <div className="hidden md:flex justify-between items-center gap-4 md:mt-8">
        <Link
          href="/discover"
          className="flex btn-primary px-9 py-3 text-sm capitalize font-medium text-wrap">
          Explore your picks
        </Link>

        <Link
          href="/login"
          className="flex btn-secondary px-9 py-3 text-sm capitalize font-medium text-wrap">
          See how it works
        </Link>
      </div>

    </section>
  );
}

