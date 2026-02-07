"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import Link from "next/link";

function InboxMockup() {
  const messages = [
    {
      sender: "Sarah M.",
      initials: "SM",
      board: "Q4 Close",
      task: "W-9 Collection",
      preview: "Hi, attached is the W-9 form you requested...",
      classification: "Data Received",
      classColor: "bg-emerald-100 text-emerald-700",
      completion: 95,
      risk: "Low",
      riskColor: "bg-emerald-100 text-emerald-700",
      time: "2m ago",
    },
    {
      sender: "John D.",
      initials: "JD",
      board: "Monthly Close",
      task: "Invoice Submission",
      preview: "I have a question about the format you need...",
      classification: "Question",
      classColor: "bg-blue-100 text-blue-700",
      completion: 30,
      risk: "Medium",
      riskColor: "bg-amber-100 text-amber-700",
      time: "15m ago",
    },
    {
      sender: "Acme Corp",
      initials: "AC",
      board: "Year-End",
      task: "COI Request",
      preview: "We will send the certificate next week...",
      classification: "Acknowledgment",
      classColor: "bg-purple-100 text-purple-700",
      completion: 10,
      risk: "High",
      riskColor: "bg-red-100 text-red-700",
      time: "1h ago",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      {/* Inbox header */}
      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-semibold text-foreground">AI Inbox</span>
        </div>
        <span className="text-xs text-foreground-muted">3 unread</span>
      </div>

      {/* Messages */}
      <div className="divide-y divide-border">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.sender}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
            className="px-5 py-3.5 hover:bg-background-secondary/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-semibold flex-shrink-0 mt-0.5">
                {msg.initials}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-medium text-foreground">{msg.sender}</span>
                  <span className="text-[10px] text-foreground-muted">{msg.time}</span>
                </div>
                <div className="text-xs text-foreground-muted mb-1.5 truncate">{msg.preview}</div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${msg.classColor}`}>
                    {msg.classification}
                  </span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${msg.riskColor}`}>
                    {msg.risk} Risk
                  </span>
                  {/* Completion ring */}
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" fill="none" stroke="#E5E5E5" strokeWidth="2" />
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        fill="none"
                        stroke={msg.completion >= 80 ? "#22C55E" : msg.completion >= 40 ? "#F59E0B" : "#EF4444"}
                        strokeWidth="2"
                        strokeDasharray={`${msg.completion * 0.503} 50.3`}
                        strokeLinecap="round"
                        transform="rotate(-90 10 10)"
                      />
                    </svg>
                    <span className="text-[10px] text-foreground-muted">{msg.completion}%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI suggested action bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.1 }}
        className="px-5 py-3 bg-accent/5 border-t border-border flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <span className="text-xs font-medium text-accent">AI suggests: Mark &quot;W-9 Collection&quot; complete</span>
        </div>
        <button className="text-[10px] font-medium text-accent bg-accent/10 px-2 py-1 rounded">Accept</button>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              Stop chasing.
              <br />
              Start closing.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-foreground-secondary max-w-lg mb-8 leading-relaxed"
            >
              AI-powered request tracking for accounting teams. Send smart requests, track responses automatically, and close tasks faster.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="https://app.tryvergo.com/signup">
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign Up Free
                </motion.button>
              </Link>
              <Link href="https://app.tryvergo.com/demo">
                <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-background-secondary transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Demo
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex items-center gap-4 text-sm text-foreground-muted"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free for 2 users
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No client login needed
              </span>
            </motion.div>
          </div>

          {/* Right content - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <InboxMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
