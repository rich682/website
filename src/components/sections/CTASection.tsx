"use client";

import { motion } from "framer-motion";
import { Button, Container } from "@/components/ui";
import Link from "next/link";
import { useMemo } from "react";

const trustBadges = [
  { text: "No client login needed" },
  { text: "Setup in minutes" },
  { text: "Built for accounting teams" },
];

function ParticleDrift() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 5,
        opacity: 0.08 + Math.random() * 0.12,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: -10,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -500 - Math.random() * 300],
            opacity: [p.opacity, p.opacity, 0],
            x: [0, (Math.random() - 0.5) * 60],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary relative overflow-hidden">
      <ParticleDrift />
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
          See how Vergo can work for your team.
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
