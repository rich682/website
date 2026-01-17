"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button, Container, Badge } from "@/components/ui";
import { useRef } from "react";

interface SegmentPageLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  painPoints: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  howItFits: {
    title: string;
    description: string;
  }[];
  keyModules: {
    name: string;
    description: string;
    href: string;
  }[];
  expansionPath: {
    step: string;
    label: string;
  }[];
  ctaText: string;
  ctaSecondary?: string;
}

// Segment-specific colors
const segmentColors: Record<string, { badge: string; accent: string; light: string }> = {
  "Small Business": {
    badge: "bg-green-100 text-green-700 border-green-200",
    accent: "text-green-600",
    light: "bg-green-50",
  },
  "Mid-Market": {
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    accent: "text-blue-600",
    light: "bg-blue-50",
  },
  "Enterprise": {
    badge: "bg-purple-100 text-purple-700 border-purple-200",
    accent: "text-purple-600",
    light: "bg-purple-50",
  },
};

// Default pain point icons
const defaultPainIcons = [
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];


// Animated expansion timeline
function ExpansionTimeline({ steps, colors }: { steps: { step: string; label: string }[]; colors: typeof segmentColors["Small Business"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
      {steps.map((item, index) => (
        <div key={item.step} className="flex items-center gap-2 md:gap-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <motion.div
              className={`w-14 h-14 rounded-full ${colors.light} flex items-center justify-center ${colors.accent} font-bold text-lg mb-2 mx-auto border-2 border-current`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.15, type: "spring" }}
            >
              {index + 1}
            </motion.div>
            <div className="text-sm font-medium text-foreground">{item.step}</div>
            <div className="text-xs text-foreground-muted">{item.label}</div>
          </motion.div>
          {index < steps.length - 1 && (
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
              style={{ transformOrigin: "left" }}
            >
              <svg className={`w-12 h-6 ${colors.accent}`} fill="none" viewBox="0 0 48 24">
                <path
                  d="M0 12h40M40 12l-6-6M40 12l-6 6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

export function SegmentPageLayout({
  badge,
  title,
  subtitle,
  painPoints,
  howItFits,
  keyModules,
  expansionPath,
  ctaText,
  ctaSecondary,
}: SegmentPageLayoutProps) {
  const colors = segmentColors[badge] || segmentColors["Small Business"];

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
              <Badge className={`${colors.badge} border`}>{badge}</Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl text-foreground mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-foreground-secondary max-w-2xl mx-auto mb-8"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="https://app.tryvergo.com/signup">
                <Button variant="primary" size="lg">
                  Get Started →
                </Button>
              </Link>
            </motion.div>
          </Container>
        </section>

        {/* Pain Points - with icons */}
        <section className="py-16 lg:py-20 bg-background-secondary">
          <Container size="wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                The challenges you face
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {painPoints.map((pain, index) => (
                <motion.div
                  key={pain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-background border border-border flex gap-4"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors.light} ${colors.accent} flex items-center justify-center`}>
                    {pain.icon || defaultPainIcons[index % defaultPainIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {pain.title}
                    </h3>
                    <p className="text-foreground-secondary">
                      {pain.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* How Vergo Fits */}
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
                How Vergo fits your team
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {howItFits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${colors.light} flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${colors.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground-secondary">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Key Modules */}
        <section className="py-16 lg:py-20 bg-background-secondary">
          <Container size="wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Key modules for your team
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {keyModules.map((module, index) => (
                <motion.div
                  key={module.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={module.href}>
                    <div className="p-6 rounded-xl bg-background border border-border hover:border-accent hover:shadow-md transition-all h-full group">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {module.name}
                      </h3>
                      <p className="text-sm text-foreground-secondary">
                        {module.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Expansion Path */}
        <section className="py-16 lg:py-20">
          <Container size="narrow" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Your path to growth
              </h2>
              <p className="text-lg text-foreground-secondary mb-12">
                Start small, expand naturally as your needs grow.
              </p>
            </motion.div>

            <ExpansionTimeline steps={expansionPath} colors={colors} />
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
              Ready to transform your accounting workflow?
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
