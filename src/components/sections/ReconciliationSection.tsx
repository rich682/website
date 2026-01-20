"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

export function ReconciliationSection() {
  return (
    <section className="py-24 lg:py-32 bg-background-secondary">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
                <div>
                  <h4 className="text-sm font-bold text-foreground-muted uppercase tracking-wider mb-1">Reconciliation</h4>
                  <p className="text-xl font-semibold text-foreground">1020 · Chase Operating</p>
                </div>
                <div className="px-3 py-1 bg-success/10 text-success text-xs font-bold rounded-full">
                  In Balance
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-border pb-4">
                  <span className="text-foreground-secondary">General Ledger</span>
                  <span className="text-xl font-mono text-foreground">$142,500.00</span>
                </div>
                <div className="flex justify-between items-end border-b border-border pb-4">
                  <span className="text-foreground-secondary">Bank Statement</span>
                  <span className="text-xl font-mono text-foreground">$142,500.00</span>
                </div>
                
                <div className="bg-accent/5 p-4 rounded-xl border border-accent/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-accent">AI Insight</span>
                  </div>
                  <p className="text-xs text-foreground-secondary leading-relaxed">
                    Balance matches previous close. 12 transactions analyzed. No anomalies detected in bank fee patterns.
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <div className="h-10 w-10 rounded-full bg-background-secondary border border-border flex items-center justify-center">
                    <span className="text-[10px] font-bold text-foreground-muted">RK</span>
                  </div>
                  <div className="flex-grow">
                    <div className="h-2 w-1/3 bg-background-secondary rounded mb-2" />
                    <div className="h-1.5 w-1/2 bg-background-secondary/50 rounded" />
                  </div>
                  <div className="px-4 py-2 bg-foreground text-white text-xs font-bold rounded-lg">
                    Sign Off
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl lg:text-5xl text-foreground mb-8"
            >
              Reconciliations, managed — not just calculated.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 text-xl text-foreground-secondary leading-relaxed"
            >
              <p>
                Every balance sheet account, every month-end. Vergo ensures that reconciliations 
                aren&apos;t just done—they&apos;re documented, reviewed, and signed off.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>Evidence attached to every account</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>AI highlights what changed since last close</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>Human sign-off workflows for every close</span>
                </li>
              </ul>
              <p className="pt-4 text-foreground font-semibold">
                &ldquo;Excel still does the math. Vergo manages the work.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
