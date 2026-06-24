"use server";

import prisma from "@/lib/prisma";
import { requireAuth } from "@/lib/session";
import { redirect } from 'next/navigation';

export async function savePreferences(formData: FormData) {
    const user = await requireAuth();

    const categories = formData.getAll("categories") as string[];
    const vibes = formData.getAll("vibes") as string[];
    const budget = formData.get("budget") as string;

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            onboardingStatus: "COMPLETED",
            preferences: {
                create: {
                    categories,
                    vibes,
                    budget,
                },
                update: {
                    categories,
                    vibes,
                    budget,
                }
            }
        }
    });

    redirect("/discover");
}

export async function skipOnboarding() {
    const user = await requireAuth();

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            onboardingStatus: "COMPLETED",
        }
    });

    redirect("/discover");
}