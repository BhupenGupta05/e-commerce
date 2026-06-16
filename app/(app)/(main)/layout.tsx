
import BottomNav from "@/app/(app)/_components/BottomNav";
import HeaderNav from "./_components/HeaderNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderNav />

      <main className="flex-1">
        {children}
      </main>

      <footer className="md:hidden">
        <BottomNav />
      </footer>
    </div>
  );
}