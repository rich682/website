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
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm text-[#999] hover:text-[#111] transition-colors mb-10"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All integrations
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#999]">
                  <IntegrationIcon
                    icon={integration.icon}
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] tracking-tight">
                    {integration.name}
                  </h1>
                </div>
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#6366F1] mb-4">
                {integration.category}
              </p>
              <p className="text-lg text-[#555] leading-relaxed mb-10">
                {integration.description}
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F27A2A] text-white font-semibold hover:bg-[#E06A1A] transition-colors text-sm"
              >
                Book a Demo
              </Link>
            </div>

            {/* Feature card */}
            <div className="rounded-xl bg-[#F7F7F8] border border-[#E5E7EB] p-8 sm:p-10">
              <h2 className="text-xs font-medium uppercase tracking-widest text-[#999] mb-6">
                Key capabilities
              </h2>
              <ul className="space-y-5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
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
                    <span className="text-[#111]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] text-center mb-16 tracking-tight">
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
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-[#E5E7EB] text-[#999] text-xs font-medium mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-semibold text-[#111] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to connect{" "}
            <span className="text-[#6366F1]">{integration.name}</span>?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            See how Vergo works with {integration.name} to streamline your
            accounting workflows.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-[#F59E42] text-white font-medium hover:bg-[#E8913A] transition-colors duration-300"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
