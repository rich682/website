"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================================================================
   CONFIG
   ================================================================ */

const SCENE_COUNT = 4;
const SCENE_DURATION = 5000; // ms per scene
const sceneLabels = ["Tasks", "Requests", "AI Scan", "Reports"];

const sceneTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
  transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] as const },
};

/* ================================================================
   SCENE 1 — Monthly Close Tasks
   ================================================================ */

const closeItems = [
  { label: "Bank reconciliation", assignee: "SM" },
  { label: "AP review", assignee: "JD" },
  { label: "Journal entries", assignee: "MR" },
  { label: "Revenue recognition", assignee: "AL" },
];

function SceneMonthlyClose() {
  return (
    <div>
      {/* Mini window header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
        <span className="text-[10px] text-gray-500 font-medium">Month-End Close</span>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold text-gray-700">4/4 tasks</span>
        <div className="flex-1 h-1.5 bg-gray-200/60 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-2">
        {closeItems.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-center gap-2 bg-white/80 rounded-lg px-3 py-2 border border-white/60"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.3 }}
          >
            {/* Checkmark circle */}
            <motion.div
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
              initial={{ backgroundColor: "#E5E7EB" }}
              animate={{ backgroundColor: "#10B981" }}
              transition={{ delay: 0.8 + i * 0.4, duration: 0.3 }}
            >
              <motion.svg
                className="w-2.5 h-2.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.4, duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </motion.svg>
            </motion.div>

            <span className="text-xs text-gray-700 flex-1">{item.label}</span>
            <span className="text-[9px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
              {item.assignee}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   SCENE 2 — Send Bulk Requests
   ================================================================ */

const clients = [
  { name: "Acme Corp", initials: "AC", color: "#E8564A" },
  { name: "TechFlow Inc", initials: "TF", color: "#D97706" },
  { name: "Summit Ltd", initials: "SL", color: "#7C3AED" },
  { name: "Global Partners", initials: "GP", color: "#2563EB" },
];

function SceneBulkRequests() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <motion.div
          className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.1, 1] }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <svg className="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </motion.div>
        <div>
          <span className="text-xs font-semibold text-gray-800">Bulk Request</span>
          <motion.span
            className="block text-[10px] text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Sending to 4 clients...
          </motion.span>
        </div>
      </div>

      {/* Client cards */}
      <div className="space-y-2">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            className="flex items-center gap-2.5 bg-white/80 rounded-lg px-3 py-2 border border-white/60"
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.35, type: "spring", stiffness: 120 }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
              style={{ backgroundColor: client.color }}
            >
              {client.initials}
            </div>
            <span className="text-xs text-gray-700 flex-1">{client.name}</span>
            <motion.span
              className="text-[9px] font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
            >
              Sent
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Counter */}
      <motion.div
        className="mt-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
      >
        <span className="text-[10px] text-gray-500">4 of 4 requests sent</span>
      </motion.div>
    </div>
  );
}

/* ================================================================
   SCENE 3 — AI Scans Documents
   ================================================================ */

const documents = [
  { name: "Bank statement.pdf", type: "PDF" },
  { name: "Q4 receipts.csv", type: "CSV" },
  { name: "Client response", type: "Email" },
  { name: "Invoice batch", type: "ZIP" },
];

function SceneAIScan() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <motion.div
          className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(16, 185, 129, 0)",
              "0 0 0 4px rgba(16, 185, 129, 0.15)",
              "0 0 0 0 rgba(16, 185, 129, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
        <div>
          <span className="text-xs font-semibold text-gray-800">AI Analysis</span>
          <motion.span
            className="block text-[10px] text-emerald-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Scanning documents...
          </motion.span>
        </div>
      </div>

      {/* Document list with scan effect */}
      <div className="space-y-2 relative">
        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-0.5 bg-emerald-400/60 z-10 rounded-full"
          initial={{ top: 0, opacity: 0 }}
          animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, delay: 0.5, times: [0, 0.7, 0.85, 1] }}
        />

        {documents.map((doc, i) => (
          <motion.div
            key={doc.name}
            className="flex items-center gap-2 bg-white/80 rounded-lg px-3 py-2 border border-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
          >
            <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
              <span className="text-[8px] font-bold text-gray-500">{doc.type}</span>
            </div>
            <span className="text-xs text-gray-700 flex-1 truncate">{doc.name}</span>
            <motion.div
              className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.3, type: "spring", stiffness: 200 }}
            >
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* All verified badge */}
      <motion.div
        className="mt-2 flex justify-center"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8 }}
      >
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          All verified
        </span>
      </motion.div>
    </div>
  );
}

/* ================================================================
   SCENE 4 — Auto-Reconcile & Reports
   ================================================================ */

const ledgerItems = [
  { amount: "$2,450.00", id: "INV-041" },
  { amount: "$890.50", id: "INV-042" },
  { amount: "$3,200.00", id: "INV-043" },
];

const bankItems = [
  { amount: "$2,450.00", ref: "CHK-8812" },
  { amount: "$890.50", ref: "ACH-3301" },
  { amount: "$3,200.00", ref: "WIR-5567" },
];

function SceneReconcileReports() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-xs font-semibold text-gray-800">Auto-Reconciliation</span>
      </div>

      {/* Two-column matching */}
      <div className="flex gap-1.5 mb-3">
        {/* Ledger column */}
        <div className="flex-1 space-y-1.5">
          <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide px-1">Ledger</div>
          {ledgerItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-white/80 rounded px-2 py-1.5 border border-white/60"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              <div className="text-[10px] font-medium text-gray-700">{item.amount}</div>
              <div className="text-[9px] text-gray-400">{item.id}</div>
            </motion.div>
          ))}
        </div>

        {/* Match connectors */}
        <div className="flex flex-col items-center justify-center gap-[18px] pt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="flex items-center"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.0 + i * 0.25, duration: 0.3 }}
            >
              <div className="w-2.5 h-px bg-purple-300" />
              <motion.div
                className="w-3.5 h-3.5 rounded-full bg-purple-500 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1 + i * 0.25, type: "spring" }}
              >
                <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <div className="w-2.5 h-px bg-purple-300" />
            </motion.div>
          ))}
        </div>

        {/* Bank column */}
        <div className="flex-1 space-y-1.5">
          <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide px-1">Bank</div>
          {bankItems.map((item, i) => (
            <motion.div
              key={item.ref}
              className="bg-white/80 rounded px-2 py-1.5 border border-white/60"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <div className="text-[10px] font-medium text-gray-700">{item.amount}</div>
              <div className="text-[9px] text-gray-400">{item.ref}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Report summary card */}
      <motion.div
        className="bg-white/90 rounded-lg p-2.5 border border-purple-200/60"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.4 }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold text-gray-700">Report Ready</span>
          <span className="text-[9px] font-medium text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">
            3/3 matched
          </span>
        </div>
        <div className="flex items-end gap-1 mt-1.5 h-4">
          {[60, 85, 45, 90, 70].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-purple-400/30"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 2.5 + i * 0.08, duration: 0.3 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ================================================================
   PROGRESS INDICATOR
   ================================================================ */

function SceneProgressIndicator({
  activeScene,
  onSceneClick,
  sceneDuration,
}: {
  activeScene: number;
  onSceneClick: (index: number) => void;
  sceneDuration: number;
}) {
  return (
    <div className="mt-4 pt-3 border-t border-white/20">
      <div className="flex items-center justify-center gap-3">
        {sceneLabels.map((label, i) => (
          <button
            key={label}
            onClick={() => onSceneClick(i)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
            aria-label={`Go to scene: ${label}`}
          >
            <div className="relative w-6 h-1.5 rounded-full bg-white/30 overflow-hidden">
              {i === activeScene && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white/80 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: sceneDuration / 1000, ease: "linear" }}
                  key={`progress-${activeScene}`}
                />
              )}
              {i < activeScene && (
                <div className="absolute inset-0 bg-white/60 rounded-full" />
              )}
            </div>
            <span
              className={`text-[9px] font-medium transition-colors ${
                i === activeScene ? "text-white" : "text-white/50 group-hover:text-white/70"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */

const scenes = [SceneMonthlyClose, SceneBulkRequests, SceneAIScan, SceneReconcileReports];

export function HeroAnimation() {
  const [activeScene, setActiveScene] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % SCENE_COUNT);
    }, SCENE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, resetKey]);

  const goToScene = useCallback((index: number) => {
    setActiveScene(index);
    setResetKey((k) => k + 1);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 via-sky-300 to-rose-300">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-blue-500/40 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-rose-400/40 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-amber-300/50 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-1/4 h-1/4 bg-blue-600/30 rounded-full blur-2xl" />
      </div>

      {/* Glass card */}
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-sm bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl p-5 sm:p-6 flex flex-col"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scene content — fixed height to prevent layout shift */}
          <div className="relative min-h-[200px] sm:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeScene} {...sceneTransition}>
                {(() => {
                  const Scene = scenes[activeScene];
                  return <Scene />;
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress indicator */}
          <SceneProgressIndicator
            activeScene={activeScene}
            onSceneClick={goToScene}
            sceneDuration={SCENE_DURATION}
          />
        </motion.div>
      </div>
    </div>
  );
}
