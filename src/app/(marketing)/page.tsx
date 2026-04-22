import { MarketingTopNav } from "@/features/marketing/components/MarketingTopNav";
import TryTools from "@/features/marketing/sections/TryTools";
import {
  CoreToolsSection,
  CTASection,
  FAQSection,
  FrameworkSection,
  HeroSection,
  HowItWorksSection,
  InfrastructureSection,
  WhatIsMonitizeSection,
} from "@/features/marketing";

export default function MarketingPage() {
  return (
    <main className="bg-white text-text">
      <MarketingTopNav />
      <HeroSection />
      <CoreToolsSection />
      <WhatIsMonitizeSection />
      <TryTools />
      <HowItWorksSection />
      <FrameworkSection />
      <InfrastructureSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
