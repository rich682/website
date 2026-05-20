import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AIAgentsMockup from "@/components/animations/AIAgentsMockup";
import AgentSetupMockup from "@/components/animations/AgentSetupMockup";
import ApproveMockup from "@/components/animations/ApproveMockup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents | Vergo",
  description:
    "Configure AI agents to handle repetitive accounting tasks — reconciliations, vendor follow-ups, and more. Each agent surfaces its work for your review before anything is finalized.",
};

const steps = [
  {
    number: "01",
    category: "Build",
    title: "You build the agent with your account manager",
    description:
      "Define what each agent does — the tasks, rules, thresholds, and schedules. Your dedicated account manager helps you configure agents tailored to your workflows.",
    items: [
      "Define agent tasks and rules",
      "Set thresholds and tolerances",
      "Configure schedules",
    ],
    Mockup: AgentSetupMockup,
  },
  {
    number: "02",
    category: "Execute",
    title: "Agents execute the work",
    description:
      "Once configured, agents run on your schedule — handling reconciliations, vendor follow-ups, reports, and variance analysis. They work through your data methodically and surface their results.",
    items: [
      "Runs on your schedule",
      "Processes data systematically",
      "Flags exceptions automatically",
    ],
    Mockup: AIAgentsMockup,
  },
  {
    number: "03",
    category: "Review",
    title: "You review and approve",
    description:
      "Every piece of agent output is surfaced for human review before anything is finalized. Your team stays in control with clear approval workflows and full audit trails.",
    items: [
      "Human-in-the-loop review",
      "Approval workflows",
      "Full audit trail",
    ],
    Mockup: ApproveMockup,
  },
];

const agentTypes = [
  {
    name: "Reconciliation Agent",
    description:
      "Automatically match transactions across GL accounts, flag exceptions, and prepare reconciliation reports for your review.",
  },
  {
    name: "Stakeholder Request Agent",
    description:
      "Send and follow up on document requests, vendor sign-offs, and data submissions from across the business.",
  },
  {
    name: "Reporting Agent",
    description:
      "Generate monthly reports, variance analyses, and management packages on your schedule.",
  },
  {
    name: "Data Analysis Agent",
    description:
      "Surface trends, anomalies, and insights from your accounting data without manual digging.",
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

export default function AIAgentsPage() {
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
          <span className="text-xs font-semibold uppercase tracking-wide text-[#6366F1] mb-4 inline-block">
            AI Agents
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            AI agents for{" "}
            <span className="block text-[#6366F1]">accounting teams</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            Configure AI agents to handle the repetitive work across your
            close — from reconciliations to vendor follow-ups. Each agent
            surfaces its work for your review before anything is finalized.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
            >
              Book a Demo
            </Link>
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

      {/* ============ 3 STEP SECTIONS ============ */}
      <div className="divide-y divide-[#E5E7EB]">
        {steps.map((step, idx) => (
          <section key={step.number} className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#EEF2FF] border border-[#E5E7EB] text-[#6366F1] text-xs font-medium">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#6366F1]">
                      {step.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111] leading-snug mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#555] leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="space-y-3">
                    {step.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
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
                        <span className="text-sm text-[#111]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ScrollReveal
                  className={`rounded-xl bg-[#F7F7F8] border border-[#E5E7EB] aspect-[4/3] overflow-hidden ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <step.Mockup />
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
            Put your agents to work
          </h2>
          <p className="mt-3 text-[#555]">
            Start your free trial and get set up with your dedicated account
            manager.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center mt-6 px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
          >
            Book a Demo
          </Link>
        </div>
      </section>

      {/* ============ AGENT TYPES ============ */}
      <section className="py-16 lg:py-24 bg-white border-y border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#6366F1] mb-4 inline-block">
              Agent Types
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111] tracking-tight">
              Agents built for accounting workflows
            </h2>
            <p className="mt-4 text-[#555] max-w-2xl mx-auto">
              Each agent is purpose-built to handle a specific function within
              your close process.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {agentTypes.map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border border-[#E5E7EB] bg-white p-6"
              >
                <p className="text-sm font-semibold text-[#111] mb-2">
                  {agent.name}
                </p>
                <p className="text-sm text-[#555]">{agent.description}</p>
              </div>
            ))}
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
            Put your agents to work
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Join the accounting teams closing faster with less manual work.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
            >
              Book a Demo
            </Link>
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
