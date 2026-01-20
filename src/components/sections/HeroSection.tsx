"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import Link from "next/link";

// Abstract hero illustration - animated workflow visualization
function AbstractHeroIllustration() {
  const steps = [
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Request"
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      label: "Track"
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      label: "Remind"
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      label: "Review"
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
      label: "Close"
    },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto py-8">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-28 h-28 rounded-full bg-accent/5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div 
        className="absolute bottom-4 left-0 w-20 h-20 rounded-full bg-accent/5"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Main workflow visualization */}
      <div className="relative flex items-center justify-between px-2">
        {steps.map((step, index) => (
          <div key={step.label} className="relative flex flex-col items-center">
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <motion.div
                className="absolute top-6 left-[calc(50%+22px)] h-0.5 bg-accent/20"
                style={{ width: "calc(100% + 8px)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              />
            )}

            {/* Step number badge */}
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.8 + index * 0.08 }}
            >
              {index + 1}
            </motion.div>

            {/* Circle with icon */}
            <motion.div
              className="relative w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20, 
                delay: 0.4 + index * 0.1 
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(253, 69, 0, 0.15)" }}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent shadow-sm"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                {step.icon}
              </motion.div>
            </motion.div>

            {/* Label */}
            <motion.span
              className="mt-2 text-xs font-medium text-foreground-secondary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.08 }}
            >
              {step.label}
            </motion.span>
          </div>
        ))}
      </div>

      {/* Animated pulse on the last step */}
      <motion.div
        className="absolute right-2 top-[calc(50%-8px)] -translate-y-1/2 w-12 h-12 rounded-full border-2 border-accent/30"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ 
          scale: [1, 1.5, 1.5],
          opacity: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeOut"
        }}
      />

      {/* "Automated" badge removed */}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content - Clean background */}
          <div>
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl text-foreground leading-tight mb-6"
            >
              Run accounting by the close — not chaos.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-foreground-secondary max-w-lg mb-8 leading-relaxed"
            >
              Daily, monthly, and year-end accounting work in one system. Track tasks, collect evidence, review reconciliations, and close with confidence.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="#demo">
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-white font-medium rounded-lg hover:bg-secondary transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Watch a 5-minute walkthrough
                </motion.button>
              </Link>
              <Link href="https://app.tryvergo.com/signup">
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-background-secondary transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get started
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex items-center gap-4 text-sm text-foreground-muted"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free for 2 users
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card
              </span>
            </motion.div>
          </div>

          {/* Right content - Soft pastel background */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Pastel background container */}
            <div className="bg-background-pastel-orange rounded-3xl p-8 lg:p-12">
              <AbstractHeroIllustration />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
