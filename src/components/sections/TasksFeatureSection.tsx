"use client";

import { motion, useInView } from "framer-motion";
import { Container, Badge } from "@/components/ui";
import Link from "next/link";
import { useRef } from "react";

const taskItems = [
  { task: "Revenue Recognition", owner: "Sarah C.", status: "complete", category: "Accruals" },
  { task: "Bank Reconciliation - Operating", owner: "Mike J.", status: "in_progress", category: "Reconciliations" },
  { task: "Intercompany Eliminations", owner: "Lisa M.", status: "pending", category: "Consolidation" },
  { task: "Fixed Asset Roll-forward", owner: "Tom K.", status: "pending", category: "Assets" },
  { task: "Prepaid Expense Amortization", owner: "Sarah C.", status: "complete", category: "Accruals" },
];

function TasksMockup({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-foreground-muted uppercase tracking-wide">Month-End Close</div>
              <div className="text-lg font-semibold text-foreground">December 2024</div>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-foreground-secondary">2 of 5 complete</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 h-2 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "40%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
        
        {/* Checklist items */}
        <div className="p-4 space-y-2">
          {taskItems.map((item, index) => (
            <motion.div
              key={item.task}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-background-secondary transition-colors"
            >
              {/* Checkbox */}
              <motion.div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  item.status === "complete" 
                    ? "bg-green-500 border-green-500" 
                    : item.status === "in_progress"
                    ? "border-accent bg-accent/10"
                    : "border-border"
                }`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1, type: "spring" }}
              >
                {item.status === "complete" && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {item.status === "in_progress" && (
                  <motion.div
                    className="w-2 h-2 rounded-full bg-accent"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
              
              {/* Task info */}
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium truncate ${
                  item.status === "complete" ? "text-foreground-secondary line-through" : "text-foreground"
                }`}>
                  {item.task}
                </div>
              </div>
              
              {/* Category tag */}
              <span className="text-xs px-2 py-0.5 rounded-full bg-background-secondary text-foreground-muted hidden sm:inline">
                {item.category}
              </span>
              
              {/* Owner */}
              <div className="text-xs text-foreground-muted w-16 text-right">{item.owner}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="px-5 py-3 bg-background-secondary border-t border-border flex items-center justify-between text-sm"
        >
          <span className="text-foreground-muted">Last updated 2 min ago</span>
          <span className="text-accent font-medium">View full checklist →</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function TasksFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28" ref={sectionRef}>
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline">Tasks</Badge>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
            >
              Month-end close, finally under control.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-foreground-secondary mb-8"
            >
              One list. Every task. Complete visibility. Stop tracking close in 
              spreadsheets and start seeing exactly where you stand at any moment.
            </motion.p>
            
            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {[
                "Assign owners to every task",
                "Track completion in real-time",
                "See overdue items at a glance",
                "Build repeatable close processes",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link 
                href="/features/tasks" 
                className="inline-flex items-center text-accent font-medium hover:underline"
              >
                Learn more about Tasks
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
          
          {/* Right: Mockup */}
          <TasksMockup isInView={isInView} />
        </div>
      </Container>
    </section>
  );
}
