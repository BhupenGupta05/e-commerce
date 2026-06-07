"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";
import { menu } from "@/app/config/marketing/menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => {
    setMenuOpen(false);
  }
  return (
    <header className="px-6 py-6 md:px-7 md:py-7 lg:px-8 lg:py-8">
      <nav
        className="flex items-center justify-between mx-auto md:h-16 lg:h-12 md:grid md:grid-cols-3 md:max-w-8xl md:items-center">

        <div className="flex items-center justify-start">
          <Link
            href="/"
            aria-label="Storefront home page"
            className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl"
          >
            StoreFront
          </Link>
        </div>

        <ul className="hidden md:flex md:items-center md:justify-center md:gap-4 lg:gap-6 md:flex-wrap">
          {menu.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-md hover:text-primary lg:text-base transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-4">
          <div className="hidden items-center gap-3 md:flex lg:gap-3">
            <Link href="/login" className="text-sm hover:text-on-primary text-primary py-2 px-4 border uppercase tracking-widest rounded hover:bg-primary transition-colors cursor-pointer whitespace-nowrap lg:px-4">
              Sign In
            </Link>
            <Link href="/login" className="rounded px-4 py-2 text-sm hover:bg-primary/90 bg-primary border text-on-primary uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap lg:px-4">
              Get Started
            </Link>
          </div>


          <button
            aria-label="Open navigation Menu"
            className="cursor-pointer md:hidden"
            onClick={() => setMenuOpen(true)}>
            <RxHamburgerMenu size={24} />
          </button>
        </div>

      </nav>

      {/* Mobile overlay */}

      <MobileMenu
        isOpen={menuOpen}
        onClose={handleClose}
      />
    </header>
  );
}