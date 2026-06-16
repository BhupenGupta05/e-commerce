"use server";

import prisma from "./prisma";

export async function createEvent({
    userId,
    productId,
    eventType
} : {
    userId: string;
    productId: string;
    eventType: string;
}) {
    return prisma.userEvent.create({
        data: {
            userId,
            productId,
            eventType,
        },
    });
}