import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Vergo",
  description:
    "Simple, transparent pricing for construction accounting teams. Month-end management, expense management, AP automation, or the full platform.",
};

const tiers = [
  {
    name: "Month-End Automation",
    description:
      "Close collaboration, field & PM requests, job cost reporting, reconciliations, and AI analysis — everything your team needs to close the books.",
    price: "Custom pricing",
    priceDetail: null,
    cta: "Book a Demo",
    highlight: false,
    popular: false,
    includes: null,
    features: [
      "Close Collaboration",
      "Field & PM Requests",
      "Vendor Requests",
      "Reports & Job Costing",
      "WIP Report",
      "Reconciliations",
      "AI Analysis",
      "Auto-Create Tasks in Next Period",
    ],
  },
  {
    name: "Expense Management",
    description:
      "Connect any credit card, match receipts automatically, and enforce spending policies by job and cost code.",
    price: "$5",
    priceDetail: "/employee/month",
    cta: "Book a Demo",
    highlight: false,
    popular: false,
    includes: null,
    features: [
      "Connect Any Credit Card",
      "Automatic Receipt Matching",
      "Job & Cost Code Allocation",
      "Policy Enforcement",
      "Approval Routing",
      "Construction ERP Sync",
    ],
  },
  {
    name: "AP Automation",
    description:
      "Automate the entire AP workflow — from subcontractor invoice capture to approval routing to your general ledger.",
    price: "$0.50",
    priceDetail: "/invoice",
    cta: "Book a Demo",
    highlight: false,
    popular: false,
    includes: null,
    features: [
      "Automatic Invoice Capture",
      "Smart Approval Routing",
      "Subcontractor Invoice Management",
      "Lien Waiver Collection",
      "Construction ERP Sync",
    ],
  },
  {
    name: "Full Platform",
    description:
      "Everything in one package — month-end management, expenses, AP automation, AI agents, and a dedicated account manager.",
    price: "Custom pricing",
    priceDetail: null,
    cta: "Book a Demo",
    highlight: false,
    popular: false,
    includes: "Everything above, plus:",
    features: [
      "All Modules Included",
      "AI Agents",
      "Construction ERP Integrations",
      "Dedicated Account Manager",
    ],
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
            Pick individual modules or{" "}
            <span className="block text-[#6366F1]">bundle the full platform</span>
          </h1>
          <p className="mt-8 text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            Pick the modules your construction accounting team needs, or bundle
            everything together with the Full Platform. Most teams start with
            Month-End Automation.
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
                {/* Tier name — fixed height for alignment */}
                <h3 className="text-2xl font-semibold text-[#111] mb-3 tracking-tight h-[4rem] flex items-start">
                  {tier.name}
                </h3>

                {/* Description — fixed height for alignment */}
                <p className="text-sm text-[#666] leading-relaxed mb-6 h-[5.5rem]">
                  {tier.description}
                </p>

                {/* Price — fixed height for alignment */}
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
                <Link
                  href="/demo"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition-colors duration-300 mb-8 bg-[#111] text-white hover:bg-[#333]"
                >
                  {tier.cta}
                </Link>

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
            Book a Demo{" "}
            <span className="block text-[#6366F1]">Today</span>
          </h2>
          <p className="text-[#666] mb-8 leading-relaxed">
            Talk to our team and we&apos;ll help you find the best fit for your
            construction accounting workflows.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-7 py-3 rounded-md bg-[#F59E42] text-white font-medium hover:bg-[#E8913A] transition-colors duration-300"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
