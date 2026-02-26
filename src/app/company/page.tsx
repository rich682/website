import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | Vergo",
  description:
    "Meet the team behind Vergo. We're building the operating system for accounting teams.",
};

const investors = [
  "Investor 1",
  "Investor 2",
  "Investor 3",
];

export default function CompanyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-[1.1] tracking-tight">
              Designed for teams that intend to succeed
            </h1>
            <p className="mt-8 text-lg text-foreground-secondary leading-relaxed">
              Our founding team has experienced the pain of manual book closes, disconnected tools, and endless follow-up emails. We built Vergo to fix it.
            </p>
          </div>

          {/* Hero image placeholder */}
          <div className="mt-16 rounded-xl bg-background-secondary border border-border aspect-[2/1] flex items-center justify-center">
            <span className="text-foreground-muted text-sm">Team photo</span>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground leading-snug mb-6 tracking-tight">
                World-class accounting teams deserve world-class tools
              </h2>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                For too long, accounting teams have been stuck with spreadsheets, emails, and legacy software that wasn&apos;t designed for how they actually work. The book close is one of the most critical processes in any business, yet it&apos;s still powered by manual effort and fragmented tools.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                We built Vergo so accounting teams can focus on analysis and strategy instead of chasing documents and reconciling spreadsheets. Our mission is to make every book close effortless.
              </p>
            </div>

            {/* Image placeholder */}
            <div className="rounded-xl bg-background-secondary border border-border aspect-square flex items-center justify-center">
              <span className="text-foreground-muted text-sm">Team discussion photo</span>
            </div>
          </div>
        </div>
      </section>


      {/* Investors */}
      <section className="section-padding border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-16 tracking-tight">
            Backed by top-tier investors
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {investors.map((investor) => (
              <div
                key={investor}
                className="w-40 h-16 rounded-lg bg-background-secondary border border-border flex items-center justify-center"
              >
                <span className="text-sm text-foreground-muted">{investor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed italic tracking-tight">
            &ldquo;AI is changing how accounting teams operate. Vergo will chart the path.&rdquo;
          </blockquote>
          <p className="mt-8 text-sm font-medium text-foreground">Founder Name</p>
          <p className="text-xs text-foreground-muted mt-0.5">Co-Founder &amp; CEO</p>
        </div>
      </section>

      {/* CTA - Careers */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            Join our team
          </h2>
          <p className="text-foreground-secondary mb-10 max-w-lg mx-auto leading-relaxed">
            We&apos;re building the future of accounting software. If that excites you, we&apos;d love to hear from you.
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            See open roles
          </Link>
        </div>
      </section>
    </main>
  );
}
