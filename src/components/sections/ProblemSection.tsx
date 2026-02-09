"use client";

import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";
import { useRef, useMemo } from "react";

/* ===== Floating chaos items — the busywork that plagues accounting teams ===== */

const chaosElements = [
  // Emails
  {
    type: "email",
    label: "RE: RE: RE: Missing W-9",
    sublabel: "3 days ago",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    type: "email",
    label: "Fwd: Invoice #4021",
    sublabel: "Unread",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    type: "email",
    label: "Where do I send this?",
    sublabel: "Client",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  // Spreadsheets
  {
    type: "spreadsheet",
    label: "Close_Checklist_v4_FINAL.xlsx",
    sublabel: "Last edited: Jan 15",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    type: "spreadsheet",
    label: "Recon_Template_2024.xlsx",
    sublabel: "47 tabs",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  // Downloads / files
  {
    type: "file",
    label: "Bank_Statement_Dec.pdf",
    sublabel: "↓ Downloading…",
    icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    type: "file",
    label: "Receipt_scan_078.jpg",
    sublabel: "↓ Downloading…",
    icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  // Slack / chat
  {
    type: "chat",
    label: "Did anyone follow up with Acme?",
    sublabel: "#accounting",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  // Manual tasks
  {
    type: "task",
    label: "Manually match 142 transactions",
    sublabel: "Overdue",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    color: "#D97706",
    bg: "#FEF9EC",
  },
  {
    type: "task",
    label: "Copy balances to recon sheet",
    sublabel: "Recurring",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    color: "#D97706",
    bg: "#FEF9EC",
  },
  // Reminder
  {
    type: "reminder",
    label: "Send 3rd follow-up to client",
    sublabel: "5 days waiting",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
];

/* Scattered positions for each card — spread across the full area */
const scatterConfigs = [
  { x: "5%",  y: "4%",   rotate: -8,  delay: 0 },
  { x: "58%", y: "2%",   rotate: 5,   delay: 0.3 },
  { x: "30%", y: "8%",   rotate: -3,  delay: 0.6 },
  { x: "75%", y: "12%",  rotate: 7,   delay: 0.15 },
  { x: "12%", y: "35%",  rotate: -6,  delay: 0.45 },
  { x: "48%", y: "28%",  rotate: 4,   delay: 0.1 },
  { x: "72%", y: "38%",  rotate: -5,  delay: 0.55 },
  { x: "25%", y: "55%",  rotate: 6,   delay: 0.25 },
  { x: "60%", y: "58%",  rotate: -4,  delay: 0.4 },
  { x: "8%",  y: "65%",  rotate: 8,   delay: 0.5 },
  { x: "45%", y: "72%",  rotate: -7,  delay: 0.35 },
];

function ChaosCard({
  item,
  config,
  index,
  isInView,
}: {
  item: (typeof chaosElements)[0];
  config: (typeof scatterConfigs)[0];
  index: number;
  isInView: boolean;
}) {
  // Each card has its own continuous floating animation
  const floatDuration = 4 + (index % 3) * 1.5;
  const floatX = 6 + (index % 4) * 3;
  const floatY = 8 + (index % 3) * 4;

  return (
    <motion.div
      className="absolute"
      style={{ left: config.x, top: config.y }}
      initial={{ opacity: 0, scale: 0.7, rotate: config.rotate * 2 }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              rotate: config.rotate,
            }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: 0.2 + config.delay,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
    >
      <motion.div
        animate={
          isInView
            ? {
                y: [-floatY, floatY, -floatY],
                x: [-floatX, floatX, -floatX],
                rotate: [config.rotate - 2, config.rotate + 2, config.rotate - 2],
              }
            : {}
        }
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: config.delay,
        }}
      >
        <div className="bg-white rounded-xl border border-gray-200 shadow-md px-3.5 py-2.5 flex items-center gap-2.5 min-w-[180px] max-w-[220px] hover:shadow-lg transition-shadow">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: item.bg, color: item.color }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-gray-800 truncate">{item.label}</p>
            <p className="text-[10px] text-gray-400 truncate">{item.sublabel}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ===== Notification pings — red dots that pulse around the chaos ===== */
function NotificationPings({ isInView }: { isInView: boolean }) {
  const pings = useMemo(
    () => [
      { x: "18%", y: "18%", delay: 1.5 },
      { x: "82%", y: "10%", delay: 2.0 },
      { x: "55%", y: "50%", delay: 2.5 },
      { x: "10%", y: "70%", delay: 1.8 },
      { x: "78%", y: "65%", delay: 2.3 },
      { x: "40%", y: "85%", delay: 2.8 },
    ],
    []
  );

  return (
    <>
      {pings.map((ping, i) => (
        <motion.div
          key={i}
          className="absolute z-10"
          style={{ left: ping.x, top: ping.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: ping.delay, type: "spring", stiffness: 200 }}
        >
          <span className="relative flex h-3 w-3">
            <motion.span
              className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
              animate={isInView ? { scale: [1, 2, 1], opacity: [0.75, 0, 0.75] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: ping.delay * 0.5 }}
            />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
          </span>
        </motion.div>
      ))}
    </>
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
            Accounting teams spend 60%+ of their time on work that is not accounting.
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

        {/* Chaos visualization — large area with floating cards */}
        <div className="relative w-full min-h-[55vh] lg:min-h-[60vh] rounded-3xl bg-gradient-to-br from-gray-50 via-white to-gray-100 border border-gray-200/60 overflow-hidden">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Notification pings */}
          <NotificationPings isInView={isInView} />

          {/* Floating chaos cards */}
          <div className="absolute inset-4 sm:inset-6 lg:inset-8">
            {chaosElements.map((item, i) => (
              <ChaosCard
                key={i}
                item={item}
                config={scatterConfigs[i]}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Center pulse — the overwhelmed accountant */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-red-100"
                animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative w-14 h-14 rounded-full bg-white border-2 border-red-200 shadow-lg flex items-center justify-center">
                <span className="text-2xl">😵‍💫</span>
              </div>
              {/* Notification count */}
              <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.6, type: "spring" }}
              >
                47
              </motion.div>
            </div>
          </motion.div>
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
