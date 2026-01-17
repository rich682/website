"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Button, Container, Badge } from "@/components/ui";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Get started with the basics",
    features: [
      { name: "Up to 2 accounting users", included: true },
      { name: "50 requests per month", included: true },
      { name: "Basic tasks", included: true },
      { name: "Email reminders", included: true },
      { name: "Contact management", included: true },
      { name: "Automated reminder schedules", included: false },
      { name: "Escalation workflows", included: false },
      { name: "Approvals workflows", included: false },
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Starter",
    monthlyPrice: 12,
    annualPrice: 10,
    description: "For growing accounting teams",
    features: [
      { name: "Unlimited accounting users", included: true },
      { name: "Unlimited requests", included: true },
      { name: "Advanced tasks", included: true },
      { name: "Email reminders", included: true },
      { name: "Contact management", included: true },
      { name: "Automated reminder schedules", included: true },
      { name: "Collect workflows", included: true },
      { name: "Priority email support", included: true },
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Advanced",
    monthlyPrice: 24,
    annualPrice: 19,
    description: "Full accountability and enforcement",
    features: [
      { name: "Everything in Starter", included: true },
      { name: "Escalation workflows", included: true },
      { name: "Approvals workflows", included: true },
      { name: "Advanced reporting", included: true },
      { name: "Custom integrations", included: true },
      { name: "API access", included: true },
      { name: "Dedicated support", included: true },
      { name: "Custom onboarding", included: true },
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What counts as an 'accounting user'?",
    answer: "Accounting users are members of your team who create and manage requests. External stakeholders (employees, vendors, clients) who receive and respond to requests don't count toward your user limit.",
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
  },
  {
    question: "What happens when I hit my request limit on Free?",
    answer: "You'll be notified when you're approaching your limit. You can upgrade to Starter for unlimited requests, or wait until the next month when your limit resets.",
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes! Annual billing saves you 20% compared to monthly. Toggle the billing switch above to see annual pricing.",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No contracts. All plans are month-to-month (or annual if you choose). Cancel anytime with no penalties.",
  },
];

const comparisonFeatures = [
  { name: "Accounting users", free: "2", starter: "Unlimited", advanced: "Unlimited" },
  { name: "Requests per month", free: "50", starter: "Unlimited", advanced: "Unlimited" },
  { name: "Tasks", free: "Basic", starter: "Advanced", advanced: "Advanced" },
  { name: "Email reminders", free: "✓", starter: "✓", advanced: "✓" },
  { name: "Automated schedules", free: "—", starter: "✓", advanced: "✓" },
  { name: "Collect workflows", free: "—", starter: "✓", advanced: "✓" },
  { name: "Approvals workflows", free: "—", starter: "—", advanced: "✓" },
  { name: "Escalation workflows", free: "—", starter: "—", advanced: "✓" },
  { name: "API access", free: "—", starter: "—", advanced: "✓" },
  { name: "Support", free: "Community", starter: "Email", advanced: "Dedicated" },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 bg-background hover:bg-background-secondary transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-foreground">
          {faq.question}
        </h3>
        <motion.svg
          className="w-5 h-5 text-foreground-secondary flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-6 text-foreground-secondary">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pb-20">
          <Container size="narrow" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="accent">Pricing</Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-foreground mb-6"
            >
              Simple, transparent pricing.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-foreground-secondary max-w-2xl mx-auto mb-8"
            >
              Choose the plan that fits your team.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-3"
            >
              <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-foreground-muted"}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? "bg-accent" : "bg-border"}`}
                aria-label="Toggle annual billing"
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm"
                  animate={{ left: isAnnual ? "calc(100% - 24px)" : "4px" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-foreground-muted"}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                  Save 20%
                </span>
              )}
            </motion.div>
          </Container>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 lg:py-20 bg-background-secondary">
          <Container size="wide">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative p-6 rounded-xl border ${
                    tier.highlighted
                      ? "bg-background border-accent shadow-lg ring-2 ring-accent/20"
                      : "bg-background border-border"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                      Most popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-serif text-foreground">
                        ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                      </span>
                      {tier.monthlyPrice > 0 && (
                        <span className="text-foreground-muted text-sm">
                          /user/month
                        </span>
                      )}
                    </div>
                    {isAnnual && tier.monthlyPrice > 0 && (
                      <p className="text-xs text-foreground-muted mt-1">
                        billed annually
                      </p>
                    )}
                    <p className="text-sm text-foreground-secondary mt-2">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.slice(0, 6).map((feature) => (
                      <li key={feature.name} className="flex items-start gap-3">
                        {feature.included ? (
                          <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-foreground-muted flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={`text-sm ${feature.included ? "text-foreground-secondary" : "text-foreground-muted"}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="https://app.tryvergo.com/signup">
                    <Button
                      variant={tier.highlighted ? "primary" : "outline"}
                      size="md"
                      className="w-full justify-center"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Enterprise callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 p-6 rounded-xl bg-background border border-border max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Need enterprise features?
                </h3>
                <p className="text-foreground-secondary">
                  Custom integrations, dedicated support, and volume pricing for large teams.
                </p>
              </div>
              <Link href="/contact">
                <Button variant="outline" size="md" className="whitespace-nowrap">
                  Talk to sales
                </Button>
              </Link>
            </motion.div>
          </Container>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 lg:py-20">
          <Container size="wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Compare plans
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-4xl mx-auto overflow-x-auto"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 pr-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">Free</th>
                    <th className="text-center py-4 px-4 font-semibold text-accent">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">Advanced</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.name} className={index % 2 === 0 ? "bg-background-secondary" : ""}>
                      <td className="py-3 pr-4 text-sm text-foreground">{feature.name}</td>
                      <td className="py-3 px-4 text-center text-sm text-foreground-secondary">{feature.free}</td>
                      <td className="py-3 px-4 text-center text-sm text-foreground-secondary">{feature.starter}</td>
                      <td className="py-3 px-4 text-center text-sm text-foreground-secondary">{feature.advanced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-20 bg-background-secondary">
          <Container size="narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={faq.question} faq={faq} index={index} />
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-background-orange">
          <Container size="narrow" className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl sm:text-4xl text-foreground mb-6"
            >
              Ready to stop chasing?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="https://app.tryvergo.com/signup">
                <Button variant="secondary" size="lg">
                  Get Started →
                </Button>
              </Link>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
