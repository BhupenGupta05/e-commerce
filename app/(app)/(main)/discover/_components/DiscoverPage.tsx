"use client";

import DiscoverHeader from "./DiscoverHeader";
import RecommendationSection from "./RecommendedSection";
import MoodSection from "./MoodSection";
import AssistantInsight from "./AssistantInsight";
import { Product } from "@prisma/client";
import { useRequireSession } from "@/hooks/useRequireSession";

interface Props {
    products: Product[];
}

export default function DiscoverPage({ products }: Props) {
    const status = useRequireSession();

    // ADD SPINNER
    if (status === "loading") {
        return <>Loading...</>;
    }

    return (
        <div className="space-y-10 p-4 pb-22 md:p-8">
            <DiscoverHeader />

            <RecommendationSection products={products} />

            <MoodSection />

            <AssistantInsight />
        </div>
    )
}