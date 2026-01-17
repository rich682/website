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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      label: "Remind"
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      label: "Collect"
    },
    { 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: "Approve"
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
        className="absolute top-0 right-0 w-28 h-28 rounded-full bg-white/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div 
        className="absolute bottom-4 left-0 w-20 h-20 rounded-full bg-white/10"
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
                className="absolute top-6 left-[calc(50%+22px)] h-0.5 bg-white/40"
                style={{ width: "calc(100% + 8px)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              />
            )}

            {/* Step number badge */}
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white text-accent text-[10px] font-bold flex items-center justify-center z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.8 + index * 0.08 }}
            >
              {index + 1}
            </motion.div>

            {/* Circle with icon */}
            <motion.div
              className="relative w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20, 
                delay: 0.4 + index * 0.1 
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent shadow-lg"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                {step.icon}
              </motion.div>
            </motion.div>

            {/* Label */}
            <motion.span
              className="mt-2 text-xs font-medium text-white/90"
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
        className="absolute right-2 top-[calc(50%-8px)] -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white/50"
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

      {/* "Automated" badge */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <span className="flex items-center gap-2 text-sm font-medium text-white">
          <motion.svg 
            className="w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </motion.svg>
          Fully automated
        </span>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-20">
      {/* Orange hero block */}
      <div className="bg-background-orange rounded-3xl mx-4 lg:mx-8 overflow-hidden relative">
        <Container size="wide" className="py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              {/* Social proof badge - builds credibility */}
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
              >
                Stop chasing.
                <br />
                Start closing.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg lg:text-xl text-foreground/80 max-w-lg mb-8 leading-relaxed"
              >
                The workflow layer that gets accounting teams what they need — without the follow-up fatigue.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/demo">
                  <motion.button
                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-hover transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a Demo →
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 flex items-center gap-4 text-sm text-foreground/70"
              >
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free for 2 users
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card
                </span>
              </motion.div>
            </div>

            {/* Right content - Abstract illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <AbstractHeroIllustration />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
