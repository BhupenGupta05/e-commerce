import prisma from "@/lib/prisma";
import WishlistPage from "./_components/WishlistPage";
import { requireAuth } from "@/lib/session";

export default async function Page() {
  const user = await requireAuth();

  if(!user) return null;

  const wishlistItems = await prisma.wishlistItem.findMany({
    where: {
      userId: user.id,
    },
    include: {
      product: true,
    }
  });

  return <WishlistPage wishlistItems={wishlistItems} />;
}