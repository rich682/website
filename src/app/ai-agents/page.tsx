import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import AIAgentsMockup from "@/components/animations/AIAgentsMockup";
import AgentSetupMockup from "@/components/animations/AgentSetupMockup";
import ApproveMockup from "@/components/animations/ApproveMockup";

export const metadata: Metadata = {
  title: "AI Agents | Vergo",
  description:
    "Configure AI agents to automate reconciliations, reports, stakeholder requests, and data analysis. You build, agents execute, you review and approve.",
};

const agentTypes = [
  {
    name: "Reconciliation Agent",
    description: "Automatically match transactions across accounts, flag exceptions, and prepare reconciliation reports for your review.",
  },
  {
    name: "Stakeholder Request Agent",
    description: "Send and follow up on document requests, sign-offs, and data submissions from across the business.",
  },
  {
    name: "Reporting Agent",
    description: "Generate monthly reports, variance analyses, and management packages on your schedule.",
  },
  {
    name: "Data Analysis Agent",
    description: "Surface trends, anomalies, and insights from your accounting data without manual digging.",
  },
];

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
    mockup: "setup",
  },
  {
    number: "02",
    category: "Execute",
    title: "Agents execute the work",
    description:
      "Once configured, agents run on your schedule — handling reconciliations, follow-ups, reports, and analysis. They work through your data methodically and surface their results.",
    items: [
      "Runs on your schedule",
      "Processes data systematically",
      "Flags exceptions automatically",
    ],
    mockup: "agents",
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
    mockup: "approve",
  },
];

export default function AIAgentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
            AI Agents
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-5xl mx-auto tracking-tight">
            You build. Agents execute. You review.
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Configure AI agents to handle the repetitive work across your close. Each agent handles a specific function and surfaces its work for your review before anything is finalized.
          </p>
          <div className="mt-12">
            <a
              href="/demo"
              className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-black font-medium hover:bg-accent-hover transition-colors duration-300"
            >
              Request demo
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <div className="divide-y divide-border">
        {steps.map((step, idx) => (
          <section key={step.number} className="section-padding">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-background-secondary border border-border text-foreground-muted text-xs font-medium">
                      {step.number}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-widest text-foreground-muted">
                      {step.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground leading-snug mb-5">
                    {step.title}
                  </h2>
                  <p className="text-foreground-secondary leading-relaxed mb-8">
                    {step.description}
                  </p>
                  <ul className="space-y-4">
                    {step.items.map((f) => (
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

                <ScrollReveal className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl bg-background-secondary border border-border aspect-[4/3] flex items-center justify-center overflow-hidden">
                    {step.mockup === "setup" && <AgentSetupMockup />}
                    {step.mockup === "agents" && <AIAgentsMockup />}
                    {step.mockup === "approve" && <ApproveMockup />}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Agent Types */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
              Agent Types
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              Agents for every workflow
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {agentTypes.map((agent) => (
              <div key={agent.name} className="card p-6">
                <h3 className="text-sm font-medium text-foreground mb-2">{agent.name}</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            Put your agents to work
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            See how Vergo AI agents can automate the repetitive work across your accounting team.
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
