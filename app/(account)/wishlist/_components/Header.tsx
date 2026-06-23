"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";
import { PiUserCircle } from "react-icons/pi";
import AppBreadcrumbs, { BreadcrumbItemType } from "@/components/AppBreadcrumbs";
import { menu } from "@/app/(app)/discover/_config/menu";

interface HeaderProps {
    breadcrumbs: BreadcrumbItemType[];
}

export default function Header({ breadcrumbs }: HeaderProps) {
    const router = useRouter();

    return (
        <header className="app-header backdrop-blur">
            <div className="mx-auto md:max-w-8xl">

                <nav
                    aria-label="Global navigation"
                    className="flex items-center justify-between">

                    {/* LEFT SECTION */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            aria-label="Go back"
                            className="md:hidden cursor-pointer">
                            <IoChevronBackOutline size={24} />
                        </button>

                        <span className="text-xl font-bold tracking-tight md:hidden">Saved for later</span>

                        <Link
                            href="/"
                            aria-label="Storefront home page"
                            className="hidden md:block app-logo"
                        >
                            StoreFront
                        </Link>
                    </div>


                    {/* RIGHT SECTION */}
                    <div className="flex items-center gap-5">

                        {menu.map((item) => {
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.label}
                                    type="button"
                                    aria-label={item.label}
                                    className="hidden md:flex items-center justify-center cursor-pointer"
                                >
                                    <Icon size={24} />
                                </button>
                            );
                        })}

                        <button
                            type="button"
                            aria-label="Edit wishlist"
                            className="flex items-center gap-2 border border-gray-300 text-black rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-50 transition cursor-pointer md:hidden">
                            Manage list
                        </button>

                        {/* <button
                            type="button"
                            aria-label="Edit wishlist"
                            className="flex items-center justify-center cursor-pointer md:hidden"
                        >
                            <RiEditBoxLine size={22} />
                        </button> */}

                        {/* <button
                            type="button"
                            aria-label="Delete wishlist"
                            className="flex items-center justify-center cursor-pointer md:hidden"
                        >
                            <MdDeleteOutline size={24} />
                        </button> */}

                        <button
                            type="button"
                            aria-label="Your account"
                            className="hidden md:flex items-center justify-center cursor-pointer"
                        >
                            <PiUserCircle size={24} />
                        </button>
                    </div>
                </nav>

                <AppBreadcrumbs items={breadcrumbs} className="hidden md:inline-flex mt-1.5 md:mt-2" />
            </div>
        </header>
    )
}