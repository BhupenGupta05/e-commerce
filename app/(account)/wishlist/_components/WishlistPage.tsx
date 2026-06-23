
import DesktopWishlist from "./desktop/Wishlist";
import MobileWishlist from "./mobile/Wishlist";
import Header from "./Header";
import { BreadcrumbItemType } from "@/components/AppBreadcrumbs";
import { WishlistItemWithProduct } from "@/types/wishlist";
import { IoMdHeartEmpty } from "react-icons/io";

interface Props {
  wishlistItems: WishlistItemWithProduct[];
}

export default function WishlistPage({ wishlistItems }: Props) {
  const breadcrumbs: BreadcrumbItemType[] = [
    { label: "Home", href: "/" },
    { label: "Wishlist", href: "/wishlist" },
  ];

  return (
    <>
      <Header breadcrumbs={breadcrumbs} />

      <div className="mx-auto max-w-8xl px-6 md:px-7 lg:px-8">

        <div className="hidden md:flex items-center justify-between mt-8 mb-6">

          <p className="mt-1 text-sm text-gray-500">{wishlistItems.length} {wishlistItems.length === 1 ? 'saved item' : 'saved items'}</p>
          <button className="flex items-center gap-2 border border-gray-300 text-black rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
            Manage list
          </button>
        </div>

        <div className="md:hidden flex items-center justify-between mt-4 mb-2 px-1">
          <p className="text-sm text-gray-500">{wishlistItems.length} {wishlistItems.length === 1 ? 'saved item' : 'saved items'}</p>
        </div>

        <DesktopWishlist wishlistItems={wishlistItems} />
        <MobileWishlist wishlistItems={wishlistItems} />

        {wishlistItems.length === 0 && (
          <section
            className="mt-4 flex flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 text-center"
            aria-labelledby="wishlist-empty-title"
          >
            <div className="mb-4 rounded-full bg-pink-50 p-4">
              <IoMdHeartEmpty
                className="h-8 w-8 text-pink-500"
                aria-hidden="true"
              />
            </div>

            <div>
              <h2
                id="wishlist-empty-title"
                className="text-lg font-semibold"
              >
                Save items while you browse
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Tap the heart on any product to save it here.
              </p>
            </div>

            <button
              className="mt-6 rounded-lg bg-black px-5 py-3 text-white"
            >
              Explore picks for you
            </button>
          </section>
        )}

      </div>
    </>

  );
}
