"use client";

import { motion } from "framer-motion";
import { Button, Container } from "@/components/ui";
import Link from "next/link";

const trustBadges = [
  { text: "Free for 2 users" },
  { text: "No credit card required" },
  { text: "No client login needed" },
];

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary relative overflow-hidden">
      <Container size="narrow" className="text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl text-foreground mb-4"
        >
          Ready to stop chasing?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-foreground-secondary mb-8 max-w-xl mx-auto"
        >
          Join accounting teams who have stopped chasing and started closing.
          Get started for free today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="https://app.tryvergo.com/signup">
            <Button variant="primary" size="lg">
              Sign Up Free
            </Button>
          </Link>
          <Link href="https://app.tryvergo.com/demo">
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground-muted"
        >
          {trustBadges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
