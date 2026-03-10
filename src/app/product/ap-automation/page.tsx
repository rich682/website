import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ApproveMockup from "@/components/animations/ApproveMockup";
import ConnectMockup from "@/components/animations/ConnectMockup";
import ApprovalWorkflowMockup from "@/components/animations/ApprovalWorkflowMockup";

export const metadata: Metadata = {
  title: "AP Automation | Vergo",
  description:
    "Automate your accounts payable workflow. From invoice capture to approval routing and syncing to your accounting software, Vergo handles it all.",
};

const features = [
  {
    category: "Invoice Capture",
    title: "Capture invoices automatically",
    description:
      "Forward invoices by email or upload directly. Vergo extracts line items, amounts, and vendor details automatically — no manual data entry required.",
    items: [
      "Email and upload capture",
      "Automatic data extraction",
      "Vendor matching and coding",
    ],
    mockup: "approve",
  },
  {
    category: "Approval Workflows",
    title: "Route approvals with full control",
    description:
      "Set up multi-level approval chains based on amount, department, or vendor. Approvers review and sign off from anywhere with a complete audit trail.",
    items: [
      "Multi-level approval chains",
      "Threshold-based routing",
      "Mobile-friendly approvals",
    ],
    mockup: "approval-workflow",
  },
  {
    category: "Accounting Sync",
    title: "Sync to your accounting software",
    description:
      "Approved invoices sync directly to your ERP or general ledger. No more double entry — Vergo keeps your books up to date automatically.",
    items: [
      "Direct ERP and GL sync",
      "Automatic journal entries",
      "Real-time reconciliation",
    ],
    mockup: "connect",
  },
];

export default function APAutomationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
            AP Automation
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-5xl mx-auto tracking-tight">
            Accounts payable on autopilot
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            From invoice capture to syncing with your accounting software, automate your entire AP workflow with smart routing, approvals, and full audit trails.
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
                    {section.mockup === "approve" && <ApproveMockup />}
                    {section.mockup === "connect" && <ConnectMockup />}
                    {section.mockup === "approval-workflow" && <ApprovalWorkflowMockup />}
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
            Stop chasing invoices
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            See how Vergo automates your accounts payable from end to end.
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
