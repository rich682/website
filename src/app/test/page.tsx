import Link from "next/link";
import CoordinationMockup from "@/components/animations/CoordinationMockup";
import ReportingMockup from "@/components/animations/ReportingMockup";
import WhiteGloveMockup from "@/components/animations/WhiteGloveMockup";
import AIAgentsMockup from "@/components/animations/AIAgentsMockup";
import ApproveMockup from "@/components/animations/ApproveMockup";
import ConnectMockup from "@/components/animations/ConnectMockup";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vergo | The Workflow Platform for Accounting Teams",
  description:
    "Coordinate your close, automate reconciliations, and stop managing month-end across spreadsheets, email, and Teams.",
};

const coreFeatures = [
  {
    label: "Close Collaboration",
    title: "Run your entire close from one place",
    description:
      "Build your close checklist, assign tasks across teams, and track progress in real time. No more status update meetings or spreadsheet trackers.",
    items: [
      {
        name: "Close checklists",
        detail:
          "Create every month-end task with owners, deadlines, and dependencies.",
      },
      {
        name: "Cross-team requests",
        detail:
          "Automatically request documents and sign-offs from stakeholders outside accounting.",
      },
      {
        name: "Progress tracking",
        detail:
          "See exactly where your close stands at any point, down to individual tasks.",
      },
    ],
    href: "/test/product/close-management",
    Mockup: CoordinationMockup,
  },
  {
    label: "Reporting",
    title: "Build reports without pulling data manually",
    description:
      "Create custom financial reports, catch variances automatically, and see what's changed across periods — so your team focuses on analysis, not assembly.",
    items: [
      {
        name: "Custom report builder",
        detail:
          "Build tailored reports and export to PDF or Excel in one click.",
      },
      {
        name: "Automated variance analysis",
        detail:
          "Compare actuals to budgets or prior periods with threshold-based flags.",
      },
      {
        name: "Trend surfacing",
        detail:
          "See what's changed across periods without digging through spreadsheets.",
      },
    ],
    href: "/test/product/reporting",
    Mockup: ReportingMockup,
  },
  {
    label: "AI Agents",
    title: "Automate the work, keep the control",
    description:
      "Build agents that handle the repetitive parts of your close — reconciliations, follow-ups, data pulls. Every agent runs on your rules, and nothing gets finalized until you approve it.",
    items: [
      {
        name: "You define the rules",
        detail:
          "Your account manager helps build agents around your specific workflows and thresholds.",
      },
      {
        name: "Agents execute",
        detail:
          "Reconciliations, follow-ups, and reports run on your schedule without manual effort.",
      },
      {
        name: "You review and approve",
        detail:
          "Every output surfaces for your review before anything is posted or sent.",
      },
    ],
    href: "/test/ai-agents",
    Mockup: AIAgentsMockup,
  },
];

const secondaryFeatures = [
  {
    title: "AP Automation",
    description:
      "From invoice capture to approval routing to your general ledger — automate the entire AP workflow with full audit trails.",
    items: [
      "Automatic invoice capture",
      "Smart approval routing",
      "Accounting software sync",
    ],
    href: "/test/product/ap-automation",
    Mockup: ApproveMockup,
  },
  {
    title: "Expense Management",
    description:
      "Connect any credit card, match receipts automatically, and enforce spending policies in real time.",
    items: [
      "Connect any card",
      "Automatic receipt matching",
      "Policy enforcement",
    ],
    href: "/test/product/expense-management",
    Mockup: ConnectMockup,
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

const comparisonRows = [
  {
    need: "Recurring monthly workflows that reset every period",
    generic: "One-off project boards you recreate manually each month",
  },
  {
    need: "Cross-team data collection from outside accounting",
    generic: "Task assignments that only work for people on your team",
  },
  {
    need: "Status tracking tied to reconciliations and close tasks",
    generic: "Generic status columns that don't reflect close progress",
  },
  {
    need: "Automation that understands GL accounts and thresholds",
    generic: "Basic if-then rules with no accounting context",
  },
  {
    need: "Built-in approval routing and audit trails",
    generic: "No concept of compliance or sign-off workflows",
  },
];

export default function TestPage() {
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
            The AI collaboration tool
            <span className="block text-[#6366F1]">for accounting teams</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            Coordinate your close, automate reconciliations, and stop managing
            month-end across spreadsheets, email, and Teams.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.tryvergo.com/signup"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
            >
              Get Started
            </a>
            <Link
              href="/test/product"
              className="inline-flex items-center px-7 py-3 rounded-lg border border-[#E5E7EB] text-[#555] font-medium hover:border-[#999] hover:text-[#111] transition-colors text-sm"
            >
              See how it works
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

      {/* ============ SOCIAL PROOF BAR ============ */}
      <section className="py-6 border-y border-[#E5E7EB] bg-[#FAFAFA]">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-[#999] mb-4">
          Trusted by accounting teams at
        </p>
        <div className="max-w-5xl mx-auto px-6 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker">
            {[
              "Blackline", "Bold LV", "BWC", "Dig it", "DNT", "enCompass",
              "FDL Star", "Heartland", "Hospitality Build", "ICS",
              "Industry Standard USA", "Jarrell", "Lindamood", "LVR",
              "Marriot Construction", "Miller", "New Cast", "Northern Lights",
              "Pacific Tech", "Paintech", "Taurus", "TMG", "Two State", "Unity",
            ].map((company) => (
              <span
                key={company}
                className="inline-block px-8 font-semibold text-[#333] tracking-wide text-sm whitespace-nowrap"
              >
                {company}
              </span>
            ))}
            {[
              "Blackline", "Bold LV", "BWC", "Dig it", "DNT", "enCompass",
              "FDL Star", "Heartland", "Hospitality Build", "ICS",
              "Industry Standard USA", "Jarrell", "Lindamood", "LVR",
              "Marriot Construction", "Miller", "New Cast", "Northern Lights",
              "Pacific Tech", "Paintech", "Taurus", "TMG", "Two State", "Unity",
            ].map((company) => (
              <span
                key={`dup-${company}`}
                className="inline-block px-8 font-semibold text-[#333] tracking-wide text-sm whitespace-nowrap"
                aria-hidden="true"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ============ PROBLEM SECTION ============ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
              Your close is scattered across too many tools
            </h2>
            <p className="mt-4 text-[#555] max-w-2xl mx-auto leading-relaxed">
              Every month, your team coordinates across spreadsheets, email,
              Slack, and maybe a project management tool that wasn&apos;t built
              for accounting. Things slip through the cracks.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125" />
                  </svg>
                ),
                label: "Spreadsheets",
                detail: "Task trackers that go stale",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: "Email",
                detail: "Chasing documents and approvals",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                label: "Teams",
                detail: "Status updates lost in channels",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
                label: "Invoices",
                detail: "Scattered across inboxes",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                label: "Bills",
                detail: "Approvals stuck in email chains",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                ),
                label: "Expenses",
                detail: "Receipts chased at month-end",
              },
            ].map((tool) => (
              <div
                key={tool.label}
                className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-4 sm:p-5 text-center hover:border-[#D1D5DB] transition-colors"
              >
                <div className="flex justify-center mb-2.5">{tool.icon}</div>
                <p className="font-semibold text-[#111] text-sm">
                  {tool.label}
                </p>
                <p className="text-xs text-[#888] mt-1">{tool.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-[#555] max-w-xl mx-auto">
            None of these tools understand your close, your reconciliations, or
            your deadlines.{" "}
            <span className="font-semibold text-[#111]">Vergo does.</span>
          </p>
        </div>
      </section>

      {/* ============ CORE FEATURES ============ */}
      <div className="divide-y divide-[#E5E7EB]">
        {coreFeatures.map((feature, idx) => (
          <section key={feature.label} className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-[#6366F1] mb-4">
                    {feature.label}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111] leading-snug mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#555] leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-4">
                    {feature.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EEF2FF] flex items-center justify-center flex-shrink-0 mt-0.5">
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
                        <div>
                          <p className="font-semibold text-[#111] text-sm">
                            {item.name}
                          </p>
                          <p className="text-sm text-[#555] mt-0.5">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {feature.href && (
                    <Link
                      href={feature.href}
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
                  <feature.Mockup />
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
            See how Vergo works for your accounting team
          </h2>
          <p className="mt-3 text-[#555]">
            Start your free trial and get set up with your dedicated account
            manager.
          </p>
          <a
            href="https://app.tryvergo.com/signup"
            className="inline-flex items-center mt-6 px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ============ SECONDARY FEATURES ============ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111] tracking-tight text-center mb-12">
            Also included
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {secondaryFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] overflow-hidden hover:border-[#D1D5DB] transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-[#E5E7EB]">
                  <feature.Mockup />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#111] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#555] leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {feature.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#333]"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0"
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
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] transition-colors"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
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
            ))}
          </div>
        </div>
      </section>

      {/* ============ DIFFERENTIATION ============ */}
      <section className="py-16 lg:py-24 bg-[#F7F7F8] border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
              Why generic tools break for accounting
            </h2>
            <p className="mt-4 text-[#555] max-w-2xl mx-auto">
              Monday.com, ClickUp, and Asana are great for project management.
              But accounting workflows have different requirements.
            </p>
          </div>

          {/* Column headers */}
          <div className="hidden sm:grid grid-cols-2 gap-4 mb-3">
            <div className="rounded-lg bg-[#22C55E]/5 border border-[#22C55E]/20 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#16A34A]">
                What accounting teams need
              </p>
            </div>
            <div className="rounded-lg bg-[#F59E0B]/5 border border-[#F59E0B]/20 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#D97706]">
                What generic tools give you
              </p>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="space-y-3">
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-lg bg-white border border-[#E5E7EB] px-5 py-4">
                  <p className="sm:hidden text-[10px] font-semibold uppercase tracking-wide text-[#16A34A] mb-1">
                    What you need
                  </p>
                  <p className="text-sm text-[#111] font-medium">{row.need}</p>
                </div>
                <div className="rounded-lg bg-white border border-[#E5E7EB] px-5 py-4">
                  <p className="sm:hidden text-[10px] font-semibold uppercase tracking-wide text-[#D97706] mb-1">
                    What generic tools give you
                  </p>
                  <p className="text-sm text-[#888]">{row.generic}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#111] font-semibold mb-6 max-w-2xl mx-auto">
              Vergo is built for how accounting teams actually work — recurring
              close cycles, cross-functional coordination, and workflows that
              need an audit trail.
            </p>
            <a
              href="https://app.tryvergo.com/signup"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
            >
              See Vergo in action
            </a>
          </div>
        </div>
      </section>

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

      {/* ============ SUPPORT / ACCOUNT MANAGER ============ */}
      <section className="py-16 lg:py-24 bg-[#F7F7F8] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-[#6366F1] mb-4">
                Support
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111] leading-snug mb-4">
                Your team gets a dedicated account manager
              </h3>
              <p className="text-[#555] leading-relaxed mb-6">
                Every Vergo customer works with a dedicated account manager who
                sets up your workspace, builds your workflows, and is available
                whenever you need help.
              </p>
              <div className="space-y-4">
                {[
                  {
                    name: "Hands-on onboarding",
                    detail:
                      "Your account manager configures Vergo to match your workflows from day one.",
                  },
                  {
                    name: "Ongoing support",
                    detail:
                      "A single point of contact who knows your business and your close process.",
                  },
                  {
                    name: "Best practice guidance",
                    detail:
                      "Recommendations based on what works for teams like yours.",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEF2FF] flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <div>
                      <p className="font-semibold text-[#111] text-sm">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#555] mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ScrollReveal className="rounded-xl bg-white border border-[#E5E7EB] aspect-[4/3] overflow-hidden">
              <WhiteGloveMockup />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to help your accounting team?
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Join the accounting teams closing faster with less manual work.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.tryvergo.com/signup"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
            >
              Get Started
            </a>
            <Link
              href="/test/product"
              className="inline-flex items-center px-7 py-3 rounded-lg border border-white/20 text-white/70 font-medium hover:border-white/40 hover:text-white transition-colors text-sm"
            >
              See the platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
