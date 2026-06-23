import { WishlistItemWithProduct } from "@/types/wishlist";
import WishlistItem from "./WishlistItem";


interface Props {
  wishlistItems: WishlistItemWithProduct[];
}

export default function Wishlist({ wishlistItems }: Props) {
  return (
    <section className="md:hidden">
      {wishlistItems.map((item) => (
        <WishlistItem
          key={item.id}
          wishlistItem={item}
        />
      ))}
    </section>
  );
}