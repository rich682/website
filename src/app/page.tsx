import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  VideoDemoSection,
  ProblemSection,
  PositioningSection,
  FrameworkSection,
  ComparisonSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Close-first positioning */}
        <HeroSection />
        
        {/* 2. Video Demo - Prominent walkthrough */}
        <VideoDemoSection />
        
        {/* 3. Problem - Managing the work bottleneck */}
        <ProblemSection />
        
        {/* 4. Positioning - Execution Layer */}
        <PositioningSection />
        
        {/* 5. The Framework - 5-part product structure */}
        <FrameworkSection />
        
        {/* 6. Comparison Teaser - Built for Accounting */}
        <ComparisonSection />
        
        {/* 7. CTA - Final conversion */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
