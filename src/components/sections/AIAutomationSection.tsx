"use client";

import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";
import { AISparkle, AIBadge } from "@/components/ui/AISparkle";
import { useRef } from "react";

type ChecklistStatus = "pending" | "reminder_sent" | "escalated" | "auto_collecting";

interface ChecklistItem {
  id: number;
  task: string;
  assignee: string;
  dueIn: string;
  status: ChecklistStatus;
  aiAction: string | null;
}

// Simulated checklist items with AI automation states
const checklistItems: ChecklistItem[] = [
  {
    id: 1,
    task: "Q4 Revenue Recognition",
    assignee: "Sarah Chen",
    dueIn: "2 days",
    status: "pending",
    aiAction: null,
  },
  {
    id: 2,
    task: "Bank Reconciliation - Operating",
    assignee: "Mike Johnson",
    dueIn: "Tomorrow",
    status: "reminder_sent",
    aiAction: "Reminder sent automatically",
  },
  {
    id: 3,
    task: "Document Collection - Acme Corp",
    assignee: "External: accounts@acme.com",
    dueIn: "Overdue",
    status: "escalated",
    aiAction: "Escalated to manager",
  },
  {
    id: 4,
    task: "Team Receipts Collection",
    assignee: "Team (12 pending)",
    dueIn: "3 days",
    status: "auto_collecting",
    aiAction: "Auto-collecting documents",
  },
];

// Animated checklist item
function ChecklistItemRow({ 
  item, 
  index, 
  isInView 
}: { 
  item: ChecklistItem; 
  index: number; 
  isInView: boolean;
}) {
  const statusColors = {
    pending: "bg-gray-100 text-gray-600",
    reminder_sent: "bg-amber-50 text-amber-600",
    escalated: "bg-red-50 text-red-600",
    auto_collecting: "bg-accent/10 text-accent",
  };

  const statusIcons = {
    pending: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    reminder_sent: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    escalated: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    auto_collecting: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
      className="relative"
    >
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border hover:border-accent/50 transition-colors">
        {/* Checkbox */}
        <div className="w-5 h-5 rounded border-2 border-border flex-shrink-0" />
        
        {/* Task info */}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-foreground truncate">{item.task}</div>
          <div className="text-sm text-foreground-secondary truncate">{item.assignee}</div>
        </div>
        
        {/* Due date */}
        <div className={`text-sm font-medium ${item.dueIn === "Overdue" ? "text-red-600" : "text-foreground-secondary"}`}>
          {item.dueIn}
        </div>
        
        {/* Status indicator */}
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}>
          {statusIcons[item.status]}
          <span className="hidden sm:inline">{item.status.replace("_", " ")}</span>
        </div>
      </div>
      
      {/* AI Action indicator */}
      {item.aiAction && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, delay: 0.6 + index * 0.15 }}
          className="absolute -right-2 -top-2"
        >
          <div className="relative">
            <AISparkle size="sm" />
            <motion.div
              className="flex items-center gap-1 px-2 py-1 bg-accent text-white text-xs font-medium rounded-full shadow-lg"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              {item.aiAction}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// Animated email being sent
function AnimatedEmail({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className="absolute -right-4 top-1/2 -translate-y-1/2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { 
        opacity: [0, 1, 1, 0],
        x: [-20, 0, 20, 60],
      } : { opacity: 0 }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    >
      <div className="w-8 h-6 bg-accent rounded shadow-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </motion.div>
  );
}

export function AIAutomationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background-secondary overflow-hidden" ref={sectionRef}>
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <AIBadge>AI-Powered Automation</AIBadge>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
            >
              Intelligent reminders that know when to nudge.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-foreground-secondary mb-8"
            >
              Vergo watches your checklist deadlines and automatically sends reminders, 
              escalates overdue items, and collects what you need — so you can focus on 
              the work that actually requires your expertise.
            </motion.p>
            
            {/* AI capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { icon: "⏰", text: "Auto-sends reminders before deadlines" },
                { icon: "📈", text: "Escalates to managers when items are overdue" },
                { icon: "📧", text: "Personalizes messages with your data" },
                { icon: "🔄", text: "Tracks responses and updates status automatically" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Right: Animated checklist mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Floating sparkles around the mockup */}
            <AISparkle size="lg" />
            
            {/* Mockup container */}
            <div className="relative bg-background-secondary rounded-2xl p-6 border border-border shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-foreground-muted">Month-End Close</div>
                  <div className="text-lg font-semibold text-foreground">December 2024</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm text-foreground-secondary">4 of 12 complete</span>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="h-2 bg-border rounded-full mb-6 overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "33%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </div>
              
              {/* Checklist items */}
              <div className="space-y-3 relative">
                {checklistItems.map((item, index) => (
                  <ChecklistItemRow key={item.id} item={item} index={index} isInView={isInView} />
                ))}
                
                {/* Animated email flying out */}
                <AnimatedEmail isInView={isInView} />
              </div>
              
              {/* AI status bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-6 pt-4 border-t border-border"
              >
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-accent">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                      </svg>
                    </motion.div>
                    <span>AI actively monitoring 8 items</span>
                  </div>
                  <span className="text-foreground-muted">3 reminders sent today</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
