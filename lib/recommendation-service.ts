import { Category, Product } from "@prisma/client";
import { EVENT_TYPES, EVENT_WEIGHTS } from "./events";
import prisma from "./prisma";
import { requireAuthSoft } from "./session";

export async function getRecommendations(): Promise<Product[]> {
    const user = await requireAuthSoft();

    if (!user?.id) {
        return [];
    }

    const userId = user.id;

    const [events, wishlistItems] = await Promise.all([
        prisma.userEvent.findMany({
            where: {
                userId,
                eventType: {
                    in: [EVENT_TYPES.VIEW, EVENT_TYPES.SAVE],
                },
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 10,
            include: {
                product: {
                    select: {
                        id: true,
                        category: true,
                    }
                }
            },
        }),
        prisma.wishlistItem.findMany({
            where: {
                userId,
            },
            select: {
                productId: true
            }
        }),
    ])

    // FOR NOW, TAKE 12 PRODUCTS, CHANGE AFTER PRODUCT PAGE HAS BEEN BUILT
    if (!events.length) {
        return prisma.product.findMany({
            where: {
                isActive: true,
            },
            take: 12,
        });
    }

    const categoryScores = new Map<Category, number>();

    // seed with wishlist upfront
    // Don't show wishlist items in feed
    const seenProductIDs = new Set<string>(
        wishlistItems.map(item => item.productId)
    );

    for (const event of events) {
        // seenProductIDs.add(event.productId);

        const category = event.product.category;

        const currentScore = categoryScores.get(category) ?? 0;

        const weight = EVENT_WEIGHTS[event.eventType as keyof typeof EVENT_WEIGHTS] ?? 0;

        categoryScores.set(category, currentScore + weight);
    }

    const topCategories = [...categoryScores.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([category]) => category);
    

    const recommendations = await prisma.product.findMany({
        where: {
            isActive: true,
            category: {
                in: topCategories,
            },
            id: {
                notIn: [...seenProductIDs],
            },
        },
        take: 12,
    });

    return recommendations;

}