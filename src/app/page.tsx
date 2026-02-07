import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  FeaturesShowcase,
  AICapabilitiesSection,
  IntegrationsSection,
  SecurityTrustSection,
  PricingSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Stop chasing. Start closing. */}
        <HeroSection />

        {/* 2. Problem - 40% of time chasing clients */}
        <ProblemSection />

        {/* 3. How It Works - 3-step flow */}
        <HowItWorksSection />

        {/* 4. Feature Showcase - 6 alternating feature blocks */}
        <FeaturesShowcase />

        {/* 5. AI Capabilities - Dedicated AI highlight */}
        <AICapabilitiesSection />

        {/* 6. Integrations - Gmail, Outlook, Excel */}
        <IntegrationsSection />

        {/* 7. Security / Trust - Differentiators */}
        <SecurityTrustSection />

        {/* 8. Pricing */}
        <PricingSection />

        {/* 9. CTA - Final conversion */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
