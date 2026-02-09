"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import Link from "next/link";

const modules = [
  {
    name: "Tasks",
    color: "#E8564A",
    bg: "#FEF2F1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Auto-Requests",
    color: "#D97706",
    bg: "#FEF9EC",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8" />
      </svg>
    ),
  },
  {
    name: "Reports",
    color: "#059669",
    bg: "#ECFDF5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: "Reconciliations",
    color: "#7C3AED",
    bg: "#F5F3FF",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Expenses",
    color: "#DC2626",
    bg: "#FEF2F2",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    name: "Invoices",
    color: "#2563EB",
    bg: "#EFF6FF",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
];

function HeroIllustration() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 via-sky-300 to-rose-300">
      {/* Painterly background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-blue-500/40 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-rose-400/40 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-amber-300/50 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-1/4 h-1/4 bg-blue-600/30 rounded-full blur-2xl" />
      </div>

      {/* Glass card */}
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-sm bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl p-5 sm:p-6"
        >
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                className="bg-white/80 rounded-xl p-3 sm:p-3.5 flex flex-col items-start gap-2 border border-white/60 shadow-sm"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: mod.bg, color: mod.color }}
                >
                  {mod.icon}
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-800 leading-tight">
                  {mod.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Connecting lines + badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            className="mt-4 flex flex-col items-center"
          >
            {/* Decorative connector lines */}
            <div className="flex items-center gap-1 mb-2">
              <div className="w-8 h-px bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="w-12 h-px bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="w-8 h-px bg-gray-300" />
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white/80 text-[11px] font-medium text-gray-600">
              All connected with AI
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              Put your teams book close on autopilot.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-foreground-secondary max-w-lg mb-8 leading-relaxed"
            >
              Vergo is the operating system for accounting teams. Manage tasks, auto-requests, reconciliations, expenses, invoices, and reports -- all in one AI-powered platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/demo">
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Demo
                </motion.button>
              </Link>
            </motion.div>

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
                Built for accounting
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AI-powered
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Setup in minutes
              </span>
            </motion.div>
          </div>

          {/* Right content - Hero illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
