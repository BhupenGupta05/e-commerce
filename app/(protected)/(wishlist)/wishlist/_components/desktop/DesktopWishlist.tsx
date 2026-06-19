import { WishlistItemWithProduct } from "@/types/wishlist";
import DesktopWishlistItem from "./DesktopWishlistItem";

interface Props {
  wishlistItems: WishlistItemWithProduct[];
}

export default function DesktopWishlist({ wishlistItems }: Props) {
  return (
    <section className="hidden md:block">
      <div className="space-y-4">
        {wishlistItems.map((item) => (
          <DesktopWishlistItem
            key={item.id}
            wishlistItem={item}
          />
        ))}
      </div>
    </section>
  );
}