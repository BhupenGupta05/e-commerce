import { savePreferences, skipOnboarding } from "@/app/actions/onboarding";

type Option = {
  id: string;
  label: string;
};

const shoppingCategories: Option[] = [
  { id: "home", label: "Home & furniture" },
  { id: "electronics", label: "Electronics" },
  { id: "fashion", label: "Fashion" },
  { id: "books", label: "Books" },
  { id: "kitchen", label: "Kitchen" },
  { id: "fitness", label: "Fitness" },
  { id: "beauty", label: "Beauty" },
];

const styleVibes: Option[] = [
  { id: "minimal", label: "Minimal" },
  { id: "cozy", label: "Cozy" },
  { id: "bold", label: "Bold" },
  { id: "natural", label: "Natural" },
  { id: "retro", label: "Retro" },
];

const budgets: Option[] = [
  { id: "under1000", label: "Under ₹1,000" },
  { id: "1k-10k", label: "₹1k – ₹10k" },
  { id: "10k-50k", label: "₹10k – ₹50k" },
  { id: "50k+", label: "₹50k+" },
];

function Chip({ name, value, type = "checkbox", children }:
  { name: string; value: string; type?: "checkbox" | "radio"; children: React.ReactNode }
) {
  return (
    <label className="cursor-pointer">
      <input type={type} name={name} value={value} className="hidden peer" />
      <span className="peer-checked:bg-black peer-checked:text-white peer-checked:border-black rounded-full border border-zinc-300 px-4 py-2 text-sm block">
        {children}
      </span>
    </label>
    //     <button
    //       type="button"
    //       className="
    //   rounded-full
    //   border
    //   cursor-pointer
    //   border-zinc-300
    //   px-[clamp(0.75rem,2vw,1rem)]
    //   py-[clamp(0.4rem,1vw,0.6rem)]
    //   text-[clamp(0.75rem,1.2vw,0.875rem)]
    // "
    //     >
    //       {children}
    //     </button>
  );
}

/* ---------- RIGHT SIDE PREVIEW ---------- */

function PreviewCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="h-24 w-full rounded-xl bg-zinc-100 mb-3" />
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-muted-foreground">
        Personalized based on your selections
      </p>
    </div>
  );
}

function PreviewPanel() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Your preview feed</h2>

      <div className="space-y-3">
        <PreviewCard title="Minimal desk setup" />
        <PreviewCard title="Cozy home essentials" />
        <PreviewCard title="Budget tech picks" />
      </div>
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */

export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT: FORM */}
      <div className="flex justify-start px-6 md:px-0 py-4">
        <form
          action={savePreferences}
          className="flex w-full max-w-2xl flex-col gap-[clamp(1.25rem,3vw,2rem)]">
          <header className="space-y-2">
            <h1
              className="
    font-semibold
    tracking-tight
    text-[clamp(1.5rem,4vw,2.5rem)]
  "
            >
              Tell us what you love.
            </h1>
            <p className="max-w-lg text-xs md:text-sm lg:text-base text-muted-foreground">
              Pick a few — your feed personalises instantly. Change anytime.
            </p>
          </header>

          <fieldset className="space-y-3">
            <legend
              className="
    font-medium
    text-[clamp(0.875rem,1.5vw,1rem)]
  "
            >
              What are you shopping for?
            </legend>
            <div className="flex flex-wrap gap-2">
              {shoppingCategories.map((c) => (
                <Chip name="categories" value={c.id} key={c.id}>{c.label}</Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm lg:text-base font-medium">
              Your style vibe
            </legend>
            <div className="flex flex-wrap gap-2">
              {styleVibes.map((s) => (
                <Chip name="vibes" value={s.id} key={s.id}>{s.label}</Chip>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm lg:text-base font-medium">
              Typical budget per item
            </legend>
            <div className="flex flex-wrap gap-2">
              {budgets.map((b) => (
                <Chip name="budget" value={b.id} key={b.id} type="radio">{b.label}</Chip>
              ))}
            </div>
          </fieldset>

          <footer className="mt-2 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="
                rounded-xl
                bg-black
               px-[clamp(1rem,2vw,1.5rem)]
py-[clamp(0.75rem,1.5vw,1rem)]
text-[clamp(0.875rem,1.2vw,1rem)]
                font-medium
                text-white
                transition-opacity
                hover:opacity-90
              "
            >
              Show my picks
            </button>

            <button
              type="submit"
              formAction={skipOnboarding}
              className="
                rounded-xl
                border
             px-[clamp(1rem,2vw,1.5rem)]
py-[clamp(0.75rem,1.5vw,1rem)]
text-[clamp(0.875rem,1.2vw,1rem)]
                font-medium
                transition-colors
                hover:bg-zinc-100
              "
            >
              Skip for now
            </button>
          </footer>
        </form>
      </div>

      {/* RIGHT: PREVIEW */}
      <div className="hidden lg:flex border-x bg-zinc-50 px-10 py-10">
        <div className="w-full max-w-md">
          <PreviewPanel />
        </div>
      </div>
    </div>
  );
}