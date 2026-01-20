"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const workflows = [
  {
    title: "Period Boards & Checklists",
    description: "Daily, weekly, monthly, and year-end work organized by accounting period. Boards complete and archive, preventing evergreen chaos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Collect (Intake Layer)",
    description: "Gather Documents, Invoices, and Expenses from across the organization. Automated routing ensures everything lands in the right workflow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    title: "Requests & Follow-ups",
    description: "When work depends on others, Vergo handles the chase. Automated reminders until documents are received and tied to the task.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Managed Reconciliations",
    description: "Every balance sheet account, every period. Evidence is attached automatically, with AI highlighting changes for human review.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function WorkflowSection() {
  return (
    <section className="py-24 lg:py-32 bg-background-secondary">
      <Container size="wide">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl lg:text-5xl text-foreground mb-6"
          >
            Workflows that run on your cadence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Vergo supports multiple accounting workflows in parallel, not as a linear funnel.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-6">
                {workflow.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {workflow.title}
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {workflow.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
