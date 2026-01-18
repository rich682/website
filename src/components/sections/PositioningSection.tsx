"use client";

import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";
import { useRef } from "react";

const workflowSteps = [
  {
    step: "1",
    title: "Request",
    description: "Ask for what you need",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Track",
    description: "See status at a glance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Remind",
    description: "Auto follow-ups until done",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    step: "4",
    title: "Review",
    description: "Route for sign-off",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: "5",
    title: "Close",
    description: "Complete on time",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export function PositioningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 lg:py-28">
      <Container size="wide">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl text-foreground mb-4"
          >
            From request to resolution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            You focus on the books. Vergo handles the follow-ups.
          </motion.p>
        </div>

        {/* Workflow Steps */}
        <div ref={ref} className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative text-center"
              >
                {/* Step circle */}
                <motion.div
                  className="relative mx-auto w-24 h-24 rounded-full bg-background border-2 border-border flex items-center justify-center mb-4 z-10"
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15, type: "spring" }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center text-accent">
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-white text-xs font-semibold flex items-center justify-center">
                    {step.step}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-foreground-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-accent text-sm font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Automated from start to finish
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
