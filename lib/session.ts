"use server";

import { getServerSession } from "next-auth";
import authOptions from "./auth";
import prisma from "./prisma";
import { redirect } from "next/navigation";

export async function getUser() {
    const session = await getServerSession(authOptions);

    return session?.user ?? null;
}

export async function requireAuth() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
  }

  return session.user;
}

export async function getUserState() {
    const session = await getServerSession(authOptions)

    if(!session?.user?.id) {
        return "ANONYMOUS";
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id
        }
    })

    if(user?.onboardingStatus === 'PENDING') {
        return "ONBOARDING";
    }
    return "AUTHENTICATED";
}