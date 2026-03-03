import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ProductWorkflowNav from "@/components/ProductWorkflowNav";
import TasksMockup from "@/components/animations/TasksMockup";
import ConnectMockup from "@/components/animations/ConnectMockup";
import AgentSetupMockup from "@/components/animations/AgentSetupMockup";
import ApproveMockup from "@/components/animations/ApproveMockup";
import CloseMockup from "@/components/animations/CloseMockup";

export const metadata: Metadata = {
  title: "Product | Vergo",
  description:
    "See how Vergo helps accounting teams create tasks, connect their tools, setup automation agents, and close month-end stress-free.",
};

const productSections = [
  {
    number: "01",
    category: "Connect",
    title: "Connect accounting software & create databases",
    description:
      "Integrate your ERP, GL, and other accounting tools directly into Vergo. Create structured databases that give your agents the data they need to work.",
    features: [
      "ERP and GL integrations",
      "Custom database creation",
      "Automated data syncing",
    ],
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
  },
  {
    number: "03",
    category: "Agents",
    title: "Setup automation agents",
    description:
      "Configure AI agents to handle the repetitive work across your close. Each agent is purpose-built for a specific function and works autonomously on your behalf.",
    features: [
      "Stakeholder Requests",
      "Reconciliations",
      "Reports",
      "Data Analysis",
    ],
  },
  {
    number: "04",
    category: "Approve",
    title: "Controlled approval of agent work",
    description:
      "Every piece of agent output is surfaced for human review before it goes live. Your team stays in control with clear approval workflows and full audit trails.",
    features: [
      "Human-in-the-loop review",
      "Approval workflows",
      "Full audit trail",
    ],
  },
  {
    number: "05",
    category: "Close",
    title: "Close audit-ready, faster & more controlled",
    description:
      "With tasks managed, agents running, and approvals in place, your team closes the books faster — with more confidence and less stress.",
    features: [
      "Faster close cycles",
      "Real-time progress tracking",
      "Complete close visibility",
    ],
  },
];

const testimonials = [
  {
    quote: "Finally, a platform built specifically for accounting teams. The AI features are genuinely useful, not just marketing buzz.",
    name: "Emily Park",
    title: "CFO, GrowthCo",
  },
  {
    quote: "Vergo transformed how our accounting team operates. We closed the books 5 days faster in the first month.",
    name: "Sarah Chen",
    title: "Controller, TechCorp",
  },
  {
    quote: "The automation alone saved us 40 hours per close cycle. It's a game-changer for mid-market companies.",
    name: "Michael Torres",
    title: "Accountant, ScaleUp Inc.",
  },
];

export default function ProductPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] max-w-4xl mx-auto tracking-tight">
            Vergo customers close their books stress-free
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Vergo customers close their books stress-free
          </p>
          <div className="mt-12">
            <a
              href="https://calendly.com/vergo-ai/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300"
            >
              Request demo
            </a>
          </div>
        </div>
      </section>

      {/* Product Workflow Nav */}
      <ProductWorkflowNav
        steps={productSections.map((s) => ({
          number: s.number,
          category: s.category,
          sectionId: `step-${s.category.toLowerCase()}`,
        }))}
      />

      {/* Product Feature Sections */}
      <div className="divide-y divide-border">
        {productSections.map((section, idx) => (
          <section key={section.number} id={`step-${section.category.toLowerCase()}`} className="section-padding">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-background-secondary border border-border text-foreground-muted text-xs font-medium">
                      {section.number}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-widest text-foreground-muted">
                      {section.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground leading-snug mb-5">
                    {section.title}
                  </h2>
                  <p className="text-foreground-secondary leading-relaxed mb-8">
                    {section.description}
                  </p>
                  <ul className="space-y-4">
                    {section.features.map((f) => (
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

                {/* Animated mockup */}
                <ScrollReveal className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl bg-background-secondary border border-border aspect-[4/3] flex items-center justify-center overflow-hidden">
                    {idx === 0 && <ConnectMockup />}
                    {idx === 1 && <TasksMockup />}
                    {idx === 2 && <AgentSetupMockup />}
                    {idx === 3 && <ApproveMockup />}
                    {idx === 4 && <CloseMockup />}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Testimonials */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-center mb-16 tracking-tight">
            The results speak for themselves
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <p className="text-sm text-foreground-secondary italic leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-foreground-muted mt-0.5">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            End book close chaos today
          </h2>
          <a
            href="https://calendly.com/vergo-ai/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            Request demo
          </a>
        </div>
      </section>
    </main>
  );
}
