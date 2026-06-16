import { Product, WishlistItem } from "@prisma/client";

export type WishlistItemWithProduct = 
WishlistItem & {
  product: Product;
}