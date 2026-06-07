import BottomNav from "../components/discover/BottomNav";
import Header from "../components/discover/Header";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {children}
      </main>
      <footer className="md:hidden">
        <BottomNav />
      </footer>
    </div>
  );
}

