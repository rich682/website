"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <Container size="narrow">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
          >
            Accounting teams spend 40% of their time
            <br />
            <span className="text-foreground-secondary italic">on work that is not accounting.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto"
          >
            Chasing documents, sending follow-ups, tracking who replied, reconciling spreadsheets, routing approvals. Vergo handles all of it so your team can focus on what they were hired to do.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
