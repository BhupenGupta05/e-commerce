"use server";

import { createEvent } from "@/lib/event-service";
import { EVENT_TYPES } from "@/lib/events";
import prisma from "@/lib/prisma";
import { requireAuth } from "@/lib/session";

export async function trackView(productId: string) {
  const session = await requireAuth();

  if (!session?.user?.id) {
    return {
      success: false,
      error: "unauthenticated" as const
    }
  }

  const userId = session.user.id;
  try {
    const thirtyMinutesAgo = new Date(
      Date.now() - 30 * 60 * 1000
    );

    const existingView = await prisma.userEvent.findFirst({
      where: {
        userId,
        productId,
        eventType: EVENT_TYPES.VIEW,
        createdAt: {
          gte: thirtyMinutesAgo,
        },
      },
    });

    if (existingView) {
      return {
        success: true,
        alreadyViewed: true,
      };
    }

    await createEvent({
      userId,
      productId,
      eventType: EVENT_TYPES.VIEW,
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
}

export async function trackSave(productId: string) {
  const session = await requireAuth();

  if (!session?.user?.id) {
    return {
      success: false,
      error: "unauthenticated" as const
    };
  }

  // Since transactions are atomic in nature, we can simultaneously add events and wishlist items

  try {
    const existingWishlistItem = await prisma.wishlistItem.findUnique({
      where: {
        userId_productId: {
          userId: session.user.id,
          productId,
        },
      },
    });

    if (existingWishlistItem) {
      // DELETE FROM WISHLIST
      await prisma.$transaction([
        prisma.wishlistItem.delete({
          where: {
            userId_productId: {
              userId: session.user.id,
              productId,
            }

          },
        }),

        prisma.userEvent.create({
          data: {
            userId: session.user.id,
            productId,
            eventType: EVENT_TYPES.UNSAVE,
          },
        }),
      ])
      return {
        success: true,
        action: "unsaved",
      };
    } else {
      // CREATE ITEM IN WISHLIST
      await prisma.$transaction([
        prisma.wishlistItem.create({
          data: {
            userId: session.user.id,
            productId,
          },
        }),

        prisma.userEvent.create({
          data: {
            userId: session.user.id,
            productId,
            eventType: EVENT_TYPES.SAVE,
          },
        }),
      ])
      return {
        success: true,
        action: "saved",
      };
    }

  } catch (err) {
    console.error(err);
    return { success: false };
  }
}