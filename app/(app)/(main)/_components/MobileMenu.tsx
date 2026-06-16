"use client";

import { extras } from "@/app/config/discover/extras";
import { menuDrawer } from "@/app/config/discover/menu";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50 z-50 md:hidden"
                    onClick={onClose}
                    aria-label="Close menu"
                />
            )}

            <div
                className={`fixed inset-0 z-60 bg-white transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b border-border">
                    <Link href="/" className="text-xl font-bold text-primary tracking-tight">
                        StoreFront
                    </Link>

                    <button
                        className="p-2 cursor-pointer"
                        onClick={onClose}
                        aria-label="Close Menu"
                    >
                        <RxCross2 size={24} />
                    </button>
                </div>

                <nav className="flex flex-col px-6 py-4 space-y-4">
                    {menuDrawer.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-xs font-semibold uppercase tracking-wide text-text hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                    <hr className="border-border space-y-4" />

                    {extras.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-xs font-semibold uppercase tracking-wide text-text hover:text-primary transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    {item.label}
                                </div>
                            </Link>
                        ))}

                    <hr className="border-border space-y-4" />

                    <div className="flex flex-col gap-4 mt-4 text-center">
                        <Link href="/sign-out" className="btn-secondary py-3 px-4 text-xs uppercase">
                            Sign out
                        </Link>
                    </div>


                </nav>
            </div>
        </>
    )
}