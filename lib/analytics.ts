"use server";

import { createEvent } from "./event-service";
import { EVENT_TYPES } from "./events";
import prisma from "./prisma";
import { getUser } from "./session";

export async function trackProductView(productId: string) {
    const user = await getUser();

    if (!user?.id) return;

    const thirtyMinutesAgo = new Date(
        Date.now() - 30 * 60 * 1000
    );

    const existingView = await prisma.userEvent.findFirst({
        where: {
            userId: user.id,
            productId,
            eventType: EVENT_TYPES.VIEW,
            createdAt: {
                gte: thirtyMinutesAgo,
            },
        },
    });

    if (existingView) return;

    await createEvent({
        userId: user.id,
        productId,
        eventType: EVENT_TYPES.VIEW,
    });
}