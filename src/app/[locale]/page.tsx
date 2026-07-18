import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}
