import Footer from "./_components/Footer";
import HeaderNav from "./_components/HeaderNav";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}