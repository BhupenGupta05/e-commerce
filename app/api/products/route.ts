import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 24;

export async function GET(req: NextRequest) {
    const cursor = req.nextUrl.searchParams.get("cursor");
    const mood = req.nextUrl.searchParams.get("mood");

    const products = await prisma.product.findMany({
        take: PAGE_SIZE,
        ...(cursor && {  //If cursor product exists, add these condition
            cursor: {
                id: cursor,    //start from this cursor product
            },
            skip: 1  //Skip cursor product
        }),
        where: mood
            ? {
                tags: {
                    has: mood,
                },
            }
            : undefined,
        orderBy: {
            createdAt: "desc"
        }
    })

    const nextCursor = products.length === PAGE_SIZE
        ? products[products.length - 1].id
        : null;

    return NextResponse.json({
        products,
        nextCursor,
    });
}