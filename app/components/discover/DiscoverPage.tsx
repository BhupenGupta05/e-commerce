import DiscoverHeader from "./DiscoverHeader";
import RecommendationSection from "./RecommendedSection";
import MoodSection from "./MoodSection";
import AssistantInsight from "./AssistantInsight";

export default function DiscoverPage() {
    return (
        <div className="space-y-12 p-4 pb-22 md:p-8">
            <DiscoverHeader />

            <RecommendationSection />

            <MoodSection />

            <AssistantInsight />
        </div>
    )
}