"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedIconProps {
  children: ReactNode;
  variant?: "hover" | "loop" | "pulse";
  className?: string;
}

const hoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.2, ease: "easeOut" }
  },
};

const loopVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.05, 1],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.08, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function AnimatedIcon({ children, variant = "hover", className }: AnimatedIconProps) {
  if (variant === "hover") {
    return (
      <motion.div
        className={className}
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "loop") {
    return (
      <motion.div
        className={className}
        variants={loopVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={pulseVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
