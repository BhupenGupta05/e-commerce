import { PiExport, PiUserCircle } from "react-icons/pi";
import Link from "next/link";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import prisma from "@/lib/prisma";
import { EVENT_TYPES } from "@/lib/events";
import BackButton from "../../_components/BackButton";
import { menu } from "../../_config/menu";
import WishlistButton from "../../_components/WishlistButton";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const session = await getServerSession(authOptions);
    const [product, existingSave] = await Promise.all([
        prisma.product.findUnique({ where: { id }, select: { id: true, name: true } }),
        session?.user?.id
            ? prisma.userEvent.findFirst({
                where: { userId: session.user.id, productId: id, eventType: EVENT_TYPES.SAVE },
            })
            : Promise.resolve(null),
    ]);

    if (!product) return null;

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Discover", href: "/discover" },
        { label: product.name },
    ];

    return (
        <header className="app-header backdrop-blur ">
            <div className="mx-auto md:max-w-8xl">

                {/* Left most section */}
                <nav
                    aria-label="Global navigation"
                    className="flex items-center justify-between">

                    <BackButton />

                    <Link
                        href="/"
                        aria-label="Storefront home page"
                        className="hidden md:block app-logo"
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

                        <WishlistButton productId={product.id} initialSaved={!!existingSave} />


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

                <AppBreadcrumbs items={breadcrumbs} className="hidden md:inline-flex mt-1.5 md:mt-2" />
            </div>
        </header>
    )
}