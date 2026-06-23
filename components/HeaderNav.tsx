"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { PiUserCircle } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { navigation } from "@/app/(app)/discover/_config/navigation";
import { menu } from "@/app/(app)/discover/_config/menu";
import MobileMenu from "@/app/(app)/discover/_components/MobileMenu";


export default function HeaderNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    

    const handleClose = () => {
        setMenuOpen(false);
    }

    const isActiveLink = (href: string) => {
        if(href === "/") {
            return pathname === href;
        }
        return pathname.startsWith(href);
    }
    return (
        <header className="app-header">
            <nav
                className="flex items-center justify-between mx-auto md:h-16 lg:h-12 md:grid md:grid-cols-3 md:max-w-8xl md:items-center">

                <div className="flex items-center justify-start">
                    <Link
                        href="/"
                        aria-label="Storefront home page"
                        className="app-logo"
                    >
                        StoreFront
                    </Link>
                </div>

                <ul className="hidden md:flex md:items-center md:justify-center md:gap-4 lg:gap-6 md:flex-wrap">
                    {navigation.map((item) => {
                        const isActive = isActiveLink(item.href);

                        return (
                             <li key={item.label}>
                            <Link
                                href={item.href}
                                className={`
                                    text-md hover:text-primary 
                                lg:text-base transition-all 
                                duration-200 pb-2 border-b-2
                                whitespace-nowrap
                                ${isActive
                                    ? 'text-primary border-primary'
                                    : 'text-gray-600 border-transparent hover:border-gray-300'
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                        )
                    })}
                </ul>

                <div className="flex items-center justify-end gap-5">

                    {menu.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.label}
                                aria-label={item.label}
                                className="cursor-pointer flex items-center justify-center"
                            >
                                <Icon size={24} />
                            </button>
                        )
                    })}

                    <button
                        aria-label="Your account"
                        className="cursor-pointer items-center justify-center hidden md:flex"
                    >
                        <PiUserCircle size={24} />
                    </button>


                    <button
                        aria-label="Open navigation menu"
                        className="cursor-pointer flex items-center justify-center md:hidden"
                        onClick={() => setMenuOpen(true)}
                    >
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