"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Button, Container } from "@/components/ui";
import Link from "next/link";

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

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-border">
          <Container size="narrow" className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight"
            >
              Pricing designed for <br className="hidden sm:block" /> finance teams.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto"
            >
              Transparent, predictable plans that scale with your organization. <br className="hidden sm:block" />
              No hidden fees, no complex tiers.
            </motion.p>
          </Container>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-24 lg:py-32">
          <Container size="wide">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col p-8 lg:p-10 rounded-2xl border transition-all duration-300 ${
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
                      <span className="text-4xl lg:text-5xl font-serif text-foreground">
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

        {/* Final CTA */}
        <section className="py-24 lg:py-48 bg-foreground text-white">
          <Container size="narrow" className="text-center">
            <h2 className="font-serif text-4xl sm:text-5xl mb-8">
              Take command of your <br /> accounting workflows.
            </h2>
            <Link href="https://app.tryvergo.com/signup">
              <Button variant="primary" size="lg" className="bg-white text-foreground hover:bg-white/90 border-transparent">
                Get started for free
              </Button>
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
