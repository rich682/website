import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  PlatformOverviewSection,
  SecurityTrustSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Put your book close on autopilot */}
        <HeroSection />

        {/* 2. Problem - 40% of time on non-accounting work */}
        <ProblemSection />

        {/* 3. Platform Overview - 7 feature cards */}
        <PlatformOverviewSection />

        {/* 4. Trust / Differentiators */}
        <SecurityTrustSection />

        {/* 5. CTA - Book a Demo */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
