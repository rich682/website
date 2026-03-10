import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import AIAgentsSection from "@/components/AIAgentsSection";

export const metadata: Metadata = {
  title: "Analytics | Vergo",
  description:
    "Real-time dashboards, custom reports, and complete audit trails. Get the visibility your accounting team needs to make better decisions.",
};

const features = [
  {
    category: "Real-Time Dashboards",
    title: "See your numbers in real time",
    description:
      "Monitor close progress, AP pipeline, expenses, and team workload from a single dashboard. No more waiting for end-of-month reports to understand where things stand.",
    items: [
      "Live close progress tracking",
      "AP and expense dashboards",
      "Team workload visibility",
    ],
    icon: (
      <svg className="w-6 h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    category: "Custom Reports",
    title: "Build reports your team actually needs",
    description:
      "Create custom reports for any metric across your accounting workflows. Schedule automated delivery to stakeholders so everyone stays informed without manual effort.",
    items: [
      "Drag-and-drop report builder",
      "Scheduled report delivery",
      "Export to Excel and PDF",
    ],
    icon: (
      <svg className="w-6 h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    category: "Audit Trail",
    title: "Complete visibility into every action",
    description:
      "Every change, approval, and agent action is logged with timestamps and user attribution. Meet compliance requirements with confidence and simplify your audit prep.",
    items: [
      "Full action history",
      "User attribution and timestamps",
      "Compliance-ready exports",
    ],
    icon: (
      <svg className="w-6 h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

export default function AnalyticsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
            Analytics
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-5xl mx-auto tracking-tight">
            Real-time insights for your accounting team
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Dashboards, reports, and audit trails that give your team complete visibility into every workflow — without the manual effort.
          </p>
          <div className="mt-12">
            <a
              href="https://calendly.com/vergo-ai/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300"
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
                          <svg className="w-3 h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ScrollReveal className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl bg-background-secondary border border-border aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-12 h-12 rounded-full bg-highlight-light flex items-center justify-center mx-auto mb-3">
                        {section.icon}
                      </div>
                      <p className="text-sm text-foreground-muted">{section.category}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* AI Agents Section */}
      <AIAgentsSection />

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            Data-driven accounting starts here
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            See how Vergo gives your team the visibility to make better decisions.
          </p>
          <a
            href="https://calendly.com/vergo-ai/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            Request demo
          </a>
        </div>
      </section>
    </main>
  );
}
