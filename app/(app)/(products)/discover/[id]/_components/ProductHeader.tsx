"use client";

import { IoChevronBackOutline } from "react-icons/io5";
import { PiExport, PiUserCircle } from "react-icons/pi";
import { menu } from "@/app/config/discover/menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AppBreadcrumbs, { BreadcrumbItemType } from "@/components/AppBreadcrumbs";
import WishlistButton from "./WishlistButton";

interface ProductHeaderProps {
    breadcrumbs: BreadcrumbItemType[]
    productId: string;
    initialSaved: boolean;
}

export default function ProductHeader({ breadcrumbs, productId, initialSaved }: ProductHeaderProps) {
    const router = useRouter();
    
    return (
        <header className="sticky
                top-0
                z-50
                bg-white/80
                backdrop-blur px-6 py-6 md:px-7 md:py-7 lg:px-8 lg:py-8">
            <div className="mx-auto md:max-w-8xl">

                {/* Left most section */}
                <nav
                    aria-label="Global navigation"
                    className="flex items-center justify-between">

                    <button
                        type="button"
                        onClick={() => router.back()}
                        aria-label="Go back"
                        className="md:hidden">
                        <IoChevronBackOutline size={24} />
                    </button>

                    <Link
                        href="/"
                        aria-label="Storefront home page"
                        className="hidden md:block text-xl font-bold tracking-tight md:text-2xl lg:text-3xl"
                    >
                        StoreFront
                    </Link>

                    {/* Rightmost section */}
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

                       <WishlistButton productId={productId} initialSaved={initialSaved} />


                        <button
                            type="button"
                            aria-label="Share product"
                            className="flex items-center justify-center cursor-pointer md:hidden"
                        >
                            <PiExport size={24} />
                        </button>


                        <button
                            type="button"
                            aria-label="Your account"
                            className="hidden md:flex items-center justify-center cursor-pointer"
                        >
                            <PiUserCircle size={24} />
                        </button>
                    </div>
                </nav>

                <AppBreadcrumbs items={breadcrumbs} className="hidden md:block mt-1.5 md:mt-2" />
            </div>
        </header>
    )
}