import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare | Vergo",
  description:
    "See how Vergo compares to Excel, Monday, Asana, FloQast, and BlackLine. The only platform combining close management, AI agents, AP and expense automation.",
};

const competitors = ["Vergo", "Excel", "Monday", "Asana", "FloQast", "BlackLine"];

const features: { name: string; supported: string[] }[] = [
  {
    name: "Accounting Integrations",
    supported: ["Vergo", "FloQast", "BlackLine"],
  },
  {
    name: "Close Management",
    supported: ["Vergo", "Monday", "Asana", "FloQast", "BlackLine"],
  },
  {
    name: "AI Agents",
    supported: ["Vergo", "FloQast", "BlackLine"],
  },
  {
    name: "Expense Management",
    supported: ["Vergo"],
  },
  {
    name: "AP Automation",
    supported: ["Vergo"],
  },
  {
    name: "Dedicated Account Manager",
    supported: ["Vergo"],
  },
];

function CheckIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-highlight-light flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function DashIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-background-tertiary flex items-center justify-center">
      <svg className="w-3 h-3 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
      </svg>
    </div>
  );
}

export default function ComparePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-4">
            Why Vergo
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-5xl mx-auto tracking-tight">
            The only platform that offers close management, AP Automation, Expense Management & AI Agents
          </h1>
          <p className="mt-8 text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Stop stitching together point solutions. Vergo replaces your spreadsheets, project management tools, and legacy close software with one unified platform.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          {/* Desktop table */}
          <div className="hidden md:block rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-background-secondary">
                  <th className="text-left text-xs font-medium uppercase tracking-widest text-foreground-muted py-4 px-6 w-[220px]">
                    Feature
                  </th>
                  {competitors.map((c) => (
                    <th
                      key={c}
                      className={`text-center text-sm font-medium py-4 px-4 ${
                        c === "Vergo"
                          ? "text-foreground bg-highlight-light"
                          : "text-foreground-secondary"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr
                    key={feature.name}
                    className={idx % 2 === 0 ? "bg-background" : "bg-background-secondary/50"}
                  >
                    <td className="text-sm font-medium text-foreground py-4 px-6">
                      {feature.name}
                    </td>
                    {competitors.map((c) => (
                      <td
                        key={c}
                        className={`text-center py-4 px-4 ${
                          c === "Vergo" ? "bg-highlight-light/50" : ""
                        }`}
                      >
                        <div className="flex justify-center">
                          {feature.supported.includes(c) ? <CheckIcon /> : <DashIcon />}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-6">
            {features.map((feature) => (
              <div key={feature.name} className="card p-5">
                <h3 className="text-sm font-medium text-foreground mb-4">
                  {feature.name}
                </h3>
                <div className="space-y-3">
                  {competitors.map((c) => (
                    <div key={c} className="flex items-center justify-between">
                      <span
                        className={`text-sm ${
                          c === "Vergo" ? "font-medium text-foreground" : "text-foreground-secondary"
                        }`}
                      >
                        {c}
                      </span>
                      {feature.supported.includes(c) ? <CheckIcon /> : <DashIcon />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 tracking-tight">
            Ready to consolidate your stack?
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            See how Vergo replaces multiple tools with one platform built for accounting teams.
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
