import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

import ReportBuilderMockup from "@/components/animations/ReportBuilderMockup";
import VarianceAnalysisMockup from "@/components/animations/VarianceAnalysisMockup";
import AIInsightsMockup from "@/components/animations/AIInsightsMockup";

export const metadata: Metadata = {
  title: "Reporting | Vergo",
  description:
    "Build custom reports, analyze variances automatically, and surface AI-powered insights and trends — all from one platform.",
};

const features = [
  {
    category: "Custom Reports",
    title: "Build the exact reports you need",
    description:
      "Create financial reports tailored to your business. Choose your accounts, time periods, and comparison metrics — then export to PDF or Excel in one click. Save templates so your team never starts from scratch.",
    items: [
      "Drag-and-drop report builder",
      "Reusable report templates",
      "One-click PDF and Excel export",
    ],
    mockup: "builder",
  },
  {
    category: "Variance Analysis",
    title: "Spot variances before they become problems",
    description:
      "Automatically compare actuals against budgets, forecasts, or prior periods. Set thresholds so significant variances are flagged instantly — and drill down to the transaction level to understand the root cause.",
    items: [
      "Automated period-over-period comparisons",
      "Threshold-based variance alerts",
      "Drill-down to transaction detail",
    ],
    mockup: "variance",
  },
  {
    category: "AI Insights",
    title: "Let AI surface what matters",
    description:
      "Vergo's AI analyzes your financial data to detect anomalies, forecast trends, and generate plain-language summaries. Spend less time digging through numbers and more time acting on what the data is telling you.",
    items: [
      "AI-powered anomaly detection",
      "Trend forecasting and projections",
      "Natural language summaries",
    ],
    mockup: "insights",
  },
];

export default function ReportingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
            Reporting
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-5xl mx-auto tracking-tight">
            Reports, insights, and analysis — built for accountants
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Build custom reports, flag variances automatically, and let AI
            surface the trends that matter. Everything your team needs to turn
            data into decisions.
          </p>
          <div className="mt-12">
            <a
              href="/demo"
              className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-black font-medium hover:bg-accent-hover transition-colors duration-300"
            >
              Request demo
            </a>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="divide-y divide-border">
        {features.map((section, idx) => (
          <section key={section.category} className="section-padding">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
                    {section.category}
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground leading-snug mb-5">
                    {section.title}
                  </h2>
                  <p className="text-foreground-secondary leading-relaxed mb-8">
                    {section.description}
                  </p>
                  <ul className="space-y-4">
                    {section.items.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-highlight-light flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-highlight"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ScrollReveal className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl bg-background-secondary border border-border aspect-[4/3] flex items-center justify-center overflow-hidden">
                    {section.mockup === "builder" && <ReportBuilderMockup />}
                    {section.mockup === "variance" && (
                      <VarianceAnalysisMockup />
                    )}
                    {section.mockup === "insights" && <AIInsightsMockup />}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            Reporting that works for you
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            See how Vergo helps accounting teams build better reports and surface
            insights faster.
          </p>
          <a
            href="/demo"
            className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-black font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            Request demo
          </a>
        </div>
      </section>
    </main>
  );
}
