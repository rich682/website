import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Vergo",
  description:
    "Explore how Vergo helps accounting teams manage tasks, automate requests, reconcile accounts, and close books faster.",
};

const productSections = [
  {
    number: "01",
    category: "Organize",
    title: "Manage every close task in one place",
    description:
      "Create, assign, and track tasks across your entire close checklist. Set dependencies, deadlines, and recurring schedules so nothing falls through the cracks.",
    features: [
      "Customizable close checklists",
      "Task dependencies and deadlines",
      "Recurring task templates",
    ],
  },
  {
    number: "02",
    category: "Automate",
    title: "Auto-request documents and approvals",
    description:
      "Automatically send requests to stakeholders for the documents, sign-offs, and data you need. Track status in real time and send smart reminders.",
    features: [
      "Automated request workflows",
      "Real-time status tracking",
      "Smart reminder sequences",
    ],
  },
  {
    number: "03",
    category: "Reconcile",
    title: "Match transactions with confidence",
    description:
      "AI-powered reconciliation that automatically matches transactions, identifies discrepancies, and flags items for review.",
    features: [
      "Auto-matching engine",
      "Exception flagging",
      "Audit trail for every match",
    ],
  },
  {
    number: "04",
    category: "Analyze",
    title: "Surface insights with AI",
    description:
      "Let AI review your data, spot anomalies, and suggest journal entries. Get answers to questions about your financials instantly.",
    features: [
      "Anomaly detection",
      "AI-suggested entries",
      "Natural language queries",
    ],
  },
  {
    number: "05",
    category: "Report",
    title: "Generate reports in seconds",
    description:
      "Build and share financial reports with real-time data. Customize templates and schedule automated distribution.",
    features: [
      "Real-time dashboards",
      "Custom report templates",
      "Automated distribution",
    ],
  },
  {
    number: "06",
    category: "Collaborate",
    title: "Work together seamlessly",
    description:
      "Comments, @mentions, and activity feeds keep your team aligned. Everyone sees the same source of truth.",
    features: [
      "Inline comments and threads",
      "Activity feeds per task",
      "Role-based permissions",
    ],
  },
];

const testimonials = [
  {
    quote: "We cut our close time in half within the first quarter.",
    name: "David Lin",
    title: "Accounting Manager, Presto",
  },
  {
    quote: "The auto-request feature alone saves my team 20 hours a month.",
    name: "Rachel Adams",
    title: "Controller, Finway",
  },
  {
    quote: "Vergo is the only tool that actually understands how accountants work.",
    name: "James Okoro",
    title: "VP Finance, Helix",
  },
  {
    quote: "Our auditors love the clean audit trail Vergo provides.",
    name: "Priya Sharma",
    title: "CFO, Nexus Solutions",
  },
];

export default function ProductPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] max-w-4xl mx-auto tracking-tight">
            The platform built for accounting teams
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Everything you need to manage your book close — tasks, requests, reconciliations, reports, and AI — in one unified workflow.
          </p>
          <div className="mt-12">
            <Link
              href="/demo"
              className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300"
            >
              Request demo
            </Link>
          </div>
        </div>
      </section>

      {/* Product Flow Nav */}
      <section className="border-y border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {productSections.map((s) => (
              <div
                key={s.number}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition-colors duration-300"
              >
                <span className="text-xs font-medium text-foreground-muted">{s.number}</span>
                <span className="text-sm font-medium text-foreground">{s.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Feature Sections */}
      <div className="divide-y divide-border">
        {productSections.map((section, idx) => (
          <section key={section.number} className="section-padding">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-background-secondary border border-border text-foreground-muted text-xs font-medium">
                      {section.number}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-widest text-foreground-muted">
                      {section.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground leading-snug mb-5">
                    {section.title}
                  </h2>
                  <p className="text-foreground-secondary leading-relaxed mb-8">
                    {section.description}
                  </p>
                  <ul className="space-y-4">
                    {section.features.map((f) => (
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

                {/* Placeholder screenshot */}
                <div className={`rounded-xl bg-background-secondary border border-border aspect-[4/3] flex items-center justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-foreground-muted text-sm">Product screenshot</span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Testimonials */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-center mb-16 tracking-tight">
            The results speak for themselves
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <p className="text-sm text-foreground-secondary italic leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-foreground-muted mt-0.5">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            Start closing faster today
          </h2>
          <Link
            href="/demo"
            className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            Request demo
          </Link>
        </div>
      </section>
    </main>
  );
}
