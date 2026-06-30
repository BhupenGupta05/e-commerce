"use client";

import { discoverUrl, parseDiscoverParams } from "@/lib/routes/discover";
import { useRouter, useSearchParams } from "next/navigation"

const categories = [
    "All",
    "electronics",
    "furniture",
    "beauty",
]

export default function TopCategories() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const current = parseDiscoverParams(searchParams);
    const selectedCategory = searchParams.get("category") ?? "All";

    const handleCategoryClick = (category: string) => {
        router.push(discoverUrl({ ...current, category: category === "All" ? undefined : category }))
    }
    return (
        <div className="flex items-center gap-2 flex-wrap lg:gap-3">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 text-xs lg:text-sm font-medium rounded-lg  transition-colors cursor-pointer ${selectedCategory === category ? "bg-gray-500 text-white" : "bg-gray-100"}`}>
                    {category}
                </button>
            ))}
        </div>
    )
}