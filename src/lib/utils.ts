import { type ClassValue, clsx } from "clsx";

// Simple cn utility without tailwind-merge for now
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Animation variants for consistent motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// Easing functions
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const easeInOutExpo: [number, number, number, number] = [0.87, 0, 0.13, 1];

// Default transition
export const defaultTransition = {
  duration: 0.6,
  ease: easeOutExpo as [number, number, number, number],
};

// Scroll-triggered animation settings
export const scrollAnimationProps = {
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true, margin: "-100px" },
  transition: defaultTransition,
};
