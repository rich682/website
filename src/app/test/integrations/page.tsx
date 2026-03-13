import type { Metadata } from "next";
import Link from "next/link";
import { integrations } from "@/lib/integrations";
import IntegrationIcon from "@/components/IntegrationIcon";

export const metadata: Metadata = {
  title: "Integrations | Vergo",
  description:
    "Connect your accounting software to Vergo. Supported integrations include QuickBooks, Xero, NetSuite, Sage Intacct, and more.",
};

export default function TestIntegrationsPage() {
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
      {/* Hero + Integration Grid */}
      <section className="pt-36 pb-16 lg:pt-48 lg:pb-24 bg-[#F7F7F8]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16 lg:mb-20">
          <p className="text-xs font-medium uppercase tracking-widest text-[#6366F1] mb-4">
            Integrate once
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#111] leading-[1.1] max-w-4xl mx-auto tracking-tight">
            Supported{" "}
            <span className="block text-[#6366F1]">accounting platforms</span>
          </h1>
          <p className="mt-8 text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            Connect your ERP, general ledger, or upload spreadsheets directly.
            Vergo works with the tools your team already uses.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((integration) => (
              <Link
                key={integration.slug}
                href={`/integrations/${integration.slug}`}
                className="flex items-center gap-4 p-5 group shadow-sm rounded-xl border border-[#E5E7EB] bg-white hover:border-[#D1D5DB] transition-colors"
              >
                <div className="flex-shrink-0 text-[#999]">
                  <IntegrationIcon icon={integration.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-[#111]">
                    {integration.name}
                  </span>
                </div>
                <svg
                  className="w-4 h-4 text-[#999] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Don&apos;t see your{" "}
            <span className="text-[#6366F1]">platform</span>?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            We&apos;re adding new integrations regularly. Get in touch and
            we&apos;ll prioritize yours.
          </p>
          <a
            href="/test/demo"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F59E42] text-white font-medium hover:bg-[#E8913A] transition-colors duration-300"
          >
            Request demo
          </a>
        </div>
      </section>
    </main>
  );
}
