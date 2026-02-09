"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sparkle = (
  <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

/* ===== 1. Task Management: Kanban Board ===== */
export function KanbanIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const columns = [
    { label: "To Do", cards: [1, 2] },
    { label: "In Progress", cards: [3] },
    { label: "Done", cards: [4] },
  ];
  const cardColors = ["bg-accent/8", "bg-amber-500/8", "bg-accent/8", "bg-emerald-500/8"];

  return (
    <div ref={ref} className="bg-background-secondary rounded-2xl p-6 border border-border">
      <div className="grid grid-cols-3 gap-3">
        {columns.map((col, ci) => (
          <div key={col.label}>
            <div className="text-[10px] font-semibold text-foreground-muted uppercase tracking-wide mb-2 px-1">{col.label}</div>
            <div className="space-y-2 min-h-[80px]">
              {col.cards.map((cardId, i) => (
                <motion.div
                  key={cardId}
                  className={`h-8 rounded-lg ${cardColors[cardId - 1]} border border-border/50 flex items-center px-2`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + ci * 0.15 + i * 0.1, type: "spring" }}
                >
                  <div className="w-full flex items-center justify-between">
                    <div className="h-1.5 rounded-full bg-foreground/10 w-12" />
                    {col.label === "Done" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.2, type: "spring" }}
                      >
                        {sparkle}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* AI badge */}
      <motion.div
        className="mt-3 flex justify-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
      >
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
          {sparkle}
          <span className="ml-0.5">AI suggests next task</span>
        </span>
      </motion.div>
    </div>
  );
}

/* ===== 2. Auto-Requests: Send-and-Track Flow ===== */
export function RequestFlowIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const responses = [
    { label: "Received", color: "bg-emerald-500", dotColor: "bg-emerald-500" },
    { label: "Partial", color: "bg-amber-500", dotColor: "bg-amber-500" },
    { label: "AI Classified", color: "bg-accent", dotColor: "bg-accent", hasSparkle: true },
  ];

  return (
    <div ref={ref} className="bg-background-secondary rounded-2xl p-6 border border-border">
      {/* Envelope sending */}
      <div className="flex items-center justify-center mb-4">
        <motion.div
          className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent"
          initial={{ opacity: 1, x: 0 }}
          animate={isInView ? { opacity: [1, 1, 0], x: [0, 0, 60] } : {}}
          transition={{ duration: 1, delay: 0.3, times: [0, 0.5, 1] }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </motion.div>
        <motion.div
          className="ml-2 text-xs text-foreground-muted"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1, delay: 0.3, times: [0, 0.3, 1] }}
        >
          Sending auto-request...
        </motion.div>
      </div>

      {/* Response cards */}
      <div className="space-y-2">
        {responses.map((r, i) => (
          <motion.div
            key={r.label}
            className="flex items-center gap-2 bg-background rounded-lg border border-border/50 px-3 py-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 1.2 + i * 0.2, type: "spring" }}
          >
            <div className={`w-2 h-2 rounded-full ${r.dotColor}`} />
            <span className="text-xs font-medium text-foreground flex-1">{r.label}</span>
            {r.hasSparkle && sparkle}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ===== 3. Reports: Bar Chart Drawing ===== */
export function ReportsChartIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const bars = [
    { height: 45, color: "bg-foreground/10" },
    { height: 65, color: "bg-foreground/10" },
    { height: 55, color: "bg-foreground/10" },
    { height: 80, color: "bg-accent" },
    { height: 50, color: "bg-foreground/10" },
    { height: 70, color: "bg-foreground/10" },
  ];

  return (
    <div ref={ref} className="bg-background-secondary rounded-2xl p-6 border border-border">
      <div className="flex items-end justify-center gap-2 h-24 relative">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className={`w-8 rounded-t-md ${bar.color}`}
            initial={{ height: 0 }}
            animate={isInView ? { height: bar.height } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring", stiffness: 100 }}
          />
        ))}
        {/* AI insight tooltip */}
        <motion.div
          className="absolute -top-2 right-12"
          initial={{ opacity: 0, y: 5 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.3 }}
        >
          <div className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-0.5 rounded-full text-[10px] font-medium">
            {sparkle}
            <span>AI Insight</span>
          </div>
        </motion.div>
      </div>
      {/* X-axis labels */}
      <div className="flex justify-center gap-2 mt-2">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
          <div key={m} className="w-8 text-center text-[9px] text-foreground-muted">{m}</div>
        ))}
      </div>
    </div>
  );
}

/* ===== 4. Documents: File Collection ===== */
export function DocumentCollectionIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const docs = [
    { label: "W-9", from: { x: -80, y: -40 }, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8" },
    { label: "Invoice", from: { x: 80, y: -30 }, icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7" },
    { label: "Receipt", from: { x: -60, y: 40 }, icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1" },
    { label: "COI", from: { x: 70, y: 50 }, icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944" },
  ];

  return (
    <div ref={ref} className="bg-background-secondary rounded-2xl p-6 border border-border">
      <div className="grid grid-cols-2 gap-2">
        {docs.map((doc, i) => (
          <motion.div
            key={doc.label}
            className="bg-background rounded-lg border border-border/50 p-3 flex items-center gap-2"
            initial={{ opacity: 0, x: doc.from.x, y: doc.from.y }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15, type: "spring", stiffness: 80 }}
          >
            <div className="w-7 h-7 rounded bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={doc.icon} />
              </svg>
            </div>
            <span className="text-xs font-medium text-foreground">{doc.label}</span>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
              className="ml-auto"
            >
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ===== 5. Expenses: Receipt Scan ===== */
export function ReceiptScanIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const extractedData = [
    { label: "Vendor", value: "Acme Inc" },
    { label: "Amount", value: "$1,250.00" },
    { label: "Category", value: "Travel" },
  ];

  return (
    <div ref={ref} className="bg-background-secondary rounded-2xl p-6 border border-border">
      <div className="flex items-start gap-4">
        {/* Receipt */}
        <motion.div
          className="w-24 bg-background rounded-lg border border-border/50 p-3 flex-shrink-0 relative overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="space-y-1.5">
            <div className="h-1 bg-foreground/10 rounded-full w-full" />
            <div className="h-1 bg-foreground/10 rounded-full w-3/4" />
            <div className="h-1 bg-foreground/10 rounded-full w-full" />
            <div className="h-1 bg-foreground/10 rounded-full w-1/2" />
            <div className="h-1 bg-foreground/10 rounded-full w-full" />
            <div className="h-1.5 bg-foreground/15 rounded-full w-2/3 mt-2" />
          </div>
          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-accent/60"
            initial={{ top: 0, opacity: 0 }}
            animate={isInView ? { top: ["0%", "100%"], opacity: [0, 1, 1, 0] } : {}}
            transition={{ duration: 1.2, delay: 0.7, times: [0, 0.8, 0.9, 1] }}
          />
        </motion.div>

        {/* Extracted data */}
        <div className="flex-1 space-y-2">
          {extractedData.map((d, i) => (
            <motion.div
              key={d.label}
              className="flex items-center gap-2 bg-background rounded-lg border border-border/50 px-3 py-1.5"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 1.8 + i * 0.15, type: "spring" }}
            >
              <div className="text-[10px] text-foreground-muted w-12">{d.label}</div>
              <div className="text-xs font-medium text-foreground">{d.value}</div>
              <div className="ml-auto">{sparkle}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== 7. Invoices: Processing Pipeline ===== */
export function InvoicePipelineIllustration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stages = ["Extract", "Code", "Approve"];

  return (
    <div ref={ref} className="bg-background-secondary rounded-2xl p-6 border border-border">
      <div className="flex items-center justify-between">
        {/* Invoice icon */}
        <motion.div
          className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
          </svg>
        </motion.div>

        {/* Pipeline stages */}
        {stages.map((stage, i) => (
          <div key={stage} className="flex items-center">
            {/* Connector line */}
            <motion.div
              className="w-6 sm:w-10 h-0.5 bg-border"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.3 }}
              style={{ originX: 0 }}
            />
            {/* Stage node */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.3, type: "spring" }}
            >
              <motion.div
                className="w-9 h-9 rounded-full border-2 border-border flex items-center justify-center"
                animate={
                  isInView
                    ? {
                        borderColor: ["var(--border)", "var(--accent)", "var(--border)"],
                        backgroundColor: ["transparent", "rgba(253,69,0,0.05)", "transparent"],
                      }
                    : {}
                }
                transition={{ duration: 1, delay: 1 + i * 0.4, times: [0, 0.5, 1] }}
              >
                <span className="text-[9px] font-semibold text-foreground-muted">{i + 1}</span>
              </motion.div>
              <span className="text-[10px] font-medium text-foreground-muted mt-1">{stage}</span>
            </motion.div>
          </div>
        ))}

        {/* Final connector + checkmark */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
        >
          <div className="w-6 sm:w-10 h-0.5 bg-border" />
          <motion.div
            className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 2.2, type: "spring" }}
          >
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
