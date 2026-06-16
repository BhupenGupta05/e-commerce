"use server";

import { getServerSession } from "next-auth";
import authOptions from "./auth";
import { redirect } from "next/navigation";

export async function requireAuth() {
    try {
        const session = await getServerSession(authOptions);

        if(!session?.user) {
            throw new Error("unauthenticated");
        }
        return session;
    } catch (err) {
        console.error("Auth check failed", err);
        redirect("/login");
    }
}