import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

import RequestTrackingMockup from "@/components/animations/RequestTrackingMockup";
import ResponseTrackingMockup from "@/components/animations/ResponseTrackingMockup";
import DocumentStorageMockup from "@/components/animations/DocumentStorageMockup";

export const metadata: Metadata = {
  title: "Subcontractor Requests | Vergo",
  description:
    "Automate lien waiver collection, insurance certificate tracking, and compliance document requests from subcontractors. Never chase a sub again.",
};

const features = [
  {
    category: "REQUEST",
    title:
      "Send lien waiver and compliance requests to every sub in one click",
    description:
      "Select your subcontractors, choose the documents you need — lien waivers, insurance certificates, W-9s, certified payroll — and send requests in bulk. Each sub gets a simple link to upload their documents directly.",
    items: [
      {
        label: "Bulk requests",
        detail:
          "Send requests to all subs on a project at once — lien waivers, COIs, W-9s, and more.",
      },
      {
        label: "Lien waiver requests",
        detail:
          "Request conditional or unconditional lien waivers tied to specific payments or pay applications.",
      },
      {
        label: "Insurance certificate tracking",
        detail:
          "Request updated COIs and get notified when certificates are expiring or missing.",
      },
    ],
    mockup: "tracking",
  },
  {
    category: "TRACK",
    title: "See exactly which subs have responded — and who to chase",
    description:
      "Every request is tracked in real time. See which subcontractors have submitted their documents, which are overdue, and which are blocking your close or payment run.",
    items: [
      {
        label: "Real-time response tracking",
        detail:
          "Dashboard shows submitted, pending, and overdue documents by sub and project.",
      },
      {
        label: "Automated reminders",
        detail:
          "Subs get automatic email reminders on your schedule until they respond — no manual follow-up.",
      },
      {
        label: "Payment hold flags",
        detail:
          "Flag subcontractors with missing lien waivers or expired insurance before payments go out.",
      },
    ],
    mockup: "response",
  },
  {
    category: "ORGANIZE",
    title:
      "Every document filed by sub and project, ready for audit",
    description:
      "Submitted documents are automatically organized by subcontractor, project, and document type. Maintain a complete compliance record with full audit trails.",
    items: [
      {
        label: "Auto-filing by project and sub",
        detail:
          "Documents land in the right folder automatically — no manual sorting or renaming.",
      },
      {
        label: "Expiration monitoring",
        detail:
          "Get alerts when insurance certificates or compliance documents are approaching expiration.",
      },
      {
        label: "Complete audit trail",
        detail:
          "Every request, reminder, submission, and approval is logged for compliance and audit readiness.",
      },
    ],
    mockup: "approve",
  },
];

export default function SubcontractorRequestsPage() {
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
            Subcontractor Requests
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            Stop chasing subs for{" "}
            <span className="block text-[#6366F1]">lien waivers and COIs</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            Automate lien waiver collection, insurance certificate tracking, and
            compliance document requests. Subs upload directly — your team
            tracks everything in one place.
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
                  {section.mockup === "response" && <ResponseTrackingMockup />}
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
            Automate subcontractor compliance
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Book a demo and see how Vergo collects lien waivers, COIs, and
            compliance docs from your subs automatically.
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
