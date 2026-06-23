import { WishlistItemWithProduct } from "@/types/wishlist";
import WishlistItem from "./WishlistItem";

interface Props {
  wishlistItems: WishlistItemWithProduct[];
}

export default function Wishlist({ wishlistItems }: Props) {
  return (
    <section className="hidden md:block">
      <div className="space-y-4">
        {wishlistItems.map((item) => (
          <WishlistItem
            key={item.id}
            wishlistItem={item}
          />
        ))}
      </div>
    </section>
  );
}