import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <header className="border-b">
        <nav
          aria-label="Primary navigation"
          className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-6"
        >
          {/* Left — logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Storefront home page" className="text-xl font-bold">
              Storefront
            </Link>
          </div>

          {/* Center — nav links */}
          <ul className="flex items-center justify-center gap-6">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/">Discover</Link></li>
            <li><Link href="/for-you">For You</Link></li>
            <li><Link href="/assistant">Assistant</Link></li>
          </ul>

          {/* Right — actions */}
          <ul className="flex items-center justify-end gap-6">
            <li>
              <button className="flex items-center">
                <IoSearchOutline size={20} />
              </button>
            </li>
            <li>
              <Link href="/cart" aria-label="View shopping cart">
                <AiOutlineShopping size={20} />
              </Link></li>
            <li>
              <button className="flex items-center" type="button" aria-label="Open user menu">
                <PiUserCircle size={20} />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          aria-labelledby="hero-heading"
          className="mx-auto max-w-7xl px-6 py-16"
        >
          <h1
            id="hero-heading"
            className="text-5xl font-bold"
          >
            Discover Products You'll Love
          </h1>

          <p className="mt-4 max-w-2xl text-lg">
            Shop smarter with AI-powered recommendations, personalized
            collections, and trending products curated just for you.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/shop"
              aria-label="Start shopping"
            >
              Shop Now
            </Link>

            <Link
              href="/discover"
              aria-label="Explore trending products"
            >
              Explore Trends
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center">
        <p>&copy; 2026 Storefront. All rights reserved.</p>
      </footer>
    </>
  );
}