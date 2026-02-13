"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const platformFeatures = [
  {
    name: "Task Management",
    description: "Organize work into period-based boards with AI-powered task tracking and Kanban views.",
    href: "/platform/task-management",
    image: "/images/platform/task-management/task-management-1.png",
  },
  {
    name: "Auto-Requests",
    description: "Send smart auto-requests, track every response with AI, and automate follow-ups.",
    href: "/platform/requests",
    image: "/images/platform/requests/requests-1.png",
  },
  {
    name: "Auto-Reports",
    description: "Generate period-based reports with formulas, comparisons, and AI-powered insights.",
    href: "/platform/reports",
    image: "/images/platform/reports/reports-1.png",
  },
  {
    name: "Auto-Reconcile",
    description: "Automate account reconciliations with AI-powered matching, variance detection, and period-end sign-off.",
    href: "/platform/reconciliations",
    image: "/images/platform/reconciliations/reconciliations-1.png",
  },
  {
    name: "Expense Management",
    description: "Streamline expense tracking, approvals, and reimbursements with AI coding.",
    href: "/platform/expenses",
    image: "/images/platform/expenses/expenses-1.png",
  },
  {
    name: "AP Automation",
    description: "Automate invoice processing, approval workflows, and accounting software sync.",
    href: "/platform/invoices",
    image: "/images/platform/invoices/invoices-1.png",
  },
];

export function PlatformOverviewSection() {
  return (
    <section id="platform" className="py-20 lg:py-32">
      <Container size="wide">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Close faster, track everything in one place and unlock insights.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Six integrated modules powered by one native AI engine. Each one is powerful alone — together, they are transformative.
          </motion.p>
        </div>

        {/* Wrapper container for modules + AI Analysis foundation */}
        <div className="max-w-6xl mx-auto rounded-3xl border border-emerald-200/60 bg-gradient-to-b from-emerald-50/30 via-background to-background-pastel-green/50 p-4 sm:p-6">
          {/* 6 Module Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Link href={feature.href} className="block h-full group">
                  <motion.div
                    className="h-full bg-background rounded-2xl border border-border overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all"
                    whileHover={{ y: -3 }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[3/2]">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Text content */}
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {feature.name}
                      </h3>
                      <p className="text-sm text-foreground-secondary leading-relaxed mb-2">
                        {feature.description}
                      </p>
                      <span className="text-sm font-medium text-accent group-hover:underline">
                        Learn more &rarr;
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* AI Analysis — Wide Foundation Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="mt-6"
          >
            <Link href="/platform/ai-analysis" className="block group">
              <motion.div
                className="bg-gradient-to-r from-background-secondary via-background to-background-pastel-green rounded-2xl border border-border overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all"
                whileHover={{ y: -3 }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[3/2] lg:aspect-auto lg:w-1/3 lg:min-h-[200px]">
                    <Image
                      src="/images/platform/reports/reports-1.png"
                      alt="AI Analysis"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 lg:p-6 lg:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold text-foreground">
                        AI Analysis
                      </h3>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold uppercase tracking-wide">
                        Native
                      </span>
                    </div>
                    <p className="text-sm text-foreground-secondary leading-relaxed mb-2 max-w-xl">
                      The intelligence layer powering every module. AI that learns from your data to automate coding, detect anomalies, and surface insights across your entire close.
                    </p>
                    <span className="text-sm font-medium text-accent group-hover:underline">
                      Learn more &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
