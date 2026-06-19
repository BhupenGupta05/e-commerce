"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/app/config/discover/navigation";

export default function BottomNav() {
    const pathname = usePathname();

    const isActiveLink = (href: string) => {
        if (href === "/") {
            return pathname === href;
        }
        return pathname.startsWith(href);
    }

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-on-primary/95 backdrop-blur-sm h-16">
            <ul className="mx-auto flex max-w-xl items-center justify-between px-4 py-2 pb-[env(safe-area-inset-bottom)]">
                {navigation.map((item) => {
                    const isActive = isActiveLink(item.href)
                    const Icon = item.icon;

                    return (
                        <li
                            key={item.label}
                            className="flex flex-1">
                            <Link
                                aria-label={item.label}
                                href={item.href}
                                className="relative flex flex-1 flex-col items-center justify-center gap-1"
                            >
                                {isActive && (
                                    <div className="absolute -top-1 w-1 h-1 rounded-full bg-emerald-600" />
                                )}
                                <Icon
                                    size={isActive ? 24 : 22}
                                    className={isActive ? "text-primary" : "text-slate-500"}
                                />
                                <span className={`text-xs ${isActive ? "text-primary font-semibold" : "text-slate-500"}`}>
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}