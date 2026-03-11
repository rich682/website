import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Vergo",
  description:
    "Simple, transparent pricing for accounting teams. Start with Essentials or unlock AI Agents and dedicated support with Agent Mode.",
};

const tiers = [
  {
    name: "Essentials",
    description:
      "Organize and streamline your close, AP, and expense workflows in one platform.",
    price: "$20",
    priceDetail: "/person/month",
    highlight: false,
    popular: false,
    includes: null,
    features: [
      "Close Management",
      "AP Automation",
      "Expense Management",
    ],
  },
  {
    name: "Pro",
    description:
      "Unlock accounting integrations, AI agents, and a dedicated account manager.",
    price: "Custom",
    priceDetail: null,
    highlight: true,
    popular: true,
    includes: "Everything in Essentials, plus:",
    features: [
      "Accounting Integrations",
      "Access to AI Agents",
      "Dedicated Account Manager",
    ],
  },
  {
    name: "Enterprise",
    description:
      "For organizations with multiple entities that need advanced security controls.",
    price: "Custom",
    priceDetail: null,
    highlight: false,
    popular: false,
    includes: "Everything in Pro, plus:",
    features: [
      "Multi-entity support",
      "Enterprise-grade security",
    ],
  },
];

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-highlight-light flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
            Pricing
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-4xl mx-auto tracking-tight">
            Simple pricing, no surprises
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Start with the essentials or unlock AI agents and dedicated support. Every plan includes full access to the platform.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-8 flex flex-col ${
                  tier.highlight
                    ? "border-accent bg-background shadow-lg ring-1 ring-accent/20"
                    : "border-border bg-background shadow-sm"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <span className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent/10 text-accent mb-4">
                    Most popular
                  </span>
                )}

                {/* Tier name */}
                <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                  {tier.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground-secondary leading-relaxed mb-6 min-h-[3.75rem]">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6 min-h-[2.5rem] flex items-baseline">
                  {tier.priceDetail ? (
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-foreground-muted text-sm">Starts at</span>
                      <span className="text-2xl font-normal text-foreground">{tier.price}</span>
                      <span className="text-sm text-foreground-muted">{tier.priceDetail}</span>
                    </div>
                  ) : (
                    <span className="text-2xl font-normal text-foreground uppercase tracking-wide">{tier.price}</span>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="/demo"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition-colors duration-300 mb-8 ${
                    tier.highlight
                      ? "bg-accent text-black hover:bg-accent-hover"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Request Demo
                </a>

                {/* Divider */}
                <div className="border-t border-border mb-6" />

                {/* Features */}
                <div className="flex-1">
                  <p className="text-sm text-foreground-muted mb-4">
                    {tier.includes ?? "What\u2019s included:"}
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 tracking-tight">
            Not sure which plan is right?
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            Talk to our team and we&apos;ll help you find the best fit for your accounting workflows.
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
