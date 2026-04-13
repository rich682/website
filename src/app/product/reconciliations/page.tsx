import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

import ReconciliationMockup from "@/components/animations/ReconciliationMockup";
import ResponseTrackingMockup from "@/components/animations/ResponseTrackingMockup";
import DocumentStorageMockup from "@/components/animations/DocumentStorageMockup";

export const metadata: Metadata = {
  title: "Reconciliations | Vergo",
  description:
    "AI-powered reconciliations for any data source. Match PDFs, spreadsheets, and databases against each other — in any combination. Flag exceptions instantly and close with confidence.",
};

const features = [
  {
    category: "INGEST",
    title: "Reconcile PDFs, spreadsheets, and databases — in any combination",
    description:
      "Vergo's AI reads and extracts data from unstructured PDFs, Excel files, CSVs, and database exports. Match any source against any other — PDF vs PDF, Excel vs Database, PDF vs Excel. No manual data entry or reformatting required.",
    items: [
      {
        label: "PDF extraction",
        detail:
          "AI reads invoices, statements, and reports in any PDF format — no templates or manual mapping needed.",
      },
      {
        label: "Multi-format support",
        detail:
          "Ingest Excel spreadsheets, CSVs, database exports, and PDFs all in the same reconciliation.",
      },
      {
        label: "Any-vs-any matching",
        detail:
          "Reconcile any data source against any other. PDF vs database, spreadsheet vs spreadsheet — any combination works.",
      },
    ],
    mockup: "reconciliation",
  },
  {
    category: "MATCH",
    title: "AI matches messy, unstructured data automatically",
    description:
      "Vergo's AI understands context and matches records even when formats differ completely between sources. Fuzzy matching handles naming differences, date formats, and rounding — so your team only reviews the exceptions, not every line.",
    items: [
      {
        label: "Intelligent AI matching",
        detail:
          "AI interprets unstructured data and finds the right matches across sources, even when formats are completely different.",
      },
      {
        label: "Fuzzy and contextual matching",
        detail:
          "Handles naming variations, date format differences, rounding discrepancies, and partial matches automatically.",
      },
      {
        label: "Exception-only review",
        detail:
          "Matched items are cleared automatically — your team only spends time on genuine exceptions.",
      },
    ],
    mockup: "tracking",
  },
  {
    category: "RESOLVE",
    title: "Flag exceptions and close with audit-ready records",
    description:
      "When records don't match, Vergo flags the exception with the variance amount and source detail. Investigate, add notes, and resolve each exception with a full audit trail. Roll forward your reconciliation setup each period so you never start from scratch.",
    items: [
      {
        label: "Exception dashboard",
        detail:
          "See every unmatched item across all reconciliations in one view, sorted by variance amount.",
      },
      {
        label: "Resolution workflow",
        detail:
          "Assign exceptions to team members, add notes, and track resolution status through close.",
      },
      {
        label: "Audit-ready records",
        detail:
          "Complete history of every match, exception, resolution, and sign-off for auditor review.",
      },
    ],
    mockup: "documents",
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

export default function ReconciliationsPage() {
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
            Reconciliations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            AI-powered reconciliations{" "}
            <span className="block text-[#6366F1]">for any data source</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed">
            Match PDFs, spreadsheets, and databases against each other — in any
            combination. AI handles the messy, unstructured data so your team
            only reviews the exceptions.
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
                  {section.mockup === "reconciliation" && (
                    <ReconciliationMockup />
                  )}
                  {section.mockup === "tracking" && <ResponseTrackingMockup />}
                  {section.mockup === "documents" && <DocumentStorageMockup />}
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
            Stop manually matching data across sources
          </h2>
          <p className="mt-3 text-[#555]">
            See how Vergo&apos;s AI reconciles PDFs, spreadsheets, and databases
            automatically.
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
            What construction accounting teams are saying
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
            Close with confidence every month
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            See how Vergo&apos;s AI reconciles any data source against any other —
            so your team focuses on exceptions, not data entry.
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
