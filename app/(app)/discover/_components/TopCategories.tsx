"use client";

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

    const selectedCategory = searchParams.get("category") ?? "All";

    const handleCategoryClick = (category: string) => {
        const params = new URLSearchParams(searchParams);

        if (category === "All") {
            params.delete("category");
        } else {
            params.set("category", category);
        }

        router.push(`/discover?${params.toString()}`);
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