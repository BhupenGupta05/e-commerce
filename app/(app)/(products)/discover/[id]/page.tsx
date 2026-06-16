import { trackView } from "@/app/actions/event";
import { EVENT_TYPES } from "@/lib/events";
import prisma from "@/lib/prisma";
import ProductDetailsPage from "./_components/ProductDetailsPage";
import { requireAuth } from "@/lib/session";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const session = await requireAuth();

    if (session?.user?.id) {
        await trackView(id, session.user.id);
    }

    const [product, existingSave] = await Promise.all([
        prisma.product.findUnique({ where: { id } }),
        session?.user?.id
            ? prisma.userEvent.findFirst({
                where: {
                    userId: session.user.id,
                    productId: id,
                    eventType: EVENT_TYPES.SAVE
                },
            })
            : Promise.resolve(null),
    ])

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <ProductDetailsPage 
        product={product} 
        initialSaved={!!existingSave} />
    )
}