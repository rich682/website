"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  variant?: "pulse" | "float" | "glow";
}

export function AnimatedIcon({
  children,
  className,
  variant = "pulse",
}: AnimatedIconProps) {
  const animations = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
    },
    float: {
      y: [0, -5, 0],
    },
    glow: {
      filter: [
        "drop-shadow(0 0 0px rgba(245, 166, 35, 0))",
        "drop-shadow(0 0 8px rgba(245, 166, 35, 0.4))",
        "drop-shadow(0 0 0px rgba(245, 166, 35, 0))",
      ],
    },
  };

  return (
    <motion.div
      className={cn("inline-flex", className)}
      animate={animations[variant]}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
}

// Specific icon components for modules
export function TasksIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-8 h-8", className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M10 16L14 20L22 12"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      />
    </svg>
  );
}

export function ReminderIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-8 h-8", className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="16"
        cy="16"
        r="12"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M16 8V16L20 20"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      />
    </svg>
  );
}

export function ContactIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-8 h-8", className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="16"
        cy="12"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.path
        d="M6 26C6 21.5817 9.58172 18 14 18H18C22.4183 18 26 21.5817 26 26"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      />
    </svg>
  );
}

export function CollectIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-8 h-8", className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        x="4"
        y="8"
        width="24"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M16 12V20M13 15H19"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      />
    </svg>
  );
}

export function ApprovalsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-8 h-8", className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="16"
        cy="16"
        r="12"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M10 16L14 20L22 12"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
      />
    </svg>
  );
}
