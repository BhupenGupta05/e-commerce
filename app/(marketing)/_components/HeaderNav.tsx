"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { menu } from "@/app/(marketing)/_config/menu";
import MobileMenu from "./MobileMenu";

export default function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => {
    setMenuOpen(false);
  }
  return (
    <header className="app-header">
      <nav
        className="flex items-center justify-between mx-auto md:h-16 lg:h-12 md:grid md:grid-cols-3 md:max-w-8xl md:items-center">

        <div className="flex items-center ">
          <Link
            href="/"
            aria-label="Storefront home"
            className="app-logo"
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
            <Link href="/login" className="btn-primary px-4 py-2 text-sm capitalize whitespace-nowrap lg:px-4">
              Get started
            </Link>
            <Link href="/login" className="btn-secondary text-sm hover:text-white text-black py-2 px-4 border caitalize whitespace-nowrap lg:px-4">
              Sign in
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