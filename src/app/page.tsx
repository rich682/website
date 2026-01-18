import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  FrameworkSection,
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
        {/* 3. Framework - How it works (Request → Track → Remind → Review → Close) */}
        <FrameworkSection />
        {/* 4. CTA - Final conversion */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
