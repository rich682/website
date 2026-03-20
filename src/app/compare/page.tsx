import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare | Vergo",
  description:
    "See how Vergo compares to Excel, Monday, Asana, FloQast, and BlackLine for close management, AP automation, and expense management.",
};

const competitors = ["Vergo", "Excel", "Monday", "Asana", "FloQast", "BlackLine"];

const features: { name: string; supported: string[] }[] = [
  { name: "Accounting Integrations", supported: ["Vergo", "FloQast", "BlackLine"] },
  { name: "Close Collaboration", supported: ["Vergo", "Monday", "Asana", "FloQast", "BlackLine"] },
  { name: "AI Agents", supported: ["Vergo", "FloQast", "BlackLine"] },
  { name: "AI Analysis", supported: ["Vergo", "FloQast", "BlackLine"] },
  { name: "Custom Reports", supported: ["Vergo", "FloQast", "BlackLine"] },
  { name: "Expense Management", supported: ["Vergo"] },
  { name: "AP Automation", supported: ["Vergo"] },
  { name: "Dedicated Account Manager", supported: ["Vergo"] },
];

function CheckIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-[rgba(99,102,241,0.08)] flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function DashIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-[#EFEFEF] flex items-center justify-center">
      <svg className="w-3 h-3 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
      </svg>
    </div>
  );
}

export default function ComparePage() {
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
            Why Vergo
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.15] tracking-tight">
            The only platform that offers{" "}
            <span className="block text-[#6366F1]">
              everything accounting teams need to close
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#666] max-w-2xl mx-auto leading-relaxed">
            Stop stitching together tools that weren&apos;t built for the close.
            Vergo is the only dedicated month end close platform that also
            includes AP automation, expense management, and AI agents — all in
            one place.
          </p>
        </div>
      </section>

      {/* ============ COMPARISON TABLE (DESKTOP) ============ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Desktop table */}
          <div className="hidden lg:block rounded-xl border border-[#E5E7EB] bg-white shadow-sm overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-7 bg-[#F7F7F8]">
              <div className="px-6 py-4 border-r border-[#E5E7EB]">
                <span className="text-sm font-semibold text-[#666]">Feature</span>
              </div>
              {competitors.map((competitor) => (
                <div
                  key={competitor}
                  className={`px-4 py-4 text-center border-r border-[#E5E7EB] last:border-r-0 ${
                    competitor === "Vergo"
                      ? "bg-[rgba(99,102,241,0.08)]"
                      : ""
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      competitor === "Vergo" ? "text-[#111]" : "text-[#666]"
                    }`}
                  >
                    {competitor}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {features.map((feature, idx) => (
              <div
                key={feature.name}
                className={`grid grid-cols-7 border-t border-[#E5E7EB] ${
                  idx % 2 === 1 ? "bg-[#F7F7F8]/50" : "bg-white"
                }`}
              >
                <div className="px-6 py-5 border-r border-[#E5E7EB] flex items-center">
                  <span className="text-sm font-medium text-[#111]">
                    {feature.name}
                  </span>
                </div>
                {competitors.map((competitor) => (
                  <div
                    key={competitor}
                    className={`px-4 py-5 flex items-center justify-center border-r border-[#E5E7EB] last:border-r-0 ${
                      competitor === "Vergo" ? "bg-[rgba(99,102,241,0.04)]" : ""
                    }`}
                  >
                    {feature.supported.includes(competitor) ? (
                      <CheckIcon />
                    ) : (
                      <DashIcon />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* ============ MOBILE CARDS ============ */}
          <div className="lg:hidden space-y-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm p-5"
              >
                <h3 className="text-sm font-bold text-[#111] mb-4">
                  {feature.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {competitors.map((competitor) => {
                    const isSupported = feature.supported.includes(competitor);
                    return (
                      <div
                        key={competitor}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2.5 ${
                          competitor === "Vergo"
                            ? "bg-[rgba(99,102,241,0.08)]"
                            : "bg-[#F7F7F8]"
                        }`}
                      >
                        {isSupported ? (
                          <div className="w-4 h-4 rounded-full bg-[rgba(99,102,241,0.08)] flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-2.5 h-2.5 text-[#6366F1]"
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
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-[#EFEFEF] flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-2.5 h-2.5 text-[#999]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 12H6"
                              />
                            </svg>
                          </div>
                        )}
                        <span
                          className={`text-xs font-medium ${
                            competitor === "Vergo" ? "text-[#111]" : "text-[#666]"
                          }`}
                        >
                          {competitor}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to{" "}
            <span className="text-[#6366F1]">consolidate your stack</span>?
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            See how Vergo replaces the patchwork of tools your team uses today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://app.tryvergo.com/signup"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F59E42] text-white font-semibold hover:bg-[#E8913A] transition-colors text-sm"
            >
              Get Started
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
