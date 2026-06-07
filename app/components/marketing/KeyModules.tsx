import { modules } from "@/app/config/marketing/modules";

export default function KeyModules() {
  return (
    <section className="mt-18 px-1 mx-6 lg:mx-0">
      <div className="md:mx-6 lg:mx-10">
        <h2 className="text-2xl font-semibold md:text-2xl lg:text-3xl">
          Key Modules
        </h2>

        <p className="mt-2 text-sm text-zinc-500 md:text-base">
          Swipe to explore features
        </p>
      </div>

      <div className="mt-8 flex snap-x gap-4 overflow-x-auto px-6 justify-around md:mx-4 lg:mx-4 lg:gap-16">
        {modules.map((module) => (
          <article
            key={module.title}
            className="flex flex-col min-w-[320px] snap-center rounded-xl bg-zinc-100 p-8"
          >
            <h3 className="text-lg font-semibold lg:text-xl">
              {module.title}
            </h3>

            <p className="mt-4 text-sm text-zinc-600 lg:text-base">
              {module.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}