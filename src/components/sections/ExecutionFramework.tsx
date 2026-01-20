"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Container } from "@/components/ui";

const framework = [
  {
    id: "checklists",
    title: "Checklists",
    subtitle: "The starting point for every close.",
    description: "Organize daily, weekly, and monthly work into structured checklists. Know exactly what needs to be done before the close starts.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "requests",
    title: "Requests",
    subtitle: "When work depends on others.",
    description: "Send automated requests for anything you need from vendors, clients, or employees. Responses are tied directly to the work.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "evidence",
    title: "Evidence",
    subtitle: "Documents, Invoices, and Expenses.",
    description: "A single intake layer for all evidence. Vergo routes everything from bank statements to employee receipts into the right workflow automatically.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    id: "reminders",
    title: "Reminders",
    subtitle: "Automated follow-ups until done.",
    description: "Vergo handles the chase. Intelligent nudges and escalations ensure you get what you need on time, without the manual effort.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    id: "reconciliations",
    title: "Reconciliations",
    subtitle: "Managed sign-offs for every account.",
    description: "Review and sign off on balance sheet reconciliations with evidence attached. Human judgment assisted by AI context.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function ExecutionFramework() {
  const [activeTab, setActiveTab] = useState(framework[0].id);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background overflow-hidden">
      <Container size="wide">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
          >
            The framework for accounting execution.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Vergo replaces scattered spreadsheets and email chains with a unified system 
            built for the accounting cadence.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left: Clean Tabs */}
          <div className="w-full lg:w-1/2 space-y-4">
            {framework.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`w-full text-left p-6 rounded-2xl transition-all relative overflow-hidden ${
                  activeTab === item.id
                    ? "bg-background-secondary border-border"
                    : "hover:bg-background-secondary/50"
                } border border-transparent`}
              >
                {activeTab === item.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-y-0 left-0 w-1 bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center transition-colors ${
                    activeTab === item.id ? "text-accent" : "text-foreground-muted"
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors ${
                      activeTab === item.id ? "text-foreground" : "text-foreground-secondary"
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm transition-colors ${
                      activeTab === item.id ? "text-foreground-secondary" : "text-foreground-muted"
                    }`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Focused Mockup with Animation */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-background-pastel-orange rounded-3xl p-1 lg:p-12 border border-border relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full w-full flex flex-col justify-center"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-border p-8 overflow-hidden">
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      {framework.find(f => f.id === activeTab)?.title}
                    </h4>
                    <p className="text-foreground-secondary leading-relaxed mb-8">
                      {framework.find(f => f.id === activeTab)?.description}
                    </p>
                    
                    {/* Placeholder for specific animation/mockup details */}
                    <div className="h-48 bg-background-secondary rounded-xl border border-dashed border-border flex items-center justify-center italic text-foreground-muted text-sm">
                      {activeTab} visualization...
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
