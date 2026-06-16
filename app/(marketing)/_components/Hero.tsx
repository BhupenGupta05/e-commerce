import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 pt-6 text-center md:px-0 md:pt-0">
      <div className="mx-auto inline-flex rounded-full badge px-6 py-2">
        <span className="text-xs uppercase tracking-wide md:tracking-wider lg:text-sm">
          Autonomous Commerce
        </span>
      </div>

      <h1 className="mt-8 text-5xl font-bold tracking-tight lg:text-6xl">
        Intelligence,
        <br />
        Curated.
      </h1>

      <p className="mx-auto mt-6 max-w-md text-xl leading-relaxed text-zinc-600 md:mx-0 md:max-w-full">
        The next evolution of commerce -
        where quiet intelligence meets
        meticulous design.
      </p>

      <Link
        href="/login"
        className="mt-10 inline-block btn-primary px-10 py-4 text-md font-medium uppercase">
        Get Started
      </Link>
    </section>
  );
}