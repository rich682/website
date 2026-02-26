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
      <section className="pt-36 pb-24 lg:pt-48 lg:pb-36 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] max-w-4xl mx-auto tracking-tight">
            Put your book close on autopilot
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            The AI-native platform that replaces disconnected tools and manual workflows. Built for accounting teams that move fast.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center px-7 py-3 rounded-md bg-white text-[#0e0e0e] font-medium hover:bg-white/90 transition-colors duration-300"
            >
              Request demo
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center px-7 py-3 rounded-md border border-white/20 text-white font-medium hover:border-white/40 transition-colors duration-300"
            >
              See the product
            </Link>
          </div>

          {/* Video Demo Placeholder */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="absolute bottom-6 text-sm text-white/40">Watch the product demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Ticker */}
      <section className="py-14 border-y border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t) => (
              <div key={t.name} className="text-center">
                <p className="text-sm text-foreground-secondary italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-foreground-muted mt-0.5">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              Why teams choose Vergo
            </h2>
            <p className="mt-5 text-foreground-secondary max-w-xl mx-auto leading-relaxed">
              A modern platform designed from the ground up for accounting workflows.
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, idx) => (
              <div key={feature.label} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-flex items-center text-xs font-medium uppercase tracking-widest text-foreground-muted mb-5">
                    {feature.label}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-foreground leading-snug mb-5">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <div className="space-y-5">
                    {feature.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-highlight-light flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-foreground-secondary mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placeholder image area */}
                <div className={`rounded-xl bg-background-secondary border border-border aspect-[4/3] flex items-center justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
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
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
            Start closing faster today
          </h2>
          <p className="text-foreground-secondary mb-10 max-w-lg mx-auto leading-relaxed">
            Join the accounting teams that are putting their book close on autopilot.
          </p>
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
