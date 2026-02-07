"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const sparkle = (
  <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

/* ===== Dashboard Illustration (for Role pages) ===== */

function AnimatedCounter({ target, suffix = "", delay = 0.5 }: { target: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 1200;
      const startTime = Date.now();
      const step = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, target, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
}

interface DashboardIllustrationProps {
  label?: string;
}

export function DashboardIllustration({ label = "Overview" }: DashboardIllustrationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="bg-background-secondary rounded-2xl p-6 border border-border">
      <div className="grid grid-cols-3 gap-3">
        {/* Metric: Completion */}
        <motion.div
          className="bg-background rounded-xl border border-border/50 p-3 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <div className="text-xl font-semibold text-foreground">
            <AnimatedCounter target={94} suffix="%" delay={0.5} />
          </div>
          <div className="text-[10px] text-foreground-muted mt-0.5">Complete</div>
        </motion.div>

        {/* Metric: Progress bar */}
        <motion.div
          className="bg-background rounded-xl border border-border/50 p-3"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, type: "spring" }}
        >
          <div className="text-[10px] text-foreground-muted mb-1.5">On Track</div>
          <div className="h-2 bg-border/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "78%" } : {}}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="text-xs font-medium text-foreground mt-1">78%</div>
        </motion.div>

        {/* Metric: Tasks */}
        <motion.div
          className="bg-background rounded-xl border border-border/50 p-3 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <div className="text-xl font-semibold text-foreground">
            <AnimatedCounter target={12} delay={0.7} />
          </div>
          <div className="text-[10px] text-foreground-muted mt-0.5">Tasks Left</div>
        </motion.div>
      </div>

      {/* AI badge */}
      <motion.div
        className="mt-3 flex justify-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.6 }}
      >
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          >
            {sparkle}
          </motion.span>
          <span>AI-powered insights</span>
        </span>
      </motion.div>
    </div>
  );
}

/* ===== Scaling Blocks Illustration (for Company Type pages) ===== */

interface ScalingBlocksIllustrationProps {
  scale: "small" | "medium" | "large";
}

export function ScalingBlocksIllustration({ scale }: ScalingBlocksIllustrationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const blockCount = scale === "small" ? 2 : scale === "medium" ? 4 : 6;
  const cols = scale === "small" ? 2 : scale === "medium" ? 2 : 3;

  return (
    <div ref={ref} className="bg-background-secondary rounded-2xl p-6 border border-border">
      <div className={`grid gap-2 ${cols === 3 ? "grid-cols-3" : "grid-cols-2"} max-w-xs mx-auto`}>
        {Array.from({ length: blockCount }, (_, i) => (
          <motion.div
            key={i}
            className="bg-background rounded-xl border border-border/50 p-3 h-14 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 150 }}
          >
            <motion.div
              className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center"
              animate={isInView ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 3, delay: 1.5 + i * 0.2, repeat: Infinity }}
            >
              <div className="w-2 h-2 rounded-sm bg-accent/30" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Connection lines for medium/large */}
      {scale !== "small" && (
        <motion.div
          className="flex justify-center mt-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-1 text-[10px] text-foreground-muted">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316" />
            </svg>
            All connected
          </div>
        </motion.div>
      )}

      {/* Enterprise lock icon */}
      {scale === "large" && (
        <motion.div
          className="flex justify-center mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Enterprise security
          </span>
        </motion.div>
      )}
    </div>
  );
}
