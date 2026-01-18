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
  animationType: "check" | "bell" | "review" | "send";
}

const modules: Module[] = [
  {
    name: "Request",
    description: "Ask for what you need from anyone, anywhere.",
    href: "/features/requests",
    animationType: "send",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Track",
    description: "See status at a glance. Know who's done what.",
    href: "/features/tasks",
    animationType: "check",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Remind",
    description: 'Stop writing "just following up" emails.',
    href: "/features/reminders",
    animationType: "bell",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    name: "Review",
    description: "Route decisions to the right people.",
    href: "/features/approvals",
    animationType: "review",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
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
  review: {
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
            Four capabilities. One system. Complete accountability.
          </motion.p>
        </div>

        {/* Module cards with animated icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <ModuleCard key={module.name} module={module} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
