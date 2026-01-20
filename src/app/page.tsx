import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  VideoDemoSection,
  ProblemSection,
  PositioningSection,
  WorkflowSection,
  CollectSection,
  ReconciliationSection,
  AIAutomationSection,
  ComparisonSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Period-first positioning */}
        <HeroSection />
        
        {/* 2. Video Demo - Prominent walkthrough */}
        <VideoDemoSection />
        
        {/* 3. Problem - Managing the work bottleneck */}
        <ProblemSection />
        
        {/* 4. What Vergo is - Execution Layer */}
        <PositioningSection />
        
        {/* 5. Core Workflows - Parallel workflows (Boards, Collect, Requests, Recs) */}
        <WorkflowSection />
        
        {/* 6. Collect - Intake layer (Docs, Invoices, Expenses) */}
        <CollectSection />
        
        {/* 7. Reconciliations - Managed vs Calculated */}
        <ReconciliationSection />
        
        {/* 8. AI Positioning - Judgment Assistant */}
        <AIAutomationSection />
        
        {/* 9. Comparison Teaser - Built for Accounting */}
        <ComparisonSection />
        
        {/* 10. CTA - Final conversion */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
