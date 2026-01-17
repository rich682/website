"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
  variant?: "hero" | "section" | "cta";
}

export function GradientBackground({
  className,
  variant = "hero",
}: GradientBackgroundProps) {
  const variants = {
    hero: "opacity-60",
    section: "opacity-40",
    cta: "opacity-50",
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      {/* Primary gradient orb */}
      <motion.div
        className={cn(
          "absolute w-[800px] h-[800px] rounded-full blur-[120px]",
          variants[variant]
        )}
        style={{
          background:
            "radial-gradient(circle, rgba(245, 166, 35, 0.15) 0%, rgba(245, 166, 35, 0) 70%)",
          top: "-20%",
          right: "-10%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary gradient orb */}
      <motion.div
        className={cn(
          "absolute w-[600px] h-[600px] rounded-full blur-[100px]",
          variants[variant]
        )}
        style={{
          background:
            "radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0) 70%)",
          bottom: "-10%",
          left: "-5%",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle center glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(250, 250, 250, 0.05) 0%, transparent 70%)",
          top: "30%",
          left: "40%",
        }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
