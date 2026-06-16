import { getRecommendations } from "@/lib/recommendation-service"
import { requireAuth } from "@/lib/session";

export default async function Page() {
    const session = await requireAuth();

    if(!session?.user?.id) return null;

    const userId = session.user.id

    const products = await getRecommendations(userId);
    return <div>For you</div>
}