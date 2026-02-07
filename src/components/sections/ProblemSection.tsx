"use client";

import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";
import { useRef } from "react";

const chaosItems = [
  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Emails" },
  { icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z", label: "Docs" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Time" },
  { icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Questions" },
  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: "Tasks" },
  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Follow-ups" },
];

// Chaotic starting positions (scattered)
const chaosPositions = [
  { x: -60, y: -40, rotate: -15 },
  { x: 70, y: -30, rotate: 20 },
  { x: -40, y: 50, rotate: -25 },
  { x: 50, y: 40, rotate: 15 },
  { x: -70, y: 10, rotate: 30 },
  { x: 60, y: -50, rotate: -10 },
];

// Ordered grid positions (2 rows x 3 cols, centered)
const orderedPositions = [
  { x: -52, y: -28, rotate: 0 },
  { x: 0, y: -28, rotate: 0 },
  { x: 52, y: -28, rotate: 0 },
  { x: -52, y: 28, rotate: 0 },
  { x: 0, y: 28, rotate: 0 },
  { x: 52, y: 28, rotate: 0 },
];

function ChaosToOrderAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative w-full max-w-xs mx-auto h-32 mt-10 mb-4">
      {chaosItems.map((item, index) => (
        <motion.div
          key={item.label}
          className="absolute left-1/2 top-1/2 -ml-5 -mt-5"
          initial={{
            x: chaosPositions[index].x,
            y: chaosPositions[index].y,
            rotate: chaosPositions[index].rotate,
            opacity: 0.4,
          }}
          animate={
            isInView
              ? {
                  x: orderedPositions[index].x,
                  y: orderedPositions[index].y,
                  rotate: orderedPositions[index].rotate,
                  opacity: 1,
                }
              : {
                  x: chaosPositions[index].x,
                  y: chaosPositions[index].y,
                  rotate: chaosPositions[index].rotate,
                  opacity: 0.4,
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.08,
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
        >
          <div className="w-10 h-10 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-accent/70">
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
          </div>
        </motion.div>
      ))}
      {/* AI sparkle that appears after items settle */}
      <motion.div
        className="absolute left-1/2 top-1/2 -ml-3 -mt-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.4, delay: 1.4, type: "spring" }}
      >
        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

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

          <ChaosToOrderAnimation />

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
