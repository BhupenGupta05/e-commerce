import { modules } from "@/app/(marketing)/_config/modules";

export default function KeyModules() {
  return (
    <section className="mt-16 px-1 mx-6 lg:mx-0">
      <div className="md:mx-6 lg:mx-10">
        <h2 className="text-md font-semibold md:text-lg">
          Built around how you shop
        </h2>

        {/* <p className="mt-2 text-sm text-zinc-500 md:text-base">
          Swipe to explore features
        </p> */}
      </div>

      <div className="mt-8 flex flex-col md:flex-row md:snap-x gap-4 md:overflow-x-auto md:px-6 justify-around md:mx-4 lg:mx-4 lg:gap-16">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <article
              key={module.title}
              className="flex flex-col min-w-[320px] snap-center rounded-xl bg-zinc-100 p-5"
            >
              <Icon size={22} />
              <h3 className="mt-2 text-base md:text-lg font-semibold">
                {module.title}
              </h3>

              <p className="text-xs md:text-sm text-zinc-600">
                {module.description}
              </p>
            </article>
          )})}
      </div>
    </section>
  );
}