"use client";

import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Request",
    description: "Create a request and assign it to an employee, vendor, or client.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Remind",
    description: "Vergo sends the email, tracks the response, and reminds them if they forget.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Escalate",
    description: "When deadlines pass, escalate automatically to the right people.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Close",
    description: "Complete your close with confidence, knowing nothing slipped through.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// Animated connector line component
function AnimatedConnector({ index, isInView }: { index: number; isInView: boolean }) {
  return (
    <div className="hidden lg:block absolute top-8 left-full w-full h-px -translate-x-4 overflow-hidden">
      {/* Background line */}
      <div className="absolute inset-0 bg-border" />
      
      {/* Animated fill */}
      <motion.div
        className="absolute inset-0 bg-accent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
      
      {/* Traveling dot */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent"
        initial={{ left: "-4px", opacity: 0 }}
        animate={isInView ? { 
          left: ["0%", "100%"],
          opacity: [0, 1, 1, 0]
        } : { left: "-4px", opacity: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3 + index * 0.2,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// Step node with pulse animation
function StepNode({ step, index, isInView }: { step: typeof steps[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <AnimatedConnector index={index} isInView={isInView} />
      )}

      {/* Step card */}
      <motion.div 
        className="bg-background rounded-xl p-6 border border-border h-full hover:border-accent hover:shadow-lg transition-all group"
        whileHover={{ y: -4 }}
      >
        {/* Number with animated background */}
        <div className="relative mb-4">
          <span className="text-xs font-mono text-foreground-muted relative z-10">
            {step.number}
          </span>
          <motion.div
            className="absolute -inset-1 rounded bg-accent/10"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.15 }}
          />
        </div>

        {/* Icon with pulse effect */}
        <div className="relative w-12 h-12 mb-4">
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-accent/20"
            animate={isInView ? {
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          />
          <div className="relative w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
            {step.icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {step.title}
        </h3>
        <p className="text-sm text-foreground-secondary leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function WorkflowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background-secondary" ref={sectionRef}>
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            From request to resolution.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary"
          >
            You focus on the books. We handle the follow-ups.
          </motion.p>
        </div>

        {/* Steps with animated timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepNode key={step.number} step={step} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Animated completion indicator */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
            </motion.svg>
            Automated from start to finish
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
