import DiscoverPage from "./_components/DiscoverPage";
import prisma from "@/lib/prisma";

export default async function Page() {
    const products = await prisma.product.findMany();
    return (
        <DiscoverPage products={products} />
    )
}