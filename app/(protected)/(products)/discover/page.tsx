import prisma from "@/lib/prisma";
import DiscoverHeader from "./_components/DiscoverHeader";
import RecommendationSection from "./_components/RecommendedSection";
import MoodSection from "./_components/MoodSection";
import AssistantInsight from "./_components/AssistantInsight";
import ProductGrid from "./_components/ProductGrid";
import { getRecommendations } from "@/lib/recommendation-service";

const PAGE_SIZE = 24;

export default async function Page({ searchParams }: {
    searchParams: Promise<{ source?: string; mood?: string }>
}) {
    const { source, mood } = await searchParams;
    const isViewAll = source === "recommended";

    const [recommendedProducts, allProducts] = await Promise.all([
        isViewAll ? Promise.resolve([]) : getRecommendations(),
        isViewAll
            ? prisma.product.findMany({
                take: PAGE_SIZE,
                where: mood
                    ? {
                        tags:
                        {
                            has: mood

                        }
                    }
                    : undefined,
                orderBy: {
                    createdAt: "desc",
                },
            })
            : Promise.resolve([]),
    ])

    const products = isViewAll ? allProducts : recommendedProducts;

    const nextCursor = products?.at(-1)?.id ?? null;

    return (
        <div className="space-y-10 p-4 pb-22 md:p-8">
            <DiscoverHeader />
            {isViewAll ? (
                <ProductGrid
                    initialProducts={allProducts}
                    initialCursor={nextCursor}
                    mood={mood}
                />
            ) : (
                <>
                    <RecommendationSection
                        products={recommendedProducts}
                        title="Highly Recommended for You"
                    />

                    <MoodSection />

                    <AssistantInsight insight="Based on your recent interest in
        minimalist architecture, I've found
        three unique pieces for your home." />
                </>
            )}


        </div>
    )
}