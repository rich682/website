"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Container } from "@/components/ui";

const frameworkSteps = [
  {
    id: "checklists",
    number: "01",
    title: "Checklists",
    subtitle: "The starting point for every close.",
    description: "Organize daily, weekly, and monthly work into structured checklists. Know exactly what needs to be done before the close starts.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: "requests",
    number: "02",
    title: "Requests",
    subtitle: "When work depends on others.",
    description: "Send automated requests for anything you need from vendors, clients, or employees. Responses are tied directly to the work.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
  {
    id: "evidence",
    number: "03",
    title: "Evidence",
    subtitle: "Documents, Invoices, and Expenses.",
    description: "A single intake layer for all evidence. Vergo routes everything from bank statements to employee receipts into the right workflow automatically.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    id: "reminders",
    number: "04",
    title: "Reminders",
    subtitle: "Automated follow-ups until done.",
    description: "Vergo handles the chase. Intelligent nudges and escalations ensure you get what you need on time, without the manual effort.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    id: "reconciliations",
    number: "05",
    title: "Reconciliations",
    subtitle: "Managed sign-offs for every account.",
    description: "Review and sign off on balance sheet reconciliations with evidence attached. Human judgment assisted by AI context.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
];

// MOCKUPS

function ChecklistsMockup({ isActive }: { isActive: boolean }) {
  const items = [
    { task: "Monthly Revenue Recognition", status: "complete", date: "Jan 12" },
    { task: "Fixed Asset Depreciation", status: "pending", date: "Jan 15" },
    { task: "Prepaid Expense Amortization", status: "pending", date: "Jan 15" },
    { task: "Payroll Tax Accrual", status: "complete", date: "Jan 10" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-5 border-b border-border bg-blue-50/30">
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">Jan 2025 Close</div>
          <div className="px-2 py-1 bg-white rounded border border-blue-100 text-[10px] font-bold text-blue-600">IN PROGRESS</div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.task}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl border border-border/50"
          >
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
              item.status === "complete" ? "bg-blue-500 border-blue-500" : "bg-white border-border"
            }`}>
              {item.status === "complete" && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <div className={`text-sm font-medium ${item.status === "complete" ? "text-foreground-muted line-through" : "text-foreground"}`}>
                {item.task}
              </div>
            </div>
            <div className="text-[10px] text-foreground-muted font-mono">{item.date}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RequestsMockup({ isActive }: { isActive: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
          <div>
            <span className="text-sm font-medium text-indigo-600">AI Request Engine</span>
            <p className="text-xs text-foreground-muted">Generating sequence...</p>
          </div>
        </div>

        <div className="bg-background-secondary p-4 rounded-xl mb-6">
          <p className="text-sm text-foreground leading-relaxed italic">
            &ldquo;Hi Acme Corp, we&apos;re closing our books for December. Could you please provide the latest service agreement and the W-9 form?&rdquo;
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-foreground-muted">
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-white rounded border border-border">Email</span>
            <span className="px-2 py-1 bg-white rounded border border-border">Portal</span>
          </div>
          <div className="font-medium text-indigo-600">Active Sequence</div>
        </div>
      </div>
    </div>
  );
}

function EvidenceMockup({ isActive }: { isActive: boolean }) {
  const types = [
    { label: "Bank Statement", type: "Document", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "AWS Invoice #402", type: "Invoice", color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Starbucks Receipt", type: "Expense", color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-5 border-b border-border bg-orange-50/20">
        <div className="text-sm font-bold text-orange-600 uppercase tracking-wider">Intake Layer</div>
      </div>
      <div className="p-4 space-y-3">
        {types.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-xl bg-background-secondary"
          >
            <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
              <svg className={`w-5 h-5 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-foreground truncate">{item.label}</div>
              <div className="text-[10px] text-foreground-muted uppercase tracking-tighter">{item.type}</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center">
              <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RemindersMockup({ isActive }: { isActive: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <div className="text-xs font-bold text-foreground-muted uppercase tracking-widest">Automation Active</div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-amber-600">D1</span>
            </div>
            <div className="flex-1 p-3 bg-background-secondary rounded-lg rounded-tl-none text-sm">
              Request sent to vendor.
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-amber-600">D3</span>
            </div>
            <div className="flex-1 p-3 bg-amber-50 border border-amber-100 rounded-lg rounded-tl-none text-sm text-amber-900">
              Automatic nudge sent via Slack.
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-white">D5</span>
            </div>
            <div className="flex-1 p-3 bg-accent text-white rounded-lg rounded-tl-none text-sm font-medium shadow-lg">
              Escalated to Controller.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ReconciliationsMockup({ isActive }: { isActive: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-5 border-b border-border bg-emerald-50/30">
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider">Rec: 1020 · Chase Operating</div>
          <div className="px-2 py-1 bg-emerald-500 text-white rounded text-[10px] font-bold">MATCHED</div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-foreground-secondary">General Ledger</span>
            <span className="font-mono font-bold">$142,500.00</span>
          </div>
          <div className="flex justify-between text-sm border-b border-border pb-4">
            <span className="text-foreground-secondary">Statement</span>
            <span className="font-mono font-bold">$142,500.00</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-background-secondary rounded-xl mb-6">
          <div className="w-8 h-8 rounded bg-white border border-border flex items-center justify-center">
            <svg className="w-4 h-4 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="text-[10px] font-medium text-foreground-secondary">Evidence: BankStatement_Dec24.pdf</div>
        </div>

        <button className="w-full py-3 bg-foreground text-white rounded-lg text-sm font-bold tracking-wide">
          SIGN OFF CLOSE
        </button>
      </div>
    </div>
  );
}

export function FrameworkSection() {
  const [activeStep, setActiveStep] = useState(frameworkSteps[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const currentStep = frameworkSteps.find(s => s.id === activeStep) || frameworkSteps[0];

  const renderMockup = () => {
    switch (activeStep) {
      case "checklists": return <ChecklistsMockup isActive={true} />;
      case "requests": return <RequestsMockup isActive={true} />;
      case "evidence": return <EvidenceMockup isActive={true} />;
      case "reminders": return <RemindersMockup isActive={true} />;
      case "reconciliations": return <ReconciliationsMockup isActive={true} />;
      default: return null;
    }
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6"
          >
            The framework for accounting execution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-foreground-secondary max-w-3xl mx-auto"
          >
            Vergo replaces scattered spreadsheets and email chains with a unified system 
            built for the accounting cadence.
          </motion.p>
        </div>

        {/* Main content - Left steps, Right mockup */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Vertical steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            {frameworkSteps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={`w-full text-left p-6 rounded-2xl transition-all group border-2 ${
                  activeStep === step.id
                    ? "bg-white shadow-2xl border-foreground ring-1 ring-foreground"
                    : "bg-background-secondary border-transparent hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-5">
                  {/* Step number */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeStep === step.id
                      ? "bg-foreground text-white"
                      : `${step.lightColor} ${step.textColor} group-hover:bg-foreground group-hover:text-white`
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold font-mono text-foreground-muted uppercase tracking-widest">{step.number}</span>
                      <h3 className={`text-xl font-bold transition-colors ${
                        activeStep === step.id ? "text-foreground" : "text-foreground-secondary"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className={`text-sm transition-colors ${
                      activeStep === step.id ? "text-foreground" : "text-foreground-secondary"
                    } font-medium mb-1`}>{step.subtitle}</p>
                    
                    {/* Expanded description */}
                    <AnimatePresence>
                      {activeStep === step.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-foreground-secondary mt-4 leading-relaxed"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Arrow indicator */}
                  <motion.div 
                    className={`flex-shrink-0 transition-colors mt-1 ${
                      activeStep === step.id ? "text-accent" : "text-foreground-muted"
                    }`}
                    animate={{ x: activeStep === step.id ? 4 : 0 }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Mockup */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="relative">
              {/* Background decorative blob */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-accent/5 via-transparent to-transparent blur-3xl rounded-full -z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {renderMockup()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
