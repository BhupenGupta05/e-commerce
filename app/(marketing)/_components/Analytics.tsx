import { analytics } from "@/app/(marketing)/_config/analytics";

export default function Analytics() {
  return (
    <section className="mt-16 mx-6 px-2 md:mx-6 lg:mx-0">
      <h2 className="text-2xl font-semibold lg:text-3xl md:mx-6 lg:mx-10">
        Live Analytics
      </h2>

      <div className="mt-8 space-y-2">
        {analytics.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex items-center justify-between border-l-4 border-emerald-600 bg-white p-4 md:mx-6 lg:mx-8"
           >
              <div className="flex items-center gap-4">
                <Icon className="w-5 h-5 lg:w-6 lg:h-6" />

                <span className="text-sm lg:text-base">{item.title}</span>
              </div>

              <span className="text-sm text-zinc-500 lg:text-base">
                {item.time}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}