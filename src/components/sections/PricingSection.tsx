"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button, Container } from "@/components/ui";

const tiers = [
  {
    name: "Individual",
    price: "Free",
    description: "For individuals or small teams getting started with request management.",
    features: [
      "Up to 2 users",
      "Up to 50 requests per month",
      "AI inbox with classification & summaries",
      "Smart completion detection",
      "Basic automated reminders",
      "Email integration (Gmail or Outlook)",
      "Form builder with secure links",
    ],
    cta: "Sign up free",
    highlighted: false,
    href: "https://app.tryvergo.com/signup",
  },
  {
    name: "Team",
    price: "$20",
    period: "per user / month",
    description: "For accounting teams running high-volume, collaborative workflows.",
    features: [
      "Up to 100 users",
      "Unlimited requests",
      "Full AI suite: completion, risk, drafts",
      "Advanced reminder sequences",
      "Board & task management",
      "Databases & reports with AI insights",
      "Document collection & review",
      "Contact management & sync",
      "Role-based access control",
    ],
    cta: "Get started",
    highlighted: true,
    href: "https://app.tryvergo.com/signup",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex organizations with advanced security, integration, and compliance needs.",
    features: [
      "100+ users",
      "Everything in Team",
      "Advanced security & SSO",
      "Custom integrations",
      "Dedicated account manager",
      "Custom onboarding & training",
      "SLA & priority support",
    ],
    cta: "Contact sales",
    highlighted: false,
    href: "/contact",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Start free. Upgrade when your team grows. No surprises.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                tier.highlighted
                  ? "bg-white border-foreground shadow-[0_0_0_1px_rgba(26,26,26,1),0_20px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-foreground"
                  : "bg-background border-border hover:border-border-hover"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground-secondary mb-4">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-serif text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-foreground-secondary text-sm">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="mt-6 text-foreground-secondary leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-10 border-t border-border pt-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground-secondary">
                      <svg
                        className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={tier.href} className="mt-auto">
                <Button
                  variant={tier.highlighted ? "primary" : "outline"}
                  size="lg"
                  className="w-full justify-center py-6 text-base font-medium"
                >
                  {tier.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
