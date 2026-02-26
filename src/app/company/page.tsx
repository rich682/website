import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | Vergo",
  description:
    "Meet the team behind Vergo. We're building the operating system for accounting teams.",
};

const founders = [
  {
    name: "Placeholder Name",
    title: "Co-Founder & CEO",
    bio: "Previously led finance operations at a high-growth startup. Experienced the pain of manual close processes firsthand.",
  },
  {
    name: "Placeholder Name",
    title: "Co-Founder & CTO",
    bio: "Former engineering lead with deep expertise in AI/ML and enterprise SaaS platforms.",
  },
  {
    name: "Placeholder Name",
    title: "Co-Founder & CPO",
    bio: "Product leader with a track record of building tools that finance teams love to use.",
  },
  {
    name: "Placeholder Name",
    title: "Co-Founder & COO",
    bio: "Operations expert who has scaled teams and processes at multiple venture-backed companies.",
  },
];

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
          <div className="max-w-3xl">
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

      {/* Founders */}
      <section className="section-padding border-t border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-foreground-muted mb-3 block">
              Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight">
              The right team to build this
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((founder, idx) => (
              <div key={idx} className="card p-6">
                {/* Avatar placeholder */}
                <div className="w-full aspect-square rounded-lg bg-background-tertiary mb-5 flex items-center justify-center">
                  <span className="text-foreground-muted text-xs">Photo</span>
                </div>
                <h3 className="font-medium text-foreground">{founder.name}</h3>
                <p className="text-sm text-foreground-muted mb-3">{founder.title}</p>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  {founder.bio}
                </p>
                <div className="mt-5 flex gap-3">
                  <a href="#" className="text-foreground-muted hover:text-foreground transition-colors duration-300" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
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
