"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const corePillars = [
  {
    title: "Close-based boards",
    description: "Work that completes and rolls forward. Daily, weekly, and monthly boards that archive when done—no evergreen chaos.",
  },
  {
    title: "Task checklists first",
    description: "Start every month-end with a structured checklist. Know exactly what needs to be done before you even open a spreadsheet.",
  },
  {
    title: "Evidence in context",
    description: "Requests and documents are tied directly to the tasks they support. No more hunting through email for backup.",
  },
  {
    title: "Managed Reconciliations",
    description: "Review and sign off on balance sheet reconciliations every cycle. AI highlights what changed; humans provide the judgment.",
  },
  {
    title: "Accounting-first automation",
    description: "Automation that respects your close calendar. Vergo understands month-end cycles and deadlines, not just generic due dates.",
  },
];

export function PositioningSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl lg:text-5xl text-foreground mb-8"
            >
              Vergo is the execution layer for accounting.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-foreground-secondary leading-relaxed mb-12"
            >
              Beyond simple task management, Vergo models the real cadence of accounting work. 
              It&apos;s where the work actually happens.
            </motion.p>
            
            <div className="space-y-8">
              {corePillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-foreground-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-background-pastel-green rounded-3xl p-8 lg:p-12 border border-border overflow-hidden"
          >
            {/* Visual representation of an 'Execution Layer' - abstract mockup */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-8">
                <div className="h-8 w-32 bg-white rounded-lg shadow-sm" />
                <div className="h-8 w-8 bg-white rounded-full shadow-sm" />
              </div>
              <div className="h-32 w-full bg-white rounded-xl shadow-sm border border-border/50 p-4">
                <div className="h-4 w-1/3 bg-background-secondary rounded mb-4" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-background-secondary/50 rounded" />
                  <div className="h-3 w-4/5 bg-background-secondary/50 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-white rounded-xl shadow-sm border border-border/50 p-4">
                  <div className="h-4 w-1/2 bg-accent/10 rounded mb-4" />
                  <div className="h-2 w-full bg-background-secondary/50 rounded" />
                </div>
                <div className="h-24 bg-white rounded-xl shadow-sm border border-border/50 p-4">
                  <div className="h-4 w-1/2 bg-success/10 rounded mb-4" />
                  <div className="h-2 w-full bg-background-secondary/50 rounded" />
                </div>
              </div>
              <div className="h-40 w-full bg-white rounded-xl shadow-sm border border-border/50 p-4 relative overflow-hidden">
                <div className="h-4 w-1/4 bg-background-secondary rounded mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border border-border" />
                      <div className="h-2 w-2/3 bg-background-secondary/50 rounded" />
                    </div>
                  ))}
                </div>
                {/* Floating 'Roll forward' indicator */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Roll forward
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
