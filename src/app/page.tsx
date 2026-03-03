import Link from "next/link";
import CoordinationMockup from "@/components/animations/CoordinationMockup";
import WhiteGloveMockup from "@/components/animations/WhiteGloveMockup";
import AIAgentsMockup from "@/components/animations/AIAgentsMockup";
import ScrollReveal from "@/components/ScrollReveal";

const featureMockups = [CoordinationMockup, AIAgentsMockup, WhiteGloveMockup];

const features = [
  {
    label: "Coordination",
    title: "Everything to coordinate month-end",
    description:
      "Tasks, reconciliations, reports, and deadlines — all managed in a single platform purpose-built for the close.",
    items: [
      {
        name: "Close Checklists",
        detail: "Create and manage every month-end task with dependencies and deadlines.",
      },
      {
        name: "Stakeholder Requests",
        detail: "Automatically request documents, sign-offs, and data from across the business.",
      },
      {
        name: "Real-Time Visibility",
        detail: "Track progress across your entire close in one unified view.",
      },
    ],
  },
  {
    label: "AI Agents",
    title: "Launch Agents, review their work",
    description:
      "You define what each agent does. You set the rules, thresholds, and schedules. Agents handle the repetitive execution — reconciliations, follow-ups, reports — and surface their work for your review before anything is finalized.",
    items: [
      {
        name: "Your account manager builds agents with you",
        detail: "Define agent tasks, set rules, and configure thresholds — you're always in the driver's seat.",
      },
      {
        name: "Agents Execute the Work",
        detail: "Reconciliations, stakeholder follow-ups, reports, and data analysis run on your schedule.",
      },
      {
        name: "You Review & Approve",
        detail: "Every agent output surfaces for your review. Nothing is finalized without your sign-off.",
      },
    ],
  },
  {
    label: "White Glove",
    title: "Dedicated Account Manager",
    description:
      "Every Vergo customer gets a dedicated account manager who handles setup, onboarding, and ongoing support so your team can focus on the close.",
    items: [
      {
        name: "Hands-On Onboarding",
        detail: "Your account manager configures Vergo to match your workflows from day one.",
      },
      {
        name: "Ongoing Support",
        detail: "A single point of contact who knows your business and your close process.",
      },
      {
        name: "Best Practice Guidance",
        detail: "Recommendations based on what works for teams like yours.",
      },
    ],
  },
];

const testimonials = [
  {
    quote: "Finally, a platform built specifically for accounting teams. The AI features are genuinely useful, not just marketing buzz.",
    name: "Emily Park",
    role: "CFO",
    company: "GrowthCo",
  },
  {
    quote: "Vergo transformed how our accounting team operates. We closed the books 5 days faster in the first month.",
    name: "Sarah Chen",
    role: "Controller",
    company: "TechCorp",
  },
  {
    quote: "The automation alone saved us 40 hours per close cycle. It's a game-changer for mid-market companies.",
    name: "Michael Torres",
    role: "Accountant",
    company: "ScaleUp Inc.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Testimonials */}
      <section className="bg-[#111111] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((t) => (
              <div key={t.name} className="text-center">
                <p className="font-serif text-2xl sm:text-3xl text-white leading-snug">
                  {t.role}
                </p>
                <p className="mt-2 text-sm text-white/40">
                  {t.name}, {t.company}
                </p>
                <p className="mt-6 text-base text-white/60 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="bg-[#111111] py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
            <div className="relative flex flex-col items-center gap-3 text-white/30">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Product video</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-[#0e0e0e] pt-16 pb-24 lg:pt-20 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] max-w-4xl mx-auto tracking-tight">
            Built for Accounting Teams who love control & efficiency
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            The AI-native platform that replaces disconnected tools and manual workflows. Built for accounting teams that move fast.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/vergo-ai/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 rounded-lg bg-white text-[#111111] font-medium hover:bg-white/90 transition-colors"
            >
              Request demo
            </a>
            <Link
              href="/product"
              className="inline-flex items-center px-8 py-3.5 rounded-lg border border-white/20 text-white/70 font-medium hover:border-white/40 hover:text-white transition-colors"
            >
              See the platform
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {features.map((feature, idx) => (
              <div key={feature.label} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-flex items-center text-xs font-medium uppercase tracking-widest text-foreground-muted mb-5">
                    {feature.label}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-foreground leading-snug mb-5">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <div className="space-y-5">
                    {feature.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-highlight-light flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-foreground-secondary mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated product mockup */}
                <ScrollReveal
                  className={`rounded-xl bg-background-secondary border border-border aspect-[4/3] overflow-hidden ${idx % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {(() => {
                    const Mockup = featureMockups[idx];
                    return <Mockup />;
                  })()}
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
            Work on higher value tasks today.
          </h2>
          <p className="text-foreground-secondary mb-10 max-w-lg mx-auto leading-relaxed">
            Join the accounting teams that are putting their book close on autopilot.
          </p>
          <a
            href="https://calendly.com/vergo-ai/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-300"
          >
            Request demo
          </a>
        </div>
      </section>
    </main>
  );
}
