import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

import TasksMockup from "@/components/animations/TasksMockup";
import CloseMockup from "@/components/animations/CloseMockup";

export const metadata: Metadata = {
  title: "Close Management | Vergo",
  description:
    "Streamline your month-end close with task tracking, reconciliation workflows, and deadline management. Close faster with full visibility.",
};

const features = [
  {
    category: "Task Tracking",
    title: "Build and manage your close checklist",
    description:
      "Create close checklists from scratch or templates. Assign owners, set deadlines, track dependencies, and monitor progress in real time so nothing falls through the cracks.",
    items: [
      "Customizable close checklists",
      "Task dependencies and deadlines",
      "Recurring task templates",
    ],
    mockup: "tasks",
  },
  {
    category: "Reconciliation",
    title: "Reconcile accounts with confidence",
    description:
      "Automate matching, flag exceptions, and maintain a complete audit trail. Your team reviews only what needs attention while agents handle the rest.",
    items: [
      "Automated transaction matching",
      "Exception flagging and resolution",
      "Complete audit trail",
    ],
    mockup: "close",
  },
  {
    category: "Deadline Management",
    title: "Never miss a close deadline",
    description:
      "Track every milestone with real-time progress dashboards. Get proactive alerts when tasks are at risk and maintain full visibility across your team.",
    items: [
      "Real-time progress tracking",
      "At-risk task alerts",
      "Cross-team visibility",
    ],
    mockup: null,
  },
];

export default function CloseManagementPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
            Close Management
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-5xl mx-auto tracking-tight">
            Close the books faster, with more control
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Manage your entire month-end close in one place. Track tasks, automate reconciliations, and hit every deadline with complete visibility.
          </p>
          <div className="mt-12">
            <a
              href="https://calendly.com/vergo-ai/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-black font-medium hover:bg-accent-hover transition-colors duration-300"
            >
              Request demo
            </a>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="divide-y divide-border">
        {features.map((section, idx) => (
          <section key={section.category} className="section-padding">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
                    {section.category}
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground leading-snug mb-5">
                    {section.title}
                  </h2>
                  <p className="text-foreground-secondary leading-relaxed mb-8">
                    {section.description}
                  </p>
                  <ul className="space-y-4">
                    {section.items.map((f) => (
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
                    {section.mockup === "tasks" && <TasksMockup />}
                    {section.mockup === "close" && <CloseMockup />}
                    {section.mockup === null && (
                      <div className="text-center p-8">
                        <div className="w-12 h-12 rounded-full bg-highlight-light flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-sm text-foreground-muted">Deadline tracking</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            Close with confidence
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            See how Vergo helps accounting teams close faster with full control and visibility.
          </p>
          <a
            href="https://calendly.com/vergo-ai/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-black font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            Request demo
          </a>
        </div>
      </section>
    </main>
  );
}
