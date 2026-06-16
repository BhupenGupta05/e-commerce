import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json({
            success: true,
            data: products,
            message: "Products fetched successfully"
        }, { status: 200 })
    } catch (err) {
        console.error("Error fetching products", err);
        return NextResponse.json({
            success: false,
            data: null,
            message: "Failed to fetch products"
        }, { status: 500 })
    }
}