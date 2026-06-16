import Image from "next/image";
import WishlistMatchBadge from "../WishlistBadge";
import WishlistFavoriteButton from "../WishlistFavoriteButton";
import WishlistActions from "../WishlistActions";
import { WishlistItemWithProduct } from "@/types/wishlist";
import WishlistShare from "../WishlistShare";

interface Props {
  wishlistItem: WishlistItemWithProduct;
}

export default function MobileWishlistItem({
  wishlistItem,
}: Props) {
  
  return (
    <article className="flex gap-8 border-b border-gray-100 py-4">
      <div className="relative h-34 w-34 shrink-0 overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={wishlistItem.product.imageUrl[0]}
          alt={wishlistItem.product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between">
          <WishlistMatchBadge value={90} />

          <div className="flex items-center gap-4">
             <WishlistShare />
          <WishlistFavoriteButton />
          </div>
         
        </div>

        <h3 className="mt-1.5 text-sm font-semibold leading-tight">
          {wishlistItem.product.name}
        </h3>

        <p className="mt-1 text-sm font-semibold">
          ₹{wishlistItem.product.priceInPaisa / 100}
        </p>

        <div className="mt-3">
          <WishlistActions />
        </div>
      </div>
    </article>
  );
}

