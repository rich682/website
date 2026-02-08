"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Button, Container } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  bullets?: string[];
}

interface FeatureLandingPageProps {
  badge: string;
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

export function FeatureLandingPage({ badge, title, subtitle, features }: FeatureLandingPageProps) {
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

        {/* Alternating feature sections */}
        {features.map((feature, index) => {
          const isImageLeft = index % 2 === 0;
          return (
            <section
              key={feature.title}
              className={index % 2 === 0 ? "py-16 lg:py-24" : "py-16 lg:py-24 bg-background-secondary"}
            >
              <Container size="wide">
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isImageLeft ? "" : "lg:direction-rtl"}`}>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={isImageLeft ? "order-1" : "order-1 lg:order-2"}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={640}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <motion.div
                    initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={isImageLeft ? "order-2" : "order-2 lg:order-1"}
                  >
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-foreground-secondary leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    {feature.bullets && feature.bullets.length > 0 && (
                      <ul className="space-y-3">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-foreground-secondary">
                            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>
              </Container>
            </section>
          );
        })}

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
