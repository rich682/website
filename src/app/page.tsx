import Link from "next/link";
import CoordinationMockup from "@/components/animations/CoordinationMockup";
import RequestTrackingMockup from "@/components/animations/RequestTrackingMockup";
import ReportingMockup from "@/components/animations/ReportingMockup";
import WhiteGloveMockup from "@/components/animations/WhiteGloveMockup";
import AIAgentsMockup from "@/components/animations/AIAgentsMockup";
import InvoiceCaptureMockup from "@/components/animations/InvoiceCaptureMockup";
import CardConnectionsMockup from "@/components/animations/CardConnectionsMockup";
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
    title: "Keep track of all month-end tasks in one place, collaborate with your team",
    description:
      "Build your close checklist, assign tasks across teams, and track progress in real time. No more status update meetings or spreadsheet trackers.",
    items: [
      {
        name: "Close checklists",
        detail:
          "Create every month-end task with owners, deadlines, and dependencies.",
      },
      {
        name: "Progress tracking",
        detail:
          "See exactly where your close stands at any point, down to individual tasks.",
      },
      {
        name: "Seamless collaboration",
        detail:
          "Assign work, leave comments, and keep everyone informed in real time.",
      },
    ],
    href: "/product/close-management",
    Mockup: CoordinationMockup,
  },
  {
    label: "Request Tracking",
    title: "Send requests and track responses from all your stakeholders",
    description:
      "Easily send requests to employees, vendors, clients, and contractors. Track their responses and attachments in one centralized place.",
    items: [
      {
        name: "Send requests",
        detail:
          "Request documents, approvals, or data from anyone outside your team.",
      },
      {
        name: "Track responses",
        detail:
          "Monitor status and see who has responded, who hasn't, and when.",
      },
      {
        name: "Manage attachments",
        detail:
          "Collect and organize all files and responses in one secure location.",
      },
    ],
    href: "/product/close-management",
    Mockup: RequestTrackingMockup,
  },
  {
    label: "Reporting",
    title: "Build custom reports, combining any data source together",
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
    href: "/product/reporting",
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
    href: "/ai-agents",
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
    href: "/product/ap-automation",
    Mockup: InvoiceCaptureMockup,
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
    href: "/product/expense-management",
    Mockup: CardConnectionsMockup,
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
            The collaboration platform
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
              href="/product"
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
      <section className="py-6 border-y border-[#E5E7EB] bg-white">
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
              Accounting teams are not the bottleneck
            </h2>
            <p className="mt-4 text-[#555] max-w-2xl mx-auto leading-relaxed">
              Every month, your team coordinates across spreadsheets, email,
              Slack, and maybe a project management tool that wasn&apos;t built
              for accounting. Things slip through the cracks.
            </p>
          </div>

          {/* Stakeholders row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                label: "Employees",
                detail: "Late with submissions and approvals",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                label: "Clients",
                detail: "Slow to send documents you need",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#EC4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                label: "Vendors",
                detail: "Invoices scattered across inboxes",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-4 sm:p-5 text-center hover:border-[#D1D5DB] transition-colors"
              >
                <div className="flex justify-center mb-2.5">{item.icon}</div>
                <p className="font-semibold text-[#111] text-sm">
                  {item.label}
                </p>
                <p className="text-xs text-[#888] mt-1">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Divider with label */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t border-dashed border-[#D1D5DB]" />
            <span className="text-xs font-semibold uppercase tracking-wide text-[#999] whitespace-nowrap">Your team in the middle</span>
            <div className="flex-1 border-t border-dashed border-[#D1D5DB]" />
          </div>

          {/* Data sources row */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125" />
                  </svg>
                ),
                label: "Excel",
                detail: "Task trackers that go stale",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75m16.5 3.75v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
                  </svg>
                ),
                label: "Accounting Software",
                detail: "Data trapped in silos",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: "Email Inbox",
                detail: "Chasing documents and approvals",
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
      <div className="text-center py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
          Vergo connects all the dots in one modern platform
        </h2>
      </div>
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
      <section className="py-16 lg:py-24 bg-white border-y border-[#E5E7EB]">
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

      {/* ============ FINAL CTA ============ */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Streamline your accounting processes today.
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
              href="/product"
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
