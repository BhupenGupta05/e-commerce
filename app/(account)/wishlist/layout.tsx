import BottomNav from "@/components/BottomNav";
import { requireAuth } from "@/lib/session";


export default async function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAuth();

  return (
    <div className="min-h-screen bg-white">

      <main className="pt-0 pb-24 md:pb-8">
        {children}
      </main>

      <footer className="md:hidden">
        <BottomNav />
      </footer>
    </div>
  );
}