"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button, Container } from "@/components/ui";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with the basics",
    features: [
      "Up to 2 accounting users",
      "Limited requests per month",
      "Basic tasks",
      "Email reminders",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$9.99",
    period: "/user/month",
    description: "For growing accounting teams",
    features: [
      "Unlimited requests",
      "Automated reminders",
      "Personalized messages",
      "Contact management",
      "Collect workflows",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Advanced",
    price: "$19",
    period: "/user/month",
    description: "Full accountability and enforcement",
    features: [
      "Everything in Starter",
      "Escalation workflows",
      "Approvals workflows",
      "Advanced reporting",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Choose the plan that fits your team&apos;s needs.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-xl border ${
                tier.highlighted
                  ? "bg-background border-accent shadow-lg"
                  : "bg-background border-border"
              }`}
            >
              {/* Highlighted badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                  Most popular
                </div>
              )}

              {/* Tier info */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-foreground-muted text-sm">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground-secondary mt-2">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-foreground-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
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
      </Container>
    </section>
  );
}
