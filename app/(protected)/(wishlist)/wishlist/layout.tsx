import BottomNav from "@/app/(protected)/_components/BottomNav";


export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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