"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Container } from "@/components/ui";

const frameworkSteps = [
  {
    id: "request",
    number: "01",
    title: "Request",
    subtitle: "Ask for what you need",
    description: "Send requests to employees, vendors, or clients. Specify exactly what you need and when you need it.",
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
    id: "track",
    number: "02",
    title: "Track",
    subtitle: "See status at a glance",
    description: "Monitor who's responded, who hasn't, and what's still pending. One dashboard, complete visibility.",
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
    id: "remind",
    number: "03",
    title: "Remind",
    subtitle: "Auto follow-ups until done",
    description: "Stop writing \"just following up.\" Vergo sends intelligent reminders automatically until you get what you need.",
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
    id: "review",
    number: "04",
    title: "Review",
    subtitle: "Route for sign-off",
    description: "Route submissions to the right approvers. Track sign-offs, ensure accuracy, and keep work moving.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: "close",
    number: "05",
    title: "Close",
    subtitle: "Complete on time",
    description: "Finish your close with confidence, knowing nothing slipped through the cracks. Every item accounted for.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
];

// REQUEST MOCKUP - AI Assistant creating a request
function RequestMockup({ isActive }: { isActive: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const fullText = "Request W-9 forms from all new vendors added this quarter. Set deadline for Friday, send reminders daily.";
  
  useEffect(() => {
    if (!isActive) {
      setDisplayedText("");
      setIsTyping(false);
      setShowButton(false);
      return;
    }
    
    setIsTyping(true);
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => setShowButton(true), 300);
      }
    }, 25);
    
    return () => clearInterval(typingInterval);
  }, [isActive]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
          <div>
            <span className="text-sm font-medium text-indigo-600">AI Assistant</span>
            <p className="text-xs text-foreground-muted">Creating request...</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="min-h-[100px] mb-6"
        >
          <p className="text-lg text-foreground leading-relaxed">
            {displayedText}
            {isTyping && (
              <motion.span
                className="inline-block w-0.5 h-5 bg-foreground ml-0.5 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </p>
        </motion.div>

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <button className="px-4 py-2.5 bg-accent text-white text-sm font-medium rounded-lg">
                Send Request
              </button>
              <span className="text-xs text-foreground-muted">12 vendors will be contacted</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// TRACK MOCKUP - Dashboard view
function TrackMockup({ isActive }: { isActive: boolean }) {
  const items = [
    { name: "Acme Corp", status: "received", date: "Today" },
    { name: "TechFlow Inc", status: "pending", date: "Due Tomorrow" },
    { name: "GlobalTech", status: "received", date: "Yesterday" },
    { name: "DataSoft LLC", status: "overdue", date: "3 days late" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-5 border-b border-border">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <div className="text-xs text-foreground-muted uppercase tracking-wide">W-9 Collection</div>
            <div className="text-lg font-semibold text-foreground">Q4 Vendor Compliance</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">75%</div>
              <div className="text-xs text-foreground-muted">Complete</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-4 h-2 bg-background-secondary rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
        >
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isActive ? "75%" : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
      </div>
      <div className="p-4 space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-background-secondary"
          >
            <div className={`w-3 h-3 rounded-full ${
              item.status === "received" ? "bg-emerald-500" :
              item.status === "overdue" ? "bg-red-500" : "bg-amber-500"
            }`} />
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{item.name}</div>
            </div>
            <div className={`text-xs font-medium ${
              item.status === "received" ? "text-emerald-600" :
              item.status === "overdue" ? "text-red-600" : "text-amber-600"
            }`}>
              {item.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// REMIND MOCKUP - Automated reminders
function RemindMockup({ isActive }: { isActive: boolean }) {
  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      return;
    }
    
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 4);
    }, 2000);
    
    return () => clearInterval(timer);
  }, [isActive]);

  const reminders = [
    { day: "Day 1", action: "Initial request sent", status: "complete" },
    { day: "Day 3", action: "Gentle reminder sent", status: "complete" },
    { day: "Day 5", action: "Follow-up reminder", status: "active" },
    { day: "Day 7", action: "Final notice scheduled", status: "pending" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-5 border-b border-border">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Automated Reminder Sequence</div>
            <div className="text-xs text-foreground-muted">DataSoft LLC - W-9 Request</div>
          </div>
        </motion.div>
      </div>
      <div className="p-4">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border" />
          
          <div className="space-y-4">
            {reminders.map((reminder, index) => (
              <motion.div
                key={reminder.day}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  x: isActive ? 0 : -10,
                }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute left-2 top-1.5 w-4 h-4 rounded-full border-2 ${
                    index <= currentStep 
                      ? "bg-amber-500 border-amber-500" 
                      : "bg-white border-border"
                  }`}
                  animate={index === currentStep ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, repeat: index === currentStep ? Infinity : 0 }}
                />
                
                <div className={`p-3 rounded-lg ${
                  index === currentStep 
                    ? "bg-amber-50 border border-amber-200" 
                    : "bg-background-secondary"
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-600">{reminder.day}</span>
                    {index < currentStep && (
                      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-foreground mt-1">{reminder.action}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// REVIEW MOCKUP - Approval workflow
function ReviewMockup({ isActive }: { isActive: boolean }) {
  const approvals = [
    { item: "Acme Corp W-9", reviewer: "Sarah M.", status: "approved", avatar: "SM" },
    { item: "TechFlow Invoice", reviewer: "Mike J.", status: "pending", avatar: "MJ" },
    { item: "Q4 Budget Variance", reviewer: "Lisa T.", status: "approved", avatar: "LT" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-5 border-b border-border">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
        >
          <div className="text-xs text-foreground-muted uppercase tracking-wide">Approval Queue</div>
          <div className="text-lg font-semibold text-foreground">Awaiting Sign-off</div>
        </motion.div>
      </div>
      <div className="p-4 space-y-3">
        {approvals.map((item, index) => (
          <motion.div
            key={item.item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.15 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-background-secondary"
          >
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">
              {item.avatar}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{item.item}</div>
              <div className="text-xs text-foreground-muted">Reviewer: {item.reviewer}</div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0 }}
              transition={{ delay: 0.4 + index * 0.15, type: "spring" }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                item.status === "approved" 
                  ? "bg-emerald-100 text-emerald-700" 
                  : "bg-purple-100 text-purple-700"
              }`}
            >
              {item.status === "approved" ? "✓ Approved" : "Pending"}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// CLOSE MOCKUP - Completion summary
function CloseMockup({ isActive }: { isActive: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isActive ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5"
          >
            <motion.svg 
              className="w-10 h-10 text-emerald-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </motion.svg>
          </motion.div>
          
          <h3 className="text-xl font-semibold text-foreground mb-2">Close Complete</h3>
          <p className="text-sm text-foreground-secondary mb-6">All items accounted for</p>
          
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Requests", value: "24", color: "text-indigo-600" },
              { label: "Reminders", value: "47", color: "text-amber-600" },
              { label: "Approvals", value: "18", color: "text-purple-600" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-background-secondary rounded-xl p-4"
              >
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-foreground-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ delay: 0.8 }}
        className="px-6 py-4 bg-emerald-50 border-t border-emerald-100"
      >
        <div className="flex items-center justify-center gap-2 text-emerald-700 text-sm font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Completed 2 days ahead of schedule
        </div>
      </motion.div>
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
      case "request": return <RequestMockup isActive={true} />;
      case "track": return <TrackMockup isActive={true} />;
      case "remind": return <RemindMockup isActive={true} />;
      case "review": return <ReviewMockup isActive={true} />;
      case "close": return <CloseMockup isActive={true} />;
      default: return null;
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background-secondary">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            From request to resolution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            You focus on the books. Vergo handles the follow-ups.
          </motion.p>
        </div>

        {/* Main content - Left steps, Right mockup */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Vertical steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            {frameworkSteps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={`w-full text-left p-5 rounded-2xl transition-all group ${
                  activeStep === step.id
                    ? "bg-white shadow-lg border-2 border-accent"
                    : "bg-white/50 border-2 border-transparent hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Step number */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeStep === step.id
                      ? "bg-accent text-white"
                      : `${step.lightColor} ${step.textColor} group-hover:bg-accent group-hover:text-white`
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-foreground-muted">{step.number}</span>
                      <h3 className={`text-lg font-semibold transition-colors ${
                        activeStep === step.id ? "text-accent" : "text-foreground"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-foreground-secondary">{step.subtitle}</p>
                    
                    {/* Expanded description */}
                    <AnimatePresence>
                      {activeStep === step.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-foreground-secondary mt-3 leading-relaxed"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Arrow indicator */}
                  <motion.div 
                    className={`flex-shrink-0 transition-colors ${
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
            
            {/* Bottom tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-accent/10 text-accent text-sm font-medium w-fit">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Automated from start to finish
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:sticky lg:top-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                {renderMockup()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
