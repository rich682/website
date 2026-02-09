"use client";

import { motion } from "framer-motion";

interface ProductMockupProps {
  variant?: "checklist" | "dashboard" | "email";
  className?: string;
}

export function ProductMockup({ variant = "checklist", className }: ProductMockupProps) {
  if (variant === "checklist") {
    return (
      <motion.div
        className={`bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Window header */}
        <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-gray-400 font-medium">Month-End Close</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Q4 Close Checklist</h3>
              <p className="text-sm text-gray-500">December 2024</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">8/12 complete</span>
              <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "66%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Checklist items */}
          <div className="space-y-3">
            {[
              { label: "Bank reconciliation", status: "complete", assignee: "Sarah M." },
              { label: "Revenue recognition", status: "complete", assignee: "John D." },
              { label: "Accrued items", status: "complete", assignee: "Sarah M." },
              { label: "Account reconciliation", status: "pending", assignee: "Mike R.", overdue: true },
              { label: "Team submissions", status: "pending", assignee: "Team" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  item.status === "complete" ? "bg-gray-50" : item.overdue ? "bg-orange-50" : "bg-white border border-gray-100"
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  item.status === "complete" 
                    ? "bg-green-500" 
                    : item.overdue 
                      ? "bg-orange-500" 
                      : "border-2 border-gray-300"
                }`}>
                  {item.status === "complete" && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {item.overdue && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4m0 4h.01" />
                    </svg>
                  )}
                </div>
                <span className={`flex-1 text-sm ${item.status === "complete" ? "text-gray-500 line-through" : "text-gray-900"}`}>
                  {item.label}
                </span>
                <span className="text-xs text-gray-400">{item.assignee}</span>
                {item.overdue && (
                  <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-0.5 rounded">Overdue</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // Default fallback
  return null;
}
