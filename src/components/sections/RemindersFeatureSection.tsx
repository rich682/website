"use client";

import { motion, useInView } from "framer-motion";
import { Container, Badge } from "@/components/ui";
import { AISparkle, AIBadge } from "@/components/ui/AISparkle";
import Link from "next/link";
import { useRef } from "react";

type ReminderStatus = "sent" | "opened" | "responded" | "scheduled";

interface ReminderItem {
  id: number;
  recipient: string;
  email: string;
  subject: string;
  status: ReminderStatus;
  time: string;
}

const reminderItems: ReminderItem[] = [
  { id: 1, recipient: "Sarah Chen", email: "sarah@company.com", subject: "Missing Q4 receipts", status: "responded", time: "2h ago" },
  { id: 2, recipient: "Mike Johnson", email: "mike@vendor.com", subject: "Invoice #4521 needed", status: "opened", time: "4h ago" },
  { id: 3, recipient: "Lisa Martinez", email: "lisa@client.com", subject: "Bank statement request", status: "sent", time: "Just now" },
  { id: 4, recipient: "Tom Wilson", email: "tom@company.com", subject: "Timesheet approval", status: "scheduled", time: "In 2h" },
];

const statusConfig: Record<ReminderStatus, { color: string; icon: React.ReactNode; label: string }> = {
  sent: {
    color: "bg-blue-50 text-blue-600",
    icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
    label: "Sent",
  },
  opened: {
    color: "bg-amber-50 text-amber-600",
    icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" /></svg>,
    label: "Opened",
  },
  responded: {
    color: "bg-green-50 text-green-600",
    icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
    label: "Responded",
  },
  scheduled: {
    color: "bg-purple-50 text-purple-600",
    icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    label: "Scheduled",
  },
};

function RemindersMockup({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <AISparkle size="md" />
      
      <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-accent"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </motion.div>
              <span className="font-semibold text-foreground">Automated Reminders</span>
            </div>
            <div className="text-sm text-foreground-secondary">Today</div>
          </div>
        </div>
        
        {/* Reminder items */}
        <div className="divide-y divide-border">
          {reminderItems.map((item, index) => {
            const config = statusConfig[item.status];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="p-4 hover:bg-background-secondary transition-colors"
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-medium text-sm flex-shrink-0">
                    {item.recipient.split(" ").map(n => n[0]).join("")}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground text-sm">{item.recipient}</span>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
                        {config.icon}
                        {config.label}
                      </span>
                    </div>
                    <div className="text-sm text-foreground-secondary truncate">{item.subject}</div>
                    <div className="text-xs text-foreground-muted mt-1">{item.email}</div>
                  </div>
                  
                  {/* Time */}
                  <div className="text-xs text-foreground-muted whitespace-nowrap">{item.time}</div>
                </div>
                
                {/* Flying email animation for "sent" status */}
                {item.status === "sent" && (
                  <motion.div
                    className="absolute right-0 top-1/2"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1.5, delay: 1 + index * 0.3, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <div className="w-6 h-4 bg-accent rounded shadow-lg" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
        
        {/* Footer stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="px-5 py-3 bg-background-secondary border-t border-border"
        >
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span className="text-foreground-muted">
                <span className="text-accent font-semibold">12</span> sent today
              </span>
              <span className="text-foreground-muted">
                <span className="text-green-600 font-semibold">89%</span> response rate
              </span>
            </div>
            <motion.span
              className="text-accent font-medium flex items-center gap-1"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              AI Active
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function RemindersFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background-secondary" ref={sectionRef}>
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mockup */}
          <RemindersMockup isInView={isInView} />
          
          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <AIBadge>Automated Reminders</AIBadge>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
            >
              Stop writing &ldquo;just following up.&rdquo;
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-foreground-secondary mb-8"
            >
              Vergo sends personalized reminders automatically, tracks who&apos;s responded, 
              and escalates when deadlines pass. You get responses without being the bad guy.
            </motion.p>
            
            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {[
                "Set custom reminder schedules",
                "Personalize with your data",
                "Track opens and responses",
                "Auto-escalate overdue items",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link 
                href="/features/reminders" 
                className="inline-flex items-center text-accent font-medium hover:underline"
              >
                Learn more about Reminders
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
