import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

import CoordinationMockup from "@/components/animations/CoordinationMockup";
import RequestTrackingMockup from "@/components/animations/RequestTrackingMockup";
import CardConnectionsMockup from "@/components/animations/CardConnectionsMockup";
import InvoiceCaptureMockup from "@/components/animations/InvoiceCaptureMockup";
import JobCostReportMockup from "@/components/animations/JobCostReportMockup";

export const metadata: Metadata = {
  title: "Subcontractors | Vergo",
  description:
    "Month-end close automation for subcontractor accounting teams. Track job costs, collect field data, manage expenses, process invoices, and close the books faster.",
};

const features = [
  {
    category: "CLOSE MANAGEMENT",
    title: "Track job costs across every active project",
    description:
      "Subcontractors work on multiple projects for multiple GCs simultaneously. Tracking labor, materials, and equipment costs by job is critical but often scattered across spreadsheets and ERPs. Vergo gives you a single close checklist across all projects.",
    items: [
      "Month-end checklists with job cost tasks",
      "Track progress across every active project",
      "Recurring templates that roll forward each month",
    ],
    mockup: "coordination",
  },
  {
    category: "FIELD REQUESTS",
    title: "Collect timesheets and cost data from field crews",
    description:
      "Field foremen and crews are slow to submit timesheets, equipment logs, and material receipts. Without this data, you can't allocate costs to the right jobs. Vergo sends automated requests and tracks every response.",
    items: [
      "Automated timesheet and receipt requests",
      "Track who has responded and who hasn't",
      "Escalation rules for overdue submissions",
    ],
    mockup: "requestTracking",
  },
  {
    category: "EXPENSE MANAGEMENT",
    title: "Manage field expenses and job cost allocation",
    description:
      "Fuel cards, supply runs, equipment rentals — field expenses pile up and need to be allocated to the right job and cost code before month-end. Vergo connects your cards, matches receipts, and allocates automatically.",
    items: [
      "Connect corporate and fuel cards",
      "Automatic receipt matching",
      "Job and cost code allocation",
    ],
    mockup: "cardConnections",
  },
  {
    category: "AP AUTOMATION",
    title: "Process vendor invoices and track payments",
    description:
      "Material suppliers, equipment rental companies, and other vendors send invoices that need approval and posting to the right job. Vergo captures them, routes approvals, and posts directly to your job costs.",
    items: [
      "Automatic invoice capture and job coding",
      "Approval routing by amount and vendor",
      "Direct posting to job costs in your ERP",
    ],
    mockup: "invoiceCapture",
  },
  {
    category: "REPORTING",
    title: "Generate job cost reports and track margins",
    description:
      "You need to know which projects are profitable and which are bleeding margin — before it's too late. Vergo builds job cost reports, tracks variances by cost code, and surfaces margin issues with AI.",
    items: [
      "Job cost reports by project and cost code",
      "Variance analysis across active projects",
      "AI-powered margin and profit fade detection",
    ],
    mockup: "jobCostReport",
  },
];

export default function SubcontractorsPage() {
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
            SUBCONTRACTORS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            Month-end close automation{" "}
            <span className="block text-[#6366F1]">for Subcontractors</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            Your accounting team juggles multiple GC relationships, tracks costs
            across active projects, manages field expenses, and needs to close
            the books on time. Vergo automates the work so you can focus on
            growing your business.
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
                  {section.mockup === "coordination" && <CoordinationMockup />}
                  {section.mockup === "requestTracking" && (
                    <RequestTrackingMockup />
                  )}
                  {section.mockup === "cardConnections" && (
                    <CardConnectionsMockup />
                  )}
                  {section.mockup === "invoiceCapture" && (
                    <InvoiceCaptureMockup />
                  )}
                  {section.mockup === "jobCostReport" && (
                    <JobCostReportMockup />
                  )}
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
            Built for sub accounting teams
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Book a demo and see how Vergo automates month-end close for
            subcontractors.
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
