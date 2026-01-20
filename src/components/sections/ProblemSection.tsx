"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Work repeats across time",
    description: "Every day, week, and month is a new cycle. Managing these cycles in generic tools or spreadsheets is where chaos starts.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    label: "Generic tools don't model periods",
    description: "Tasks in Asana or Monday are 'evergreen'. Accounting work is period-specific. You need a system that understands the close calendar.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Spreadsheets + email don't scale",
    description: "Managing checklists in Excel and chasing evidence via email creates data silos. Information gets lost, and context disappears.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Evidence and judgment get lost",
    description: "Why was this reconciliation signed off? Where is the backup document? Without context, audit season is a nightmare.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-background-secondary">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8"
          >
            The bottleneck isn&apos;t the math.
            <br />
            <span className="text-foreground-secondary italic">It&apos;s managing the work.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto"
          >
            Accounting teams spend 40% of their time just managing the workflow. 
            Generic tools aren&apos;t built for the unique cadence of finance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex-shrink-0 flex items-center justify-center text-accent">
                {problem.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {problem.label}
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
