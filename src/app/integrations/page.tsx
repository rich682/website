import type { Metadata } from "next";
import Link from "next/link";
import { integrations } from "@/lib/integrations";
import IntegrationIcon from "@/components/IntegrationIcon";

export const metadata: Metadata = {
  title: "Integrations | Vergo",
  description:
    "Connect your accounting software to Vergo. Supported integrations include QuickBooks, Xero, NetSuite, Sage Intacct, and more.",
};

export default function IntegrationsPage() {
  return (
    <main>
      {/* Hero + Integration Grid */}
      <section className="pt-36 pb-16 lg:pt-48 lg:pb-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16 lg:mb-20">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
            Integrate once
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] max-w-4xl mx-auto tracking-tight">
            Supported accounting platforms
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Connect your ERP, general ledger, or upload spreadsheets directly. Vergo works with the tools your team already uses.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((integration) => (
              <Link
                key={integration.slug}
                href={`/integrations/${integration.slug}`}
                className="card flex items-center gap-4 p-5 group shadow-sm"
              >
                <div className="flex-shrink-0 text-foreground-muted">
                  <IntegrationIcon icon={integration.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-foreground">
                    {integration.name}
                  </span>
                </div>
                <svg
                  className="w-4 h-4 text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 tracking-tight">
            Don&apos;t see your platform?
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            We&apos;re adding new integrations regularly. Get in touch and we&apos;ll prioritize yours.
          </p>
          <a
            href="/demo"
            className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-black font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            Request demo
          </a>
        </div>
      </section>
    </main>
  );
}
