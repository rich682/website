import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { integrations, getIntegrationBySlug } from "@/lib/integrations";
import IntegrationIcon from "@/components/IntegrationIcon";

export function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);
  if (!integration) return {};
  return {
    title: `${integration.name} Integration | Vergo`,
    description: integration.description,
  };
}

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const integration = getIntegrationBySlug(slug);
  if (!integration) notFound();

  const features =
    integration.icon === "excel"
      ? [
          "Drag-and-drop file uploads",
          "Automatic column mapping",
          "Data validation and error detection",
          "Recurring upload templates",
        ]
      : [
          "Automated data syncing",
          "Real-time account balances",
          "Transaction-level detail",
          "Secure OAuth connection",
        ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            All integrations
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-foreground-muted">
                  <IntegrationIcon icon={integration.icon} className="w-12 h-12" />
                </div>
                <div>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
                    {integration.name}
                  </h1>
                  {integration.beta && (
                    <span className="inline-flex items-center px-2 py-0.5 mt-2 rounded text-xs font-medium bg-background-tertiary text-foreground-muted border border-border">
                      Beta
                    </span>
                  )}
                </div>
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
                {integration.category}
              </p>
              <p className="text-lg text-foreground-secondary leading-relaxed mb-10">
                {integration.description}
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

            {/* Feature card */}
            <div className="rounded-xl bg-background-secondary border border-border p-8 sm:p-10">
              <h2 className="text-sm font-medium uppercase tracking-widest text-foreground-muted mb-6">
                Key capabilities
              </h2>
              <ul className="space-y-5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-highlight-light flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground text-center mb-16 tracking-tight">
            How it works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect",
                desc:
                  integration.icon === "excel"
                    ? "Upload your Excel or CSV files directly into Vergo via drag-and-drop."
                    : `Authenticate your ${integration.name} account securely with a few clicks.`,
              },
              {
                step: "02",
                title: "Sync",
                desc:
                  integration.icon === "excel"
                    ? "Vergo maps columns automatically and validates your data."
                    : "Vergo pulls your chart of accounts, transactions, and balances in real time.",
              },
              {
                step: "03",
                title: "Automate",
                desc: "Set up agents to automate reconciliations, reporting, and close tasks using your synced data.",
              },
            ].map((s) => (
              <div key={s.step}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-background border border-border text-foreground-muted text-xs font-medium mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-medium text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 tracking-tight">
            Ready to connect {integration.name}?
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            See how Vergo works with {integration.name} in a live demo.
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
