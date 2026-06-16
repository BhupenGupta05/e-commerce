"use server";

import { EVENT_TYPES, EVENT_WEIGHTS } from "./events";
import prisma from "./prisma";

export async function getRecommendations(userId: string) {
    const events = await prisma.userEvent.findMany({
        where: {
            userId,
            eventType: {
                in: [EVENT_TYPES.VIEW, EVENT_TYPES.SAVE],
            },
        },
        include: {
            product: true
        }
    })

    // FOR NOW, TAKE 12 PRODUCTS, CHANGE AFTER PRODUCT PAGE HAS BEEN BUILT
    if (!events.length) {
        return prisma.product.findMany({
            where: {
                isActive: true,
            },
            take: 12,
        });
    }

    const categoryScores = new Map<string, number>();

    const seenProductIDs = new Set<string>();

    for (const event of events) {
        seenProductIDs.add(event.productId);

        const category = event.product.category;

        const currentScore = categoryScores.get(category) ?? 0;

        const weight = EVENT_WEIGHTS[event.eventType as keyof typeof EVENT_WEIGHTS] ?? 0;

        categoryScores.set(category, currentScore + weight);

        const topCategories = [...categoryScores.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([category]) => category);

        return prisma.product.findMany({
            where: {
                isActive: true,
                category: {
                    in: topCategories as any,
                },
                id: {
                    notIn: [...seenProductIDs],
                },
            },
            take: 12,
        });
    }

    // Don't show wishlist items in feed
    const wishlistItems = await prisma.wishlistItem.findMany({
        where: {
            userId,
        },
        select: {
            productId: true
        }
    });

    wishlistItems.forEach(item => seenProductIDs.add(item.productId));
}