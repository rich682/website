"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ReactNode } from "react";

interface Module {
  name: string;
  description: string;
  href: string;
  icon: ReactNode;
  animationType: "check" | "bell" | "collect" | "approve" | "send";
}

const modules: Module[] = [
  {
    name: "Tasks",
    description: "Track work, assign owners, and close on time.",
    href: "/features/tasks",
    animationType: "check",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Requests",
    description: "Ask for what you need from anyone, anywhere.",
    href: "/features/requests",
    animationType: "send",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    name: "Collect",
    description: "Gather receipts, invoices, and documents.",
    href: "/features/collect",
    animationType: "collect",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: "Approvals",
    description: "Route decisions to the right people.",
    href: "/features/approvals",
    animationType: "approve",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: "Reminders",
    description: 'Stop writing "just following up" emails.',
    href: "/features/reminders",
    animationType: "bell",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

// Animation variants for different icon types
const iconAnimations = {
  check: {
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
    }
  },
  bell: {
    animate: {
      rotate: [0, 10, -10, 10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const, repeatDelay: 1 }
    }
  },
  collect: {
    animate: {
      y: [0, -3, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }
    }
  },
  approve: {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" as const }
    }
  },
  send: {
    animate: {
      x: [0, 3, 0],
      y: [0, -2, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }
    }
  }
};

function ModuleCard({ module, index }: { module: Module; index: number }) {
  const animation = iconAnimations[module.animationType];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className=""
    >
      <Link href={module.href} className="block h-full group">
        <motion.div 
          className="h-full p-6 rounded-xl bg-background border border-border hover:border-accent hover:shadow-lg transition-all"
          whileHover={{ y: -4 }}
        >
          {/* Animated Icon Container */}
          <div className="relative w-12 h-12 mb-4">
            {/* Background pulse on hover */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-accent/20 opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Icon with animation */}
            <motion.div 
              className="relative w-12 h-12 rounded-lg bg-background-secondary group-hover:bg-accent-light flex items-center justify-center text-foreground-secondary group-hover:text-accent transition-colors"
              {...animation}
            >
              {module.icon}
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {module.name}
          </h3>
          <p className="text-sm text-foreground-secondary leading-relaxed">
            {module.description}
          </p>

          {/* Animated Arrow */}
          <motion.div 
            className="mt-4 flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            Learn more
            <motion.svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ModulesSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Built for how accounting actually works.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary"
          >
            Five capabilities. One system. Complete accountability.
          </motion.p>
        </div>

        {/* Module cards with animated icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {modules.map((module, index) => (
            <ModuleCard key={module.name} module={module} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
