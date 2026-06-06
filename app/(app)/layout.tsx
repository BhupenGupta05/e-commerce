// import Sidebar from "@/components/app/sidebar";
// import Topbar from "@/components/app/topbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:block">
        {/* <Sidebar /> */}
      </aside>

      <div className="flex flex-1 flex-col">
        {/* <Topbar /> */}

        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
