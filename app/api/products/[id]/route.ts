import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const product = await prisma.product.findFirst({
            where: { id }
        })

        if (!product) {
            return NextResponse.json({
                success: false,
                data: null,
                message: "Product not found"
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            data: product,
            message: "Product fetched successfully"
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