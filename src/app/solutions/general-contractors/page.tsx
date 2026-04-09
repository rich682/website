import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

import RequestTrackingMockup from "@/components/animations/RequestTrackingMockup";
import ResponseTrackingMockup from "@/components/animations/ResponseTrackingMockup";
import JobCostReportMockup from "@/components/animations/JobCostReportMockup";
import InvoiceCaptureMockup from "@/components/animations/InvoiceCaptureMockup";
import AIAnalyzeMockup from "@/components/animations/AIAnalyzeMockup";

export const metadata: Metadata = {
  title: "General Contractors | Vergo",
  description:
    "Month-end close automation for GC accounting teams. Collect job cost data from PMs, track lien waivers across subs, reconcile costs across your portfolio, and close faster.",
};

const features = [
  {
    category: "FIELD REQUESTS",
    title: "Collect job cost data from every PM and superintendent",
    description:
      "GCs depend on project managers across multiple job sites to submit cost updates, change orders, and timesheets — and they're always late. Vergo sends automated requests and follow-ups so your team stops chasing.",
    items: [
      "Automated requests to PMs and supers",
      "Change order and cost update collection",
      "Escalation rules when responses are overdue",
    ],
    mockup: "requestTracking",
  },
  {
    category: "SUBCONTRACTOR COMPLIANCE",
    title: "Track lien waivers and compliance across all your subs",
    description:
      "Before releasing payment, you need lien waivers, insurance certificates, and compliance docs from every sub on every project. Missing one blocks the entire payment run. Vergo collects them automatically.",
    items: [
      "Bulk lien waiver requests by project",
      "Insurance certificate expiration monitoring",
      "Payment hold flags for missing documents",
    ],
    mockup: "responseTracking",
  },
  {
    category: "JOB COST REPORTING",
    title: "Reconcile job costs across your entire portfolio",
    description:
      "With dozens of active projects, reconciling job costs, tracking over/under billing, and generating WIP schedules is a massive monthly effort. Vergo builds your reports automatically from your ERP data.",
    items: [
      "Job cost reports by project and cost code",
      "Automated WIP schedule generation",
      "Over/under billing variance analysis",
    ],
    mockup: "jobCostReport",
  },
  {
    category: "AP AUTOMATION",
    title: "Automate subcontractor invoice processing",
    description:
      "GC accounting teams process hundreds of sub invoices per month. Coding them to the right job, routing approvals, and syncing to the ERP is manual and error-prone. Vergo captures, codes, and routes them automatically.",
    items: [
      "Automatic invoice capture and job coding",
      "Multi-level approval routing by amount",
      "Direct posting to job costs in your ERP",
    ],
    mockup: "invoiceCapture",
  },
  {
    category: "AI ANALYSIS",
    title: "Close the books faster with AI",
    description:
      "With so many moving parts, GC controllers spend days assembling data before they can even start closing. Vergo AI surfaces profit fade, cost overruns, and margin issues proactively — so you close with confidence.",
    items: [
      "Ask questions about project data in plain English",
      "Profit fade and margin trend detection",
      "Cost-to-complete estimates across all projects",
    ],
    mockup: "aiAnalyze",
  },
];

export default function GeneralContractorsPage() {
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
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-[#6366F1] mb-4">
            GENERAL CONTRACTORS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            Month-end close automation{" "}
            <span className="block text-[#6366F1]">
              for General Contractors
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            Your accounting team coordinates across dozens of subcontractors,
            multiple active projects, and a constant stream of change orders.
            Vergo automates the collection, reconciliation, and reporting so you
            can close the books on time.
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
              See the platform
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

      {/* ============ FEATURE SECTIONS ============ */}
      <div className="divide-y divide-[#E5E7EB]">
        {features.map((section, idx) => (
          <section key={section.category} className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-[#6366F1] mb-4">
                    {section.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111] leading-snug mb-4">
                    {section.title}
                  </h3>
                  <p className="text-[#555] leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
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
                        <span className="text-sm font-medium text-[#333]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <ScrollReveal
                  className={`rounded-xl bg-[#F7F7F8] border border-[#E5E7EB] aspect-[4/3] overflow-hidden ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {section.mockup === "requestTracking" && (
                    <RequestTrackingMockup />
                  )}
                  {section.mockup === "responseTracking" && (
                    <ResponseTrackingMockup />
                  )}
                  {section.mockup === "jobCostReport" && (
                    <JobCostReportMockup />
                  )}
                  {section.mockup === "invoiceCapture" && (
                    <InvoiceCaptureMockup />
                  )}
                  {section.mockup === "aiAnalyze" && <AIAnalyzeMockup />}
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ============ DARK FINAL CTA ============ */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built for GC accounting teams
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Book a demo and see how Vergo automates month-end close for general
            contractors.
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
