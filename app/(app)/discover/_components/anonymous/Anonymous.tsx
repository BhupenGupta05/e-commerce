import prisma from "@/lib/prisma";
import Header from "./Header";
import Trending from "./Trending";
import { Category } from "@prisma/client";
import MoodSection from "../MoodSection";

export default async function Anonymous({ category }: { category?: string }) {
    const trendingProducts = await prisma.product.findMany({
        take: 8,
        where: category && category != "All"
        ? {
            category: category as Category,
        }
        : undefined,
        orderBy: {
            createdAt: 'desc'
        }
    })
    return (
        <>
            <Header />
            <Trending
                products={trendingProducts}
                title="Top picks this week"
            />

            <MoodSection />
        </>
    )
}