"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Endless email threads with no tracking",
    description: "Requests go out via email and replies get buried. There is no way to know who responded, what they sent, or what is still missing.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Manual follow-ups that get forgotten",
    description: "You make a mental note to follow up, but by the time you remember, the deadline has passed. Clients slip through the cracks every month.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    label: "Documents scattered across inboxes and drives",
    description: "W-9s in email, invoices in a shared drive, receipts in a spreadsheet. Finding the right document means searching three different places.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "No visibility into what's received vs. what's missing",
    description: "Without a central system, you cannot tell at a glance which clients have responded, which documents are complete, and what still needs attention.",
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
            Accounting teams spend 40% of their time
            <br />
            <span className="text-foreground-secondary italic">chasing clients for documents and data.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto"
          >
            The real bottleneck is not the accounting work itself. It is the endless cycle of requesting, waiting, following up, and tracking down what you need.
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
