import prisma from "@/lib/prisma";
import { getRecommendations } from "@/lib/recommendation-service";
import RecommendationSection from "./_components/RecommendedSection";
import ProductGrid from "./_components/ProductGrid";
import MoodSection from "./_components/MoodSection";
import AssistantInsight from "./_components/AssistantInsight";
import { getUserState } from "@/lib/session";
import Anonymous from "./_components/anonymous/Anonymous";
import Onboarding from "./_components/onboarding/Onboarding";
import DiscoverHeader from "./_components/DiscoverHeader";
import TopCategories from "./_components/TopCategories";

const PAGE_SIZE = 24;

export default async function Page({ searchParams }: {
    searchParams: Promise<{ source?: string; mood?: string; category?: string }>
}) {    
    
    const { source, mood, category } = await searchParams;
    const isViewAll = source === "recommended";

    const state = await getUserState();

    if (state === "ANONYMOUS") {
        return (
            <main className="space-y-10 p-4 pb-22 md:p-8">
                <Anonymous category={category} />
            </main>
        )
    }

    if (state === "ONBOARDING") {
        return (
            <main className="space-y-10 p-1 md:p-8">
                <Onboarding />
            </main>
        )
    }

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

            <div className="px-3">
                <TopCategories />
            </div>



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
                        title="Your top matches today"
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