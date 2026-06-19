import BottomNav from "../_components/BottomNav";

export default function ProducRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">

            <main className="flex-1">
                {children}
            </main>

            <footer className="md:hidden">
                <BottomNav />
            </footer>
        </div>
    );
}