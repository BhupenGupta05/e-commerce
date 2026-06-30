import BottomNav from "@/components/BottomNav";
import HeaderNav from "@/components/HeaderNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For You",              
  description: "Personalized picks for you.",
};

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