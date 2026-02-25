import Link from "next/link";

const features = [
  {
    label: "All-in-One",
    title: "Everything your accounting team needs, unified.",
    description:
      "Manage tasks, reconciliations, expenses, invoices, and reports in a single platform. No more switching between disconnected tools.",
    items: [
      {
        name: "Task Management",
        detail: "Organize and track every close task with smart assignments and deadlines.",
      },
      {
        name: "Auto-Requests",
        detail: "Automatically request documents and approvals from stakeholders.",
      },
      {
        name: "AI-Powered Insights",
        detail: "Surface anomalies, suggest entries, and accelerate review cycles.",
      },
    ],
  },
  {
    label: "Time to Value",
    title: "Up and running in days, not months.",
    description:
      "Vergo is designed for fast onboarding. Our team handles setup so your accounting team can focus on what matters.",
    items: [
      {
        name: "Guided Onboarding",
        detail: "Dedicated implementation support to get you live quickly.",
      },
      {
        name: "Smart Defaults",
        detail: "Pre-built templates and workflows based on industry best practices.",
      },
      {
        name: "Instant Collaboration",
        detail: "Invite your team and start working together immediately.",
      },
    ],
  },
  {
    label: "AI Working for You",
    title: "Automation that handles the busywork.",
    description:
      "Let AI handle repetitive tasks while your team focuses on high-value analysis and strategic decisions.",
    items: [
      {
        name: "Auto-Reconciliation",
        detail: "Automatically match transactions and flag exceptions for review.",
      },
      {
        name: "Smart Follow-ups",
        detail: "AI tracks outstanding items and sends reminders on your behalf.",
      },
      {
        name: "Copilot",
        detail: "An AI assistant that helps you navigate your data and answer questions.",
      },
    ],
  },
];

const testimonials = [
  {
    quote: "Vergo transformed how our accounting team operates. We closed the books 5 days faster in the first month.",
    name: "Sarah Chen",
    title: "Controller, TechCorp",
  },
  {
    quote: "The automation alone saved us 40 hours per close cycle. It's a game-changer for mid-market companies.",
    name: "Michael Torres",
    title: "VP of Finance, ScaleUp Inc.",
  },
  {
    quote: "Finally, a platform built specifically for accounting teams. The AI features are genuinely useful, not just marketing buzz.",
    name: "Emily Park",
    title: "CFO, GrowthCo",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight max-w-4xl mx-auto">
            Put your book close on autopilot
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            The AI-native platform that replaces disconnected tools and manual workflows. Built for accounting teams that move fast.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
            >
              Request demo
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground font-medium hover:border-border-hover hover:bg-background-secondary transition-colors"
            >
              See the product
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Ticker */}
      <section className="py-12 border-y border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="text-center">
                <p className="text-sm text-foreground-secondary italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-foreground-muted">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
              Why teams choose Vergo
            </h2>
            <p className="mt-4 text-foreground-secondary max-w-xl mx-auto">
              A modern platform designed from the ground up for accounting workflows.
            </p>
          </div>

          <div className="space-y-20">
            {features.map((feature, idx) => (
              <div key={feature.label} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4">
                    {feature.label}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-foreground leading-snug mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <div className="space-y-4">
                    {feature.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-foreground-secondary">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placeholder image area */}
                <div className={`rounded-2xl bg-background-secondary border border-border aspect-[4/3] flex items-center justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-foreground-muted text-sm">Product screenshot</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl font-bold tracking-tight text-foreground mb-2">Vergo</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
            Start closing faster today
          </h2>
          <p className="text-foreground-secondary mb-8 max-w-lg mx-auto">
            Join the accounting teams that are putting their book close on autopilot.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
          >
            Request demo
          </Link>
        </div>
      </section>
    </main>
  );
}
