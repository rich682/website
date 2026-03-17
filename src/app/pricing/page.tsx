import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Vergo",
  description:
    "Simple, transparent pricing for accounting teams. Start with Essentials or unlock AI Agents and dedicated support with Pro.",
};

const tiers = [
  {
    name: "Free",
    description:
      "Get started with the basics for individual users.",
    price: "$0",
    priceDetail: null,
    cta: "Get Started",
    highlight: false,
    popular: false,
    includes: null,
    features: ["1 User", "Month-End Checklist"],
  },
  {
    name: "Essentials",
    description:
      "Manage your close and build reports with everything your team needs to stay organized.",
    price: "$20",
    priceDetail: "/person/month",
    cta: "Start Free Trial",
    highlight: false,
    popular: false,
    includes: null,
    features: [
      "Close Collaboration",
      "Request Tracking",
      "Auto-Create Tasks in Next Period",
      "Reporting",
      "Reconciliations",
      "Databases",
      "Analysis",
      "Access to Expense Management",
      "Access to AP Automation",
    ],
  },
  {
    name: "Pro",
    description:
      "Unlock accounting integrations, AI agents, and a dedicated account manager.",
    price: "$30",
    priceDetail: "/person/month",
    cta: "Start Free Trial",
    highlight: false,
    popular: false,
    includes: "Everything in Essentials, plus:",
    features: [
      "Accounting Integrations",
      "Access to AI Agents",
      "Dedicated Account Manager",
    ],
  },
  {
    name: "Agent Mode",
    description:
      "Automate any task with AI agents on top of your Pro workflows.",
    price: "Custom pricing",
    priceDetail: null,
    cta: "Start Free Trial",
    highlight: false,
    popular: false,
    includes: "Everything in Pro, plus:",
    features: ["Automate Any Task with AI Agents"],
  },
];

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-[rgba(99,102,241,0.08)] flex items-center justify-center flex-shrink-0">
      <svg
        className="w-3 h-3 text-[#6366F1]"
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
  );
}

export default function PricingPage() {
  return (
    <main
      style={
        {
          "--background": "#FFFFFF",
          "--background-secondary": "#F7F7F8",
          "--background-tertiary": "#EFEFEF",
          "--highlight": "#6366F1",
          "--highlight-light": "rgba(99, 102, 241, 0.08)",
          "--border": "#E5E7EB",
          "--border-hover": "#D1D5DB",
          "--success": "#22C55E",
          "--warning": "#F59E0B",
          "--error": "#EF4444",
        } as React.CSSProperties
      }
      className="bg-white"
    >
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-[#6366F1] mb-4">
            Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.1] max-w-4xl mx-auto tracking-tight">
            For any team size,{" "}
            <span className="block text-[#6366F1]">simple pricing</span>
          </h1>
          <p className="mt-8 text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            Start with the essentials or unlock AI agents and dedicated support.
            Every plan includes full access to the platform.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl border border-[#E5E7EB] bg-white p-8 flex flex-col shadow-sm"
              >
                {/* Tier name */}
                <h3 className="text-2xl font-semibold text-[#111] mb-3 tracking-tight">
                  {tier.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#666] leading-relaxed mb-6 min-h-[4.5rem]">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6 h-[2.5rem] flex items-end">
                  <div className="flex items-baseline gap-1.5">
                    {tier.priceDetail ? (
                      <>
                        <span className="text-[#999] text-sm">From</span>
                        <span className="text-2xl font-normal text-[#111]">
                          {tier.price}
                        </span>
                        <span className="text-sm text-[#999]">
                          {tier.priceDetail}
                        </span>
                      </>
                    ) : tier.price.startsWith("$") ? (
                      <span className="text-2xl font-normal text-[#111]">
                        {tier.price}
                      </span>
                    ) : (
                      <span className="text-sm font-normal text-[#666] leading-relaxed">
                        {tier.price}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="https://app.tryvergo.com/signup"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition-colors duration-300 mb-8 bg-[#111] text-white hover:bg-[#333]"
                >
                  {tier.cta}
                </a>

                {/* Divider */}
                <div className="border-t border-[#E5E7EB] mb-6" />

                {/* Features */}
                <div className="flex-1">
                  <p className="text-sm text-[#999] mb-4">
                    {tier.includes ?? "What\u2019s included:"}
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-sm text-[#111]">{feature}</span>
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
      <section className="py-16 lg:py-24 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-4 tracking-tight">
            Start Free Trial{" "}
            <span className="block text-[#6366F1]">Today</span>
          </h2>
          <p className="text-[#666] mb-8 leading-relaxed">
            Talk to our team and we&apos;ll help you find the best fit for your
            accounting workflows.
          </p>
          <a
            href="https://app.tryvergo.com/signup"
            className="inline-flex items-center px-7 py-3 rounded-md bg-[#F59E42] text-white font-medium hover:bg-[#E8913A] transition-colors duration-300"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
