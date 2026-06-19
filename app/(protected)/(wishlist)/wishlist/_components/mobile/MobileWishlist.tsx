import { WishlistItemWithProduct } from "@/types/wishlist";
import MobileWishlistItem from "./MobileWishlistItem";

interface Props {
  wishlistItems: WishlistItemWithProduct[];
}

export default function MobileWishlist({ wishlistItems }: Props) {
  return (
    <section className="md:hidden">
      {wishlistItems.map((item) => (
        <MobileWishlistItem
          key={item.id}
          wishlistItem={item}
        />
      ))}
    </section>
  );
}