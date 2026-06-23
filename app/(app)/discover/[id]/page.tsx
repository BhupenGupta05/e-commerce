import { trackView } from "@/app/actions/event";
import { EVENT_TYPES } from "@/lib/events";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import ProductDetails from "../_components/ProductDetails";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const session = await getServerSession(authOptions);

    await trackView(id);

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
        <ProductDetails
            product={product}
            initialSaved={!!existingSave} />
    )
}