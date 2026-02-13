"use client";

import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";
import { useRef } from "react";

/* ===== Pain point rows — the busywork that drains accounting teams ===== */

const painPoints = [
  {
    category: "Email Overload",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#DC2626",
    bg: "#FEF2F2",
    items: [
      { label: "RE: RE: RE: Missing W-9", detail: "3 days ago" },
      { label: "Fwd: Invoice #4021", detail: "Unread" },
      { label: "Where do I send this?", detail: "Client" },
      { label: "Send 3rd follow-up", detail: "5 days waiting" },
    ],
  },
  {
    category: "Spreadsheet Chaos",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7",
    color: "#16A34A",
    bg: "#F0FDF4",
    items: [
      { label: "Close_Checklist_v4_FINAL.xlsx", detail: "Last edited: Jan 15" },
      { label: "Recon_Template_2024.xlsx", detail: "47 tabs" },
      { label: "Copy balances to recon sheet", detail: "Recurring" },
    ],
  },
  {
    category: "Manual Tasks",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    color: "#D97706",
    bg: "#FEF9EC",
    items: [
      { label: "Manually match 142 transactions", detail: "Overdue" },
      { label: "Download bank statement", detail: "Monthly" },
      { label: "Reconcile 3 accounts", detail: "Due tomorrow" },
    ],
  },
];

function PainPointRow({
  group,
  index,
  isInView,
}: {
  group: (typeof painPoints)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: group.bg, color: group.color }}
        >
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d={group.icon} />
          </svg>
        </div>
        <span className="text-sm font-semibold text-foreground">{group.category}</span>
        <span className="ml-auto text-[11px] font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
          {group.items.length} items
        </span>
      </div>

      {/* Items list */}
      <div className="space-y-0">
        {group.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.4 + index * 0.15 + i * 0.08 }}
            className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0"
          >
            <span className="text-sm text-gray-700 truncate pr-4">{item.label}</span>
            <span className="text-[11px] text-gray-400 flex-shrink-0">{item.detail}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background-secondary overflow-hidden">
      <Container size="wide">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Accounting teams spend 60%+ of their time
            <br />
            on work that&apos;s not actually accounting.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            This is what your team&apos;s day actually looks like.
          </motion.p>
        </div>

        {/* Pain point cards — structured grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {painPoints.map((group, i) => (
            <PainPointRow key={group.category} group={group} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg lg:text-xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto mt-10 lg:mt-14"
        >
          Chasing emails, copying data between spreadsheets, manually downloading statements, sending follow-up after follow-up. <span className="text-foreground font-medium">Vergo handles all of it</span> so your team can focus on what they were hired to do.
        </motion.p>
      </Container>
    </section>
  );
}
