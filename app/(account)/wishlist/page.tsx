import prisma from "@/lib/prisma";
import WishlistPage from "./_components/WishlistPage";
import { getUser } from "@/lib/session";

export default async function Page() {
  const user = await getUser();

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