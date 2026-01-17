"use client";

import { motion } from "framer-motion";
import { Button, Container } from "@/components/ui";
import Link from "next/link";

const trustBadges = [
  { text: "No credit card required" },
  { text: "Setup in minutes" },
  { text: "Cancel anytime" },
];

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background-orange relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>
      
      <Container size="narrow" className="text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl text-foreground mb-4"
        >
          Close the books without the chaos.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto"
        >
          Join accounting teams who&apos;ve stopped chasing and started closing. 
          Free for up to 2 users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="https://app.tryvergo.com/signup">
            <Button variant="secondary" size="lg">
              Get Started →
            </Button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/70"
        >
          {trustBadges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
