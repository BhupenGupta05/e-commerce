import prisma from "@/lib/prisma";

// Full product - used by main page
export async function getProductPageData(id: string, userId?: string) {
        const [product, existingSave] = await Promise.all([
        prisma.product.findUnique({ where: { id } }),
        userId
            ? prisma.wishlistItem.findUnique({
                where: {
                    userId_productId: {
                        userId,
                        productId: id,
                    }
                },
            })
            : Promise.resolve(null),
    ]);

    return { product, existingSave };
}


// Minimal data (id + name only)
export async function getProductMeta(id: string, userId?: string) {
        const [product, existingSave] = await Promise.all([
        prisma.product.findUnique({ 
            where: { id },
            select: {
                id: true,
                name: true,
            }
        }),
        userId
            ? prisma.wishlistItem.findUnique({
                where: {
                    userId_productId: {
                        userId,
                        productId: id,
                    }
                },
            })
            : Promise.resolve(null),
    ]);

    return { product, existingSave };
}