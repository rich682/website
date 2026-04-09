import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

import RequestTrackingMockup from "@/components/animations/RequestTrackingMockup";
import AutomatedFollowUpMockup from "@/components/animations/AutomatedFollowUpMockup";
import DocumentStorageMockup from "@/components/animations/DocumentStorageMockup";

export const metadata: Metadata = {
  title: "Vendor Requests | Vergo",
  description:
    "Track vendor invoices, lien waivers, insurance certificates, and compliance documents. Automate follow-ups and keep every vendor request organized.",
};

const features = [
  {
    category: "COLLECT",
    title:
      "Request invoices, lien waivers, and compliance docs from any vendor",
    description:
      "Send document requests to subcontractors and vendors in bulk. Collect the invoices, lien waivers, insurance certificates, W-9s, and certified payroll you need to verify billing, release payments, and close the books — all tracked in one place.",
    items: [
      {
        label: "Bulk vendor requests",
        detail:
          "Send requests to dozens of vendors at once for invoices or compliance documents.",
      },
      {
        label: "Lien waiver tracking",
        detail:
          "Track conditional and unconditional lien waivers by project and payment.",
      },
      {
        label: "Insurance & compliance",
        detail:
          "Collect and monitor insurance certificates, W-9s, and other compliance documents.",
      },
    ],
    mockup: "tracking",
  },
  {
    category: "AUTOMATE",
    title: "Automatic reminders so you never have to chase a vendor again",
    description:
      "Set up automated follow-up sequences for outstanding documents. Missing vendor docs are the number one reason construction accounting teams miss close deadlines — Vergo keeps reminding vendors on your schedule until they respond.",
    items: [
      {
        label: "Scheduled reminders",
        detail:
          "Automatic email reminders on your timeline until documents are received.",
      },
      {
        label: "Close-blocking visibility",
        detail:
          "See which vendors have responded, which documents are overdue, and which missing items are blocking your close.",
      },
      {
        label: "Escalation rules",
        detail:
          "Automatically escalate overdue requests to project managers or operations.",
      },
    ],
    mockup: "workflow",
  },
  {
    category: "ORGANIZE",
    title:
      "Every vendor document organized by project, with full audit trails",
    description:
      "All vendor documents are automatically filed by project and vendor. Review, approve, and maintain a complete audit trail — so when it's time to close, every document is accounted for.",
    items: [
      {
        label: "Project-based filing",
        detail:
          "Documents auto-organize by project, vendor, and document type.",
      },
      {
        label: "Approval workflows",
        detail:
          "Route vendor submissions through your review and approval process.",
      },
      {
        label: "Audit trail",
        detail:
          "Complete history of every request, reminder, and submission for compliance.",
      },
    ],
    mockup: "approve",
  },
];

export default function VendorRequestsPage() {
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
            VENDOR REQUESTS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            Automate vendor{" "}
            <span className="block text-[#6366F1]">
              document collection
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            Missing lien waivers, insurance certificates, and W-9s block your
            ability to verify subcontractor billing, release payments, and close
            the books. Automate the collection so these documents never hold up
            your month-end close.
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
                      <div key={item.label} className="flex items-start gap-3">
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
                          <span className="text-sm font-semibold text-[#111]">
                            {item.label}
                          </span>
                          <span className="text-sm text-[#555]">
                            {" "}
                            — {item.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <ScrollReveal
                  className={`rounded-xl bg-[#F7F7F8] border border-[#E5E7EB] aspect-[4/3] overflow-hidden ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {section.mockup === "tracking" && <RequestTrackingMockup />}
                  {section.mockup === "workflow" && <AutomatedFollowUpMockup />}
                  {section.mockup === "approve" && <DocumentStorageMockup />}
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
            Automate vendor document collection
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Book a demo and see how Vergo eliminates the chase.
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
