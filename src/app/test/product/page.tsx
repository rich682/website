import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TasksMockup from "@/components/animations/TasksMockup";
import ConnectMockup from "@/components/animations/ConnectMockup";
import AgentSetupMockup from "@/components/animations/AgentSetupMockup";
import ApproveMockup from "@/components/animations/ApproveMockup";
import AIInsightsMockup from "@/components/animations/AIInsightsMockup";
import CloseMockup from "@/components/animations/CloseMockup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Vergo",
  description:
    "The workflow platform that connects your accounting tools, automates repetitive tasks, and gives you complete visibility into your close.",
};

const productSections = [
  {
    number: "01",
    category: "Connect",
    title: "Connects to your accounting software",
    description:
      "Integrate your ERP, GL, and other accounting tools directly into Vergo. Create structured databases that give your agents the data they need to work.",
    features: [
      "ERP and GL integrations",
      "Custom database creation",
      "Automated data syncing",
    ],
    Mockup: ConnectMockup,
    href: undefined as string | undefined,
  },
  {
    number: "02",
    category: "Tasks",
    title: "Create month-end tasks",
    description:
      "Build your close checklist from scratch or from templates. Assign owners, set deadlines, and track dependencies so nothing falls through the cracks.",
    features: [
      "Customizable close checklists",
      "Task dependencies and deadlines",
      "Recurring task templates",
    ],
    Mockup: TasksMockup,
    href: "/test/product/close-management",
  },
  {
    number: "03",
    category: "Agents",
    title: "Setup automation agents",
    description:
      "Configure AI agents to handle the repetitive work across your close. Each agent handles a specific function and surfaces its work for your review.",
    features: [
      "Stakeholder Requests",
      "Reconciliations",
      "Reports",
      "Data Analysis",
    ],
    Mockup: AgentSetupMockup,
    href: "/test/ai-agents",
  },
  {
    number: "04",
    category: "Review",
    title: "Review and approve agent work",
    description:
      "Every piece of agent output is surfaced for human review before it goes live. Your team stays in control with clear approval workflows and full audit trails.",
    features: [
      "Human-in-the-loop review",
      "Approval workflows",
      "Full audit trail",
    ],
    Mockup: ApproveMockup,
    href: undefined as string | undefined,
  },
  {
    number: "05",
    category: "Analyze",
    title: "Surface trends, risks, and opportunities",
    description:
      "Vergo analyzes your financial data to highlight what matters most. Spot variances, track trends over time, and surface risks and opportunities — so your team can act on insights instead of digging for them.",
    features: [
      "Automated trend analysis",
      "Variance and risk detection",
      "AI-powered insights and forecasts",
    ],
    Mockup: AIInsightsMockup,
    href: "/test/product/reporting",
  },
  {
    number: "06",
    category: "Close",
    title: "Close audit-ready, faster & more controlled",
    description:
      "With tasks managed, agents running, and insights surfaced, your team closes the books faster — with more confidence and less stress.",
    features: [
      "Faster close cycles",
      "Real-time progress tracking",
      "Complete close visibility",
    ],
    Mockup: CloseMockup,
    href: "/test/product/close-management",
  },
];

const testimonials = [
  {
    quote:
      "Since the transition to Vergo, we have been able to cut back the time spent on reconciliations immensely. What was a full time job previously, takes about an hour to process daily!",
    name: "Taylor Ricard",
    role: "Controller",
    company: "Moss Utilities",
  },
  {
    quote:
      "The integration with our ERP made the decision easy. With a few clicks in the Vergo app - our team are turning expenses in more timely, not to mention the ease of review and approval with the online platform.",
    name: "Laurie Weisensel",
    role: "CFO",
    company: "DNT",
  },
  {
    quote:
      "Since the signing I cannot speak highly enough of the customer service we have received, the team are continuously improving the product and are always on hand to jump on a call.",
    name: "Mark Goan",
    role: "Accountant",
    company: "JMB",
  },
];

export default function ProductPage() {
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
      {/* ============ HERO ============ */}
      <section className="pt-32 pb-12 lg:pt-44 lg:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            Vergo customers close their books{" "}
            <span className="text-[#6366F1]">stress-free</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            The workflow platform that connects your accounting tools, automates
            repetitive tasks, and gives you complete visibility into your close.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/demo"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
            >
              Get a walkthrough
            </a>
            <Link
              href="/test/product/close-management"
              className="inline-flex items-center px-7 py-3 rounded-lg border border-[#E5E7EB] text-[#555] font-medium hover:border-[#999] hover:text-[#111] transition-colors text-sm"
            >
              See close management
              <svg
                className="w-4 h-4 ml-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FEATURE SECTIONS 1-3 ============ */}
      <div className="divide-y divide-[#E5E7EB]">
        {productSections.slice(0, 3).map((section, idx) => (
          <section key={section.number} className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EEF2FF] border border-[#E5E7EB] text-[#6366F1] text-xs font-medium">
                      {section.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#6366F1]">
                      {section.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111] leading-snug mb-4">
                    {section.title}
                  </h3>
                  <p className="text-[#555] leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <div className="space-y-3">
                    {section.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
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
                        <span className="text-sm text-[#111]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {section.href && (
                    <Link
                      href={section.href}
                      className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] transition-colors"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}
                </div>

                <ScrollReveal
                  className={`rounded-xl bg-[#F7F7F8] border border-[#E5E7EB] aspect-[4/3] overflow-hidden ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <section.Mockup />
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ============ MID-PAGE CTA ============ */}
      <section className="py-12 lg:py-16 bg-[#EEF2FF] border-y border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111] tracking-tight">
            See how Vergo works for your team
          </h2>
          <p className="mt-3 text-[#555]">
            Get a walkthrough of the platform with your dedicated account
            manager.
          </p>
          <a
            href="/demo"
            className="inline-flex items-center mt-6 px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
          >
            Get a walkthrough
          </a>
        </div>
      </section>

      {/* ============ FEATURE SECTIONS 4-6 ============ */}
      <div className="divide-y divide-[#E5E7EB]">
        {productSections.slice(3).map((section, idx) => {
          const actualIdx = idx + 3;
          return (
            <section key={section.number} className="py-16 lg:py-24">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className={actualIdx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EEF2FF] border border-[#E5E7EB] text-[#6366F1] text-xs font-medium">
                        {section.number}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#6366F1]">
                        {section.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#111] leading-snug mb-4">
                      {section.title}
                    </h3>
                    <p className="text-[#555] leading-relaxed mb-6">
                      {section.description}
                    </p>
                    <div className="space-y-3">
                      {section.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
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
                          <span className="text-sm text-[#111]">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {section.href && (
                      <Link
                        href={section.href}
                        className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] transition-colors"
                      >
                        Learn more
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>

                  <ScrollReveal
                    className={`rounded-xl bg-[#F7F7F8] border border-[#E5E7EB] aspect-[4/3] overflow-hidden ${
                      actualIdx % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <section.Mockup />
                  </ScrollReveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111] tracking-tight text-center mb-12">
            What accounting teams are saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-6"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#F59E0B]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#333] leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm text-[#111]">{t.name}</p>
                  <p className="text-xs text-[#888]">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work on higher value tasks today
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Join the accounting teams closing faster with less manual work.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/demo"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
            >
              Get a walkthrough
            </a>
            <Link
              href="/test"
              className="inline-flex items-center px-7 py-3 rounded-lg border border-white/20 text-white/70 font-medium hover:border-white/40 hover:text-white transition-colors text-sm"
            >
              Back to overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
