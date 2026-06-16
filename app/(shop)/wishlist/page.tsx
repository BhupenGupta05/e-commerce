import prisma from "@/lib/prisma";
import WishlistPage from "./_components/WishlistPage";
import { requireAuth } from "@/lib/session";

export default async function Page() {
  const session = await requireAuth();

  if (!session?.user?.id) return null;

  const wishlistItems = await prisma.wishlistItem.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      product: true,
    }
  });

  return <WishlistPage wishlistItems={wishlistItems} />;
}