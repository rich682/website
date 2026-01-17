"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button, Container, Badge } from "@/components/ui";
import { useRef, useState, useEffect } from "react";

interface FeaturePageLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  problemTitle: string;
  problemDescription: string;
  howItWorks: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
  ctaText: string;
  icon: React.ReactNode;
}


// Checklist-specific mockup
function ChecklistMockup({ isInView }: { isInView: boolean }) {
  const items = [
    { task: "Revenue Recognition", status: "complete", assignee: "Sarah C." },
    { task: "Bank Reconciliation", status: "in_progress", assignee: "Mike J." },
    { task: "Accruals Review", status: "pending", assignee: "Lisa M." },
    { task: "Intercompany Entries", status: "pending", assignee: "Tom K." },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="font-semibold text-foreground">Month-End Close</div>
        <div className="text-sm text-foreground-secondary">1 of 4 complete</div>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.task}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary"
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              item.status === "complete" 
                ? "bg-green-500 border-green-500" 
                : item.status === "in_progress"
                ? "border-accent"
                : "border-border"
            }`}>
              {item.status === "complete" && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <div className={`text-sm font-medium ${item.status === "complete" ? "text-foreground-secondary line-through" : "text-foreground"}`}>
                {item.task}
              </div>
            </div>
            <div className="text-xs text-foreground-muted">{item.assignee}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Requests AI mockup - shows natural language AI assistant
function RequestsAIMockup({ isInView }: { isInView: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const fullText = "Send a request to all employees for their receipts to be submitted by Friday. Track replies and attachments.";
  
  useEffect(() => {
    if (!isInView) {
      return;
    }
    
    // Start typing after a short delay
    const startDelay = setTimeout(() => {
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
      }, 30);
      
      return () => clearInterval(typingInterval);
    }, 500);
    
    return () => clearTimeout(startDelay);
  }, [isInView]);

  return (
    <div className="p-6">
      {/* AI Assistant Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
          <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-indigo-600">AI Assistant</span>
      </motion.div>

      {/* Typing Area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="min-h-[80px] mb-6"
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

      {/* Divider */}
      <div className="border-t border-border my-4" />

      {/* Bottom Section */}
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-sm text-foreground-secondary">AI is ready</span>
        </motion.div>

        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-4 py-2 bg-secondary text-white text-sm font-medium rounded-lg"
          >
            Create Automation
          </motion.button>
        )}
      </div>
    </div>
  );
}

// Reminder-specific mockup - simplified, no infinite animations
function ReminderMockup({ isInView }: { isInView: boolean }) {
  const reminders = [
    { name: "Sarah M.", email: "sarah@acme.co", status: "Sent", time: "2 days ago" },
    { name: "John D.", email: "john@vendor.io", status: "Opened", time: "1 day ago" },
    { name: "Lisa K.", email: "lisa@client.com", status: "Responded", time: "Just now" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <span className="font-semibold text-foreground">Automated Reminders</span>
      </div>
      
      <div className="space-y-3">
        {reminders.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary"
          >
            <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center text-accent text-xs font-semibold">
              {item.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground">{item.name}</div>
              <div className="text-xs text-foreground-muted truncate">{item.email}</div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              item.status === "Responded" 
                ? "bg-green-100 text-green-700" 
                : item.status === "Opened"
                ? "bg-blue-100 text-blue-700"
                : "bg-amber-100 text-amber-700"
            }`}>
              {item.status}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-4 pt-4 border-t border-border text-center text-sm text-foreground-secondary"
      >
        <span className="text-accent font-medium">12 reminders</span> sent automatically this week
      </motion.div>
    </div>
  );
}

// Collect-specific mockup with attachments
function CollectMockup({ isInView }: { isInView: boolean }) {
  const items = [
    { source: "Sarah M.", type: "Receipt", status: "collected", attachment: "receipt_march.pdf" },
    { source: "Acme Corp", type: "Invoice", status: "pending", attachment: null },
    { source: "John D.", type: "Document", status: "collected", attachment: "contract_v2.pdf" },
  ];

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-xs text-foreground-muted uppercase tracking-wide mb-1">Collection Inbox</div>
        <div className="font-semibold text-foreground mb-6">Recent Submissions</div>
      </motion.div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.source}
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.3 + index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary"
          >
            {/* Status Icon */}
            <motion.div 
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                item.status === "collected" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
              }`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.4 + index * 0.15,
                type: "spring",
                stiffness: 200
              }}
            >
              {item.status === "collected" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </motion.div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground">{item.source}</div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-foreground-muted">{item.type}</span>
                {item.attachment && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.15 }}
                    className="flex items-center gap-1 text-xs text-foreground-muted"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="truncate max-w-[80px]">{item.attachment}</span>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Status Badge */}
            <motion.div 
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.status === "collected" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
              }`}
              initial={{ opacity: 0, x: 10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.15 }}
            >
              {item.status === "collected" ? "Received" : "Pending"}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Attachment summary footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="mt-4 pt-4 border-t border-border"
      >
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-foreground-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            <span><span className="font-medium text-foreground">2 attachments</span> received</span>
          </div>
          <span className="text-emerald-600 font-medium">67% complete</span>
        </div>
      </motion.div>
    </div>
  );
}

// Approvals-specific mockup
function ApprovalsMockup({ isInView }: { isInView: boolean }) {
  const approvals = [
    { item: "Q4 Budget Request", requester: "Marketing", status: "approved" },
    { item: "Vendor Contract", requester: "Operations", status: "pending" },
    { item: "Travel Request", requester: "Sarah M.", status: "approved" },
  ];

  return (
    <div className="p-6">
      <div className="font-semibold text-foreground mb-6">Approval Queue</div>
      <div className="space-y-3">
        {approvals.map((item, index) => (
          <motion.div
            key={item.item}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              item.status === "approved" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
            }`}>
              {item.status === "approved" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{item.item}</div>
              <div className="text-xs text-foreground-muted">From: {item.requester}</div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              item.status === "approved" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
            }`}>
              {item.status === "approved" ? "Approved" : "Awaiting"}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Generic mockup fallback
function GenericMockup({ isInView, icon }: { isInView: boolean; icon: React.ReactNode }) {
  return (
    <div className="p-8 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-20 h-20 rounded-2xl bg-accent-light flex items-center justify-center text-accent mx-auto mb-4"
      >
        {icon}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-foreground-secondary"
      >
        Feature visualization
      </motion.div>
    </div>
  );
}

// Feature mockup component
function FeatureMockup({ badge, icon }: { badge: string; icon: React.ReactNode }) {
  const mockupRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(mockupRef, { once: true });

  const getMockupContent = () => {
    switch (badge) {
      case "Tasks":
        return <ChecklistMockup isInView={isInView} />;
      case "Requests":
        return <RequestsAIMockup isInView={isInView} />;
      case "Automated Reminders":
        return <ReminderMockup isInView={isInView} />;
      case "Collect":
        return <CollectMockup isInView={isInView} />;
      case "Approvals":
        return <ApprovalsMockup isInView={isInView} />;
      default:
        return <GenericMockup isInView={isInView} icon={icon} />;
    }
  };

  return (
    <motion.div
      ref={mockupRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative max-w-md mx-auto lg:mx-0"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
        {getMockupContent()}
      </div>
    </motion.div>
  );
}

// Related features for cross-linking
const relatedFeatures = {
  "Tasks": [
    { name: "Requests", href: "/features/requests", description: "Ask for what you need" },
    { name: "Reminders", href: "/features/reminders", description: "Automate follow-ups" },
  ],
  "Requests": [
    { name: "Tasks", href: "/features/tasks", description: "Track work and close" },
    { name: "Collect", href: "/features/collect", description: "Gather documents" },
  ],
  "Automated Reminders": [
    { name: "Tasks", href: "/features/tasks", description: "Track work and close" },
    { name: "Approvals", href: "/features/approvals", description: "Route decisions" },
  ],
  "Collect": [
    { name: "Requests", href: "/features/requests", description: "Ask for what you need" },
    { name: "Reminders", href: "/features/reminders", description: "Automate follow-ups" },
  ],
  "Approvals": [
    { name: "Collect", href: "/features/collect", description: "Gather documents" },
    { name: "Reminders", href: "/features/reminders", description: "Automate follow-ups" },
  ],
};

export function FeaturePageLayout({
  badge,
  title,
  subtitle,
  problemTitle,
  problemDescription,
  howItWorks,
  outcomes,
  ctaText,
  icon,
}: FeaturePageLayoutProps) {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });
  const outcomesInView = useInView(outcomesRef, { once: true, margin: "-100px" });

  const related = relatedFeatures[badge as keyof typeof relatedFeatures] || [];

  return (
    <>
      <Header />
      <main>
        {/* Hero with mockup */}
        <section className="pt-32 pb-16 lg:pb-20">
          <Container size="wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <Badge variant="accent">{badge}</Badge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-serif text-4xl sm:text-5xl text-foreground mb-6"
                >
                  {title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-foreground-secondary max-w-xl mb-8"
                >
                  {subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="/demo">
                    <Button variant="primary" size="lg">
                      Book a Demo →
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Right: Mockup */}
              <FeatureMockup badge={badge} icon={icon} />
            </div>
          </Container>
        </section>

        {/* Problem Statement */}
        <section className="py-16 lg:py-20 bg-background-secondary">
          <Container size="narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
                {problemTitle}
              </h2>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                {problemDescription}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-16 lg:py-20" ref={howItWorksRef}>
          <Container size="wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                How it works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-background border border-border"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light flex items-center justify-center text-accent font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground-secondary">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Outcomes */}
        <section className="py-16 lg:py-20 bg-background-secondary" ref={outcomesRef}>
          <Container size="narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={outcomesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                What you&apos;ll achieve
              </h2>
            </motion.div>

            <div className="space-y-3">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, x: -20 }}
                  animate={outcomesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Related Features */}
        {related.length > 0 && (
          <section className="py-16 lg:py-20">
            <Container size="narrow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h2 className="font-serif text-2xl text-foreground">
                  Related features
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={feature.href}>
                      <div className="p-4 rounded-xl border border-border hover:border-accent hover:shadow-md transition-all group">
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {feature.name}
                        </h3>
                        <p className="text-sm text-foreground-secondary">{feature.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-background-orange">
          <Container size="narrow" className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl sm:text-4xl text-foreground mb-6"
            >
              Ready to see it in action?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo →
                </Button>
              </Link>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
