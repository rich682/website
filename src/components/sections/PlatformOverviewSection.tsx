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
    name: "Requests",
    description: "Send smart requests, track every response with AI, and automate follow-ups.",
    href: "/platform/requests",
    image: "/images/platform/requests/requests-1.png",
  },
  {
    name: "Reports",
    description: "Generate period-based reports with formulas, comparisons, and AI-powered insights.",
    href: "/platform/reports",
    image: "/images/platform/reports/reports-1.png",
  },
  {
    name: "Documents",
    description: "Collect, track, and manage every document from email, forms, or manual uploads.",
    href: "/platform/documents",
    image: "/images/platform/documents/documents-1.png",
  },
  {
    name: "Databases",
    description: "Build structured databases that power reports, requests, and workflows across the platform.",
    href: "/platform/databases",
    image: "/images/platform/databases/databases-1.png",
  },
  {
    name: "Expenses",
    description: "Streamline expense tracking, approvals, and reimbursements with AI coding.",
    href: "/platform/expenses",
    image: "/images/platform/expenses/expenses-1.png",
  },
  {
    name: "Invoices",
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
            Everything you need, in one platform.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Seven integrated modules designed specifically for accounting teams. Each one is powerful alone — together, they are transformative.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={index === platformFeatures.length - 1 ? "md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto" : ""}
            >
              <Link href={feature.href} className="block h-full group">
                <motion.div
                  className="h-full bg-background rounded-2xl border border-border overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all"
                  whileHover={{ y: -3 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.name}
                      width={640}
                      height={400}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Text content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1.5">
                      {feature.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed mb-3">
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
      </Container>
    </section>
  );
}
