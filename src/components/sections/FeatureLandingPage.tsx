"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Button, Container } from "@/components/ui";
import Link from "next/link";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureLandingPageProps {
  badge: string;
  title: string;
  subtitle: string;
  features: FeatureItem[];
  illustration?: React.ReactNode;
}

export function FeatureLandingPage({ badge, title, subtitle, features, illustration }: FeatureLandingPageProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-44 lg:pb-24">
          <Container size="narrow" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">
                {badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto mb-8"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="https://app.tryvergo.com/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </motion.div>
          </Container>
        </section>

        {/* Illustration slot */}
        {illustration && (
          <section className="pb-12 lg:pb-20">
            <Container size="default">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-xl mx-auto"
              >
                {illustration}
              </motion.div>
            </Container>
          </section>
        )}

        {/* Features list */}
        <section className="pb-20 lg:pb-32">
          <Container size="default">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-2xl border border-border shadow-sm p-8 lg:p-10"
              >
                <h2 className="font-serif text-2xl text-foreground mb-8">Features</h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      className="flex items-start gap-4 group"
                    >
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-foreground-secondary leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-background-secondary">
          <Container size="narrow" className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl sm:text-4xl text-foreground mb-4"
            >
              See it in action.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground-secondary mb-8 max-w-xl mx-auto"
            >
              Book a demo to see how Vergo can streamline your accounting workflow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="https://app.tryvergo.com/demo">
                <Button variant="primary" size="lg">
                  Book a Demo
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
