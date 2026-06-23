import Image from "next/image";
import { IoStar } from "react-icons/io5";

import WishlistMatchBadge from "../MatchBadge";
import WishlistTags from "../Tags";
import WishlistFavoriteButton from "../Favourite";
import WishlistActions from "../Actions";

import { WishlistItemWithProduct } from "@/types/wishlist";
import WishlistShare from "../Share";

interface Props {
  wishlistItem: WishlistItemWithProduct;
}

export default function WishlistItem({ wishlistItem }: Props) {
  
  return (
    <article
      className="
        relative
        grid
        gap-8
        rounded-2xl
        border
        border-[#ECECEC]
        bg-gray-50
        p-3

        md:grid-cols-[180px_minmax(0,1fr)_240px]
        lg:grid-cols-[220px_minmax(0,1fr)_260px]
      "
    >
      {/* Image */}
      <div className="pr-6 md:border-r md:border-gray-200">
        <div className="relative h-40 overflow-hidden rounded-2xl bg-gray-50 lg:h-44">
          <Image
            src={wishlistItem.product.imageUrl[0]}
            alt={wishlistItem.product.name}
            fill
            className="object-contain p-3"
          />
        </div>
      </div>

      {/* Content */}
      <div className="min-w-0">
        <WishlistMatchBadge value={90} />

        <h3 className="mt-2 text-base font-semibold text-black lg:text-lg">
          {wishlistItem.product.name}
        </h3>

        <div className="mt-1 flex items-center gap-1.5">
          <IoStar size={13} fill="black" />

          <span className="text-xs font-medium text-black lg:text-sm">
            {4.8}
          </span>

          <span className="text-xs text-gray-400 lg:text-sm">
            ({1278} reviews)
          </span>
        </div>

        <p
          className="
            mt-3
            max-w-2xl
            text-xs
            leading-relaxed
            text-gray-500
            line-clamp-3
            lg:text-sm
          "
        >
          {wishlistItem.product.description}
        </p>

        <div className="mt-4">
          <WishlistTags tags={wishlistItem.product.tags} />
        </div>
      </div>

      {/* Actions */}
      <div
        className="
          flex
          flex-col
          items-end
          justify-center
          pl-6
        "
      >
        <p className="mb-4 text-xl font-semibold text-black">
          ₹{(wishlistItem.product.priceInPaisa / 100).toLocaleString('en-IN')}
        </p>

        <WishlistActions />
      </div>

      {/* Favorite */}
      <div className="flex items-center gap-4 absolute right-4 top-4">
        <WishlistShare />
        {/* <WishlistFavoriteButton /> */}
      </div>
    </article>
  );
}