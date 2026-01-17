"use client";

import { motion } from "framer-motion";

interface AISparkleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

// Individual sparkle particle
function Sparkle({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="text-accent"
      >
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
}

export function AISparkle({ className = "", size = "md" }: AISparkleProps) {
  const sparkleSize = size === "sm" ? 8 : size === "md" ? 12 : 16;
  
  const sparkles = [
    { delay: 0, x: 10, y: 20 },
    { delay: 0.3, x: 85, y: 15 },
    { delay: 0.6, x: 25, y: 75 },
    { delay: 0.9, x: 70, y: 80 },
    { delay: 1.2, x: 50, y: 10 },
    { delay: 1.5, x: 90, y: 50 },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} size={sparkleSize} />
      ))}
    </div>
  );
}

// AI Badge with animated glow
export function AIBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium"
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(242, 101, 34, 0)",
          "0 0 0 4px rgba(242, 101, 34, 0.1)",
          "0 0 0 0 rgba(242, 101, 34, 0)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
        />
      </motion.svg>
      {children}
    </motion.div>
  );
}
