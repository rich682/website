import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import AIAgentsSection from "@/components/AIAgentsSection";

export const metadata: Metadata = {
  title: "Expense Management | Vergo",
  description:
    "Connect any credit card and automate expense management. Real-time tracking, receipt matching, and policy enforcement in one platform.",
};

const features = [
  {
    category: "Card Connections",
    title: "Connect any credit card",
    description:
      "Link corporate cards, personal cards, or virtual cards from any provider. Transactions sync automatically so your team never has to enter expenses manually.",
    items: [
      "Any credit card provider",
      "Real-time transaction sync",
      "Virtual card support",
    ],
    icon: (
      <svg className="w-6 h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    category: "Receipt Matching",
    title: "Automatic receipt matching",
    description:
      "Snap a photo or forward receipts by email. Vergo matches receipts to transactions automatically and flags missing documentation before close.",
    items: [
      "Photo and email capture",
      "AI-powered matching",
      "Missing receipt alerts",
    ],
    icon: (
      <svg className="w-6 h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    category: "Policy Enforcement",
    title: "Enforce spending policies automatically",
    description:
      "Define spending limits, category restrictions, and approval requirements. Out-of-policy expenses are flagged instantly so nothing slips through.",
    items: [
      "Configurable spending policies",
      "Real-time policy checks",
      "Automated escalation",
    ],
    icon: (
      <svg className="w-6 h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ExpenseManagementPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
            Expense Management
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-5xl mx-auto tracking-tight">
            Connect any credit card, automate expense tracking
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Link any card, match receipts automatically, and enforce spending policies in real time. No more chasing expense reports at month-end.
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
            Expense reports, automated
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            See how Vergo eliminates manual expense tracking with any credit card.
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
