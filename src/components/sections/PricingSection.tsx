"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button, Container } from "@/components/ui";

const tiers = [
  {
    name: "Individual",
    price: "Free",
    description: "For individuals managing lightweight workflows or testing the platform.",
    features: [
      "1 user",
      "Up to 50 requests per month",
      "Core task management",
      "Email reminders",
    ],
    cta: "Get started",
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
      "Unlimited storage",
      "AP automation",
      "Expense management",
    ],
    cta: "Get started",
    highlighted: true,
    href: "https://app.tryvergo.com/signup",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex organizations with advanced workflow, security, and integration needs.",
    features: [
      "100+ users",
      "Advanced security & SSO",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
    highlighted: false,
    href: "/contact",
  },
];

export function PricingSection() {
  return (
    <section className="py-24 lg:py-32">
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
            Transparent pricing for every team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Choose the plan that fits your current workflow and scales as you grow.
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
                {tier.billing && (
                  <p className="text-xs font-medium text-foreground-muted uppercase tracking-wide">
                    {tier.billing}
                  </p>
                )}
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
