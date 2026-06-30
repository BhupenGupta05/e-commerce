import { getServerSession } from "next-auth";
import authOptions from "./auth";
import prisma from "./prisma";
import { redirect } from "next/navigation";
import { cache } from "react";

// Now, this will be called only once
export const getSession = cache(async () => {
    return getServerSession(authOptions);
});

// For RSC pages which needs user - throws redirect if missing
export const requireAuth = cache(async () => {
    const session = await getSession();

  if (!session?.user?.id) redirect("/login");

  return session.user;
}) 

// For RSC pages where guest is valid - returns null (like /discover (anonymous))
export const requireAuthSoft = cache(async () => {
    const session = await getSession();

  if (!session?.user?.id) return null;

  return session.user;
}) 


// Server actions - no redirect
export async function getUser() {
    const session = await getSession();

    return session?.user ?? null;
}

export async function getUserState() {
    const session = await getSession();

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