"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
import Link from "next/link";

const comparison = [
  {
    feature: "Modeled for the month-end close",
    manual: "Spreadsheet per close",
    generic: "No close-based logic (evergreen)",
    vergo: "Native close boards",
  },
  {
    feature: "Evidence capture",
    manual: "Buried in email threads",
    generic: "Stored in generic comments",
    vergo: "Tied directly to tasks/recs",
  },
  {
    feature: "Close-specific automation",
    manual: "Manual follow-up",
    generic: "Basic status changes",
    vergo: "Automated chasing & validation",
  },
  {
    feature: "Reconciliation management",
    manual: "Excel calculations only",
    generic: "Generic checklist items",
    vergo: "Full sign-off & audit trail",
  },
];

export function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <Container size="wide">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl lg:text-5xl text-foreground mb-6"
          >
            Built for accounting — not generic task management.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Generic tools don&apos;t understand the accounting close. Vergo does.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-6 px-4 text-left font-semibold text-foreground-secondary">Feature</th>
                <th className="py-6 px-4 text-center font-semibold text-foreground-secondary">Manual / Excel</th>
                <th className="py-6 px-4 text-center font-semibold text-foreground-secondary">Asana / Monday</th>
                <th className="py-6 px-4 text-center font-bold text-foreground bg-accent/5 rounded-t-2xl">Vergo</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-6 px-4 font-medium text-foreground">{row.feature}</td>
                  <td className="py-6 px-4 text-center text-sm text-foreground-secondary">{row.manual}</td>
                  <td className="py-6 px-4 text-center text-sm text-foreground-secondary">{row.generic}</td>
                  <td className="py-6 px-4 text-center text-sm font-semibold text-foreground bg-accent/5 last:rounded-b-2xl">{row.vergo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="text-center mt-16">
          <Link href="/comparison">
            <Button variant="outline" size="lg">
              See how Vergo compares
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
