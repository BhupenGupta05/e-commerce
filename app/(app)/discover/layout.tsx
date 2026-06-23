import BottomNav from "@/components/BottomNav";

export default function MainLayout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {header}

      <main className="flex-1">
        {children}
      </main>

      <footer className="md:hidden">
        <BottomNav />
      </footer>
    </div>
  );
}