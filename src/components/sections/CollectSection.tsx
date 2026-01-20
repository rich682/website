"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const collectTypes = [
  {
    title: "Documents",
    badge: "Core Platform",
    description: "Contracts, bank statements, workbooks, and audit evidence. Attach them directly to tasks and reconciliations for context.",
    features: ["Audit-ready context", "Direct task attachment", "Searchable archive"],
    highlight: false,
  },
  {
    title: "Invoices",
    badge: "Upsell",
    description: "Vendor invoices routed through automated AP workflows. Manage approvals and payments in the same context as your close.",
    features: ["AP Automation", "Approval routing", "Payment context"],
    highlight: true,
  },
  {
    title: "Expenses",
    badge: "Upsell",
    description: "Employee receipts and card transactions. Seamless reimbursement workflows that tie evidence to the right accounting period.",
    features: ["Card sync", "Receipt capture", "Reimbursement flow"],
    highlight: false,
  },
];

export function CollectSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container size="wide">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl lg:text-5xl text-foreground mb-6"
          >
            Collect the right things — in the right workflow.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Collect is the intake layer for your entire accounting execution system. 
            Segment your evidence by workflow.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {collectTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 lg:p-10 rounded-2xl border transition-all ${
                type.highlight 
                  ? "bg-white border-foreground shadow-2xl ring-1 ring-foreground" 
                  : "bg-background border-border"
              }`}
            >
              <div className="mb-8">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                  type.highlight ? "bg-accent text-white" : "bg-background-secondary text-foreground-muted"
                }`}>
                  {type.badge}
                </span>
                <h3 className="text-2xl font-semibold text-foreground mt-4 mb-4">
                  {type.title}
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {type.description}
                </p>
              </div>

              <ul className="space-y-4 pt-8 border-t border-border">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground-secondary">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
