import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CardConnectionsMockup from "@/components/animations/CardConnectionsMockup";
import ReceiptMatchingMockup from "@/components/animations/ReceiptMatchingMockup";
import PolicyEnforcementMockup from "@/components/animations/PolicyEnforcementMockup";

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
    mockup: "cards",
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
    mockup: "receipts",
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
    mockup: "policy",
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
                    {section.mockup === "cards" && <CardConnectionsMockup />}
                    {section.mockup === "receipts" && <ReceiptMatchingMockup />}
                    {section.mockup === "policy" && <PolicyEnforcementMockup />}
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
            Expense reports, automated
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            See how Vergo eliminates manual expense tracking with any credit card.
          </p>
          <a
            href="https://calendly.com/vergo-ai/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-black font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            Request demo
          </a>
        </div>
      </section>
    </main>
  );
}
