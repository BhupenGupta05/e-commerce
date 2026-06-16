"use client";

import DesktopWishlist from "./desktop/DesktopWishlist";
import MobileWishlist from "./mobile/MobileWishlist";
import Header from "./Header";
import { BreadcrumbItemType } from "@/components/AppBreadcrumbs";
import { WishlistItemWithProduct } from "@/types/wishlist";
import { useRequireSession } from "@/hooks/useRequireSession";

interface Props {
  wishlistItems: WishlistItemWithProduct[];
}

export default function WishlistPage({ wishlistItems }: Props) {
  const breadcrumbs: BreadcrumbItemType[] = [
    { label: "Home", href: "/" },
    { label: "Wishlist", href: "/wishlist" },
  ];
  const status = useRequireSession();

  // ADD SPINNER
  if (status === "loading") {
    return <>Loading....</>
  }

  return (
    <>
      <Header breadcrumbs={breadcrumbs} />

      <div className="mx-auto max-w-8xl px-6 md:px-7 lg:px-8">

        <div className="hidden md:flex items-center justify-between mt-8 mb-6">

          <p className="mt-1 text-sm text-gray-500">{wishlistItems.length} items</p>
          <button className="flex items-center gap-2 border border-gray-300 text-black rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
            Edit
          </button>
        </div>

        <div className="md:hidden flex items-center justify-between mt-4 mb-2 px-1">
          <p className="text-sm text-gray-500">{wishlistItems.length} items</p>
        </div>

        <DesktopWishlist wishlistItems={wishlistItems} />
        <MobileWishlist wishlistItems={wishlistItems} />

      </div>
    </>

  );
}
