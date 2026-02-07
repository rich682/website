"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import Link from "next/link";

function AbstractIllustration() {
  const modules = [
    { label: "Tasks", x: 0, y: 0 },
    { label: "Requests", x: 1, y: 0 },
    { label: "Reports", x: 2, y: 0 },
    { label: "Documents", x: 0, y: 1 },
    { label: "Databases", x: 1, y: 1 },
    { label: "Expenses", x: 2, y: 1 },
  ];

  return (
    <div className="bg-background-pastel-orange rounded-3xl p-8 lg:p-10">
      <div className="grid grid-cols-3 gap-3">
        {modules.map((mod, index) => (
          <motion.div
            key={mod.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.08, type: "spring", stiffness: 200 }}
            className="bg-white rounded-xl p-4 border border-border shadow-sm text-center"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mx-auto mb-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-foreground">{mod.label}</span>
          </motion.div>
        ))}
      </div>
      {/* Connecting line at center */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-4 mx-auto h-0.5 bg-accent/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="mt-3 text-center"
      >
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          All connected with AI
        </span>
      </motion.div>
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
              Put your book close on autopilot.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-foreground-secondary max-w-lg mb-8 leading-relaxed"
            >
              Vergo is the operating system for accounting teams. Manage tasks, requests, documents, expenses, invoices, and reports -- all in one AI-powered platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="https://app.tryvergo.com/demo">
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

          {/* Right content - Abstract illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <AbstractIllustration />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
