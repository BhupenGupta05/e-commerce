import { footer } from "@/app/(marketing)/_config/footer";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-18 px-6">
      <Link
        href="/"
        className="text-center block app-logo">
        StoreFront
      </Link>

      <div className="mt-8 text-xs flex flex-wrap justify-center gap-4 md:gap-6 md:text-sm lg:text-md">
        {footer.map((item) => (
          <Link
            key={item.label}
            className="transition-colors hover:text-black/90"
            href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      <p className="mt-12 pb-4 text-[10px] text-center text-zinc-500 md:text-sm">
        © 2026 StoreFront. Quietly Powerful
        Intelligence.
      </p>
    </footer>
  );
}