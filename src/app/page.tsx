import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  PositioningSection,
  FeaturesShowcase,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Value prop + CTA */}
        <HeroSection />
        {/* 2. Problem - Why this matters */}
        <ProblemSection />
        {/* 3. Solution - How it works (workflow) */}
        <PositioningSection />
        {/* 4. Features - Tabbed showcase (consolidated) */}
        <FeaturesShowcase />
        {/* 5. CTA - Final conversion */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
