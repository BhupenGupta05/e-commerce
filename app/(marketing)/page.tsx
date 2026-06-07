import Hero from "../components/marketing/Hero";
import FeaturedRelease from "../components/marketing/FeaturedRelease";
import KeyModules from "../components/marketing/KeyModules";
import Analytics from "../components/marketing/Analytics";

export default function MarketingPage() {
  return (
    <>
      <div className="flex flex-col md:mt-10 gap-8 md:flex-row md:justify-center md:mx-6 md:gap-10 lg:gap-24">
        <div className="md:w-[30%] md:flex md:justify-center md:items-center">
          <Hero />
        </div>

        <div className="md:w-[60%]">
          <FeaturedRelease />
        </div>

      </div>

      <KeyModules />
      <Analytics />
    </>
  );
}