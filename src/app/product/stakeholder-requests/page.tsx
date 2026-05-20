import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

import RequestTrackingMockup from "@/components/animations/RequestTrackingMockup";
import AutomatedFollowUpMockup from "@/components/animations/AutomatedFollowUpMockup";
import DocumentStorageMockup from "@/components/animations/DocumentStorageMockup";

export const metadata: Metadata = {
  title: "Stakeholder Requests | Vergo",
  description:
    "Automate document requests to internal teams, vendors, and clients. Collect approvals, invoices, and compliance docs in one place.",
};

const stakeholderTypes = [
  {
    title: "Internal Teams",
    description:
      "Collect budget updates, approvals, and supporting documents from department heads and team members.",
  },
  {
    title: "Vendors",
    description:
      "Request invoices, W-9s, insurance certificates, and compliance documents from every vendor.",
  },
  {
    title: "Clients",
    description:
      "Gather billing approvals, supporting documents, and signed agreements from clients in one place.",
  },
];

const features = [
  {
    category: "SEND",
    title: "Send document requests to any stakeholder in one click",
    description:
      "Select your recipients — internal teams, vendors, or clients — choose the documents you need, and send requests in bulk. Each stakeholder gets a simple link to upload their documents directly.",
    items: [
      {
        label: "Bulk requests",
        detail:
          "Send requests to dozens of stakeholders at once for invoices, COIs, approvals, and more.",
      },
      {
        label: "Customizable templates",
        detail:
          "Create request templates tailored to each stakeholder type and workflow.",
      },
      {
        label: "Simple upload portal",
        detail:
          "Stakeholders get a branded link to upload documents — no account needed.",
      },
    ],
    mockup: "tracking",
  },
  {
    category: "TRACK",
    title: "See exactly who has responded — and who to chase",
    description:
      "Every request is tracked in real time. See which stakeholders have submitted their documents, which are overdue, and which missing items are blocking your close or payment run.",
    items: [
      {
        label: "Real-time response tracking",
        detail:
          "Dashboard shows submitted, pending, and overdue documents across all stakeholders and projects.",
      },
      {
        label: "Automated reminders",
        detail:
          "Stakeholders get automatic email reminders on your schedule until they respond — no manual follow-up.",
      },
      {
        label: "Close-blocking visibility",
        detail:
          "Flag missing documents, expired insurance, or overdue invoices before they hold up your close.",
      },
    ],
    mockup: "workflow",
  },
  {
    category: "ORGANIZE",
    title: "Every document filed by stakeholder and type, ready for audit",
    description:
      "Submitted documents are automatically organized by stakeholder and document type. Maintain a complete compliance record with full audit trails — so when it's time to close, every document is accounted for.",
    items: [
      {
        label: "Auto-filing",
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

export default function StakeholderRequestsPage() {
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
            Stakeholder Requests
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            Automate requests to{" "}
            <span className="block text-[#6366F1]">every stakeholder</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            Collect approvals, invoices, insurance certs, and compliance docs
            from internal teams, vendors, and clients — all tracked in one
            place.
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

      {/* ============ STAKEHOLDER TYPES ============ */}
      <section className="py-12 lg:py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#111] tracking-tight mb-10">
            One tool for every stakeholder
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stakeholderTypes.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-6"
              >
                <h3 className="text-base font-semibold text-[#111] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
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

      {/* ============ MID-PAGE CTA ============ */}
      <section className="py-12 lg:py-16 bg-[#EEF2FF] border-y border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111] tracking-tight">
            Stop chasing stakeholders. Get full visibility.
          </h2>
          <p className="mt-3 text-[#555]">
            See how Vergo automates document collection from stakeholders and
            vendors.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center mt-6 px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
          >
            Book a Demo
          </Link>
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

      {/* ============ DARK FINAL CTA ============ */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Manage every stakeholder request with confidence
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            See how Vergo helps you collect and track documents from
            stakeholders and vendors throughout your close.
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
