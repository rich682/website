import Link from "next/link";
import CoordinationMockup from "@/components/animations/CoordinationMockup";
import ReportingMockup from "@/components/animations/ReportingMockup";
import WhiteGloveMockup from "@/components/animations/WhiteGloveMockup";
import AIAgentsMockup from "@/components/animations/AIAgentsMockup";
import ApproveMockup from "@/components/animations/ApproveMockup";
import ConnectMockup from "@/components/animations/ConnectMockup";
import ScrollReveal from "@/components/ScrollReveal";

const featureMockups = [CoordinationMockup, ReportingMockup, ApproveMockup, ConnectMockup, AIAgentsMockup, WhiteGloveMockup];

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
    href: "/product/close-management",
  },
  {
    label: "Reporting",
    title: "Build the exact reports you need",
    description:
      "Build custom reports, flag variances automatically, and let AI surface the trends that matter — so your team spends less time pulling data and more time acting on it.",
    items: [
      {
        name: "Custom Report Builder",
        detail: "Build tailored financial reports and export to PDF or Excel in one click.",
      },
      {
        name: "Automated Variance Analysis",
        detail: "Compare actuals to budgets or prior periods with threshold-based alerts.",
      },
      {
        name: "AI Insights & Trends",
        detail: "Surface anomalies, forecast trends, and generate plain-language summaries.",
      },
    ],
    href: "/product/reporting",
  },
  {
    label: "AP Automation",
    title: "Accounts payable on autopilot",
    description:
      "From invoice capture to approval routing and syncing with your accounting software — automate your entire AP workflow with full audit trails.",
    items: [
      {
        name: "Automatic Invoice Capture",
        detail: "Forward invoices by email or upload directly. Data is extracted automatically.",
      },
      {
        name: "Smart Approval Routing",
        detail: "Multi-level approval chains based on amount, department, or vendor.",
      },
      {
        name: "Accounting Software Sync",
        detail: "Approved invoices sync directly to your ERP or general ledger.",
      },
    ],
    href: "/product/ap-automation",
  },
  {
    label: "Expense Management",
    title: "Connect any credit card, automate expenses",
    description:
      "Link any card, match receipts automatically, and enforce spending policies in real time. No more chasing expense reports at month-end.",
    items: [
      {
        name: "Any Credit Card",
        detail: "Connect corporate, personal, or virtual cards from any provider.",
      },
      {
        name: "Automatic Receipt Matching",
        detail: "Snap a photo or forward receipts — Vergo matches them to transactions automatically.",
      },
      {
        name: "Policy Enforcement",
        detail: "Out-of-policy expenses are flagged instantly so nothing slips through.",
      },
    ],
    href: "/product/expense-management",
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
    href: "/ai-agents",
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
    quote: "The integration with our ERP made the decision easy. With a few clicks in the Vergo app - our team are turning expenses in more timely, not to mention the ease of review and approval with the online platform.",
    name: "Laurie Weisensel",
    role: "CFO",
    company: "DNT",
  },
  {
    quote: "Since the transition to Vergo, we have been able to cut back the time spent on reconciliations immensely. What was a full time job previously, takes about an hour to process daily!",
    name: "Taylor Ricard",
    role: "Controller",
    company: "Moss Utilities",
  },
  {
    quote: "Since the signing I cannot speak highly enough of the customer service we have received, the team are continuously improving the product and are always on hand to jump on a call.",
    name: "Mark Goan",
    role: "Accountant",
    company: "JMB",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0e0e0e] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] max-w-4xl mx-auto tracking-tight">
            For Accounting Teams who love control & efficiency
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            One platform to coordinate your close, automate the repetitive work, and keep your team in control.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/demo"
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

      {/* Testimonials */}
      <section className="bg-[#111111] py-16 lg:py-20">
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

      {/* Feature Sections */}
      <div className="divide-y divide-border">
        {features.map((feature, idx) => (
          <section key={feature.label} className="section-padding">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  {feature.href && (
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-1.5 mt-8 text-sm font-medium text-highlight hover:text-highlight/80 transition-colors"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
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
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
            Let your accounting team work on higher value tasks today.
          </h2>
          <p className="text-foreground-secondary mb-10 max-w-lg mx-auto leading-relaxed">
            Join the accounting teams closing faster with less manual work.
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
