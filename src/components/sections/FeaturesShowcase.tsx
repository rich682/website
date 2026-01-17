"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Container, Badge } from "@/components/ui";
import Link from "next/link";

const features = [
  {
    id: "tasks",
    name: "Tasks",
    tagline: "Month-end close, finally under control",
    description: "One list. Every task. Complete visibility. Track what's done, what's pending, and what's overdue.",
    href: "/features/tasks",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    items: [
      { task: "Revenue Recognition", owner: "Sarah C.", status: "complete" },
      { task: "Bank Reconciliation", owner: "Mike J.", status: "in_progress" },
      { task: "Intercompany Eliminations", owner: "Lisa M.", status: "pending" },
      { task: "Fixed Asset Roll-forward", owner: "Tom K.", status: "pending" },
    ],
    mockup: "tasks",
  },
  {
    id: "requests",
    name: "Requests",
    tagline: "Ask once. Get what you need.",
    description: "Send requests for documents, information, or action to anyone — employees, vendors, or clients.",
    href: "/features/requests",
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    items: [
      { recipient: "Sarah M.", request: "Q4 Sales Report", status: "sent", due: "Tomorrow" },
      { recipient: "Acme Corp", request: "Updated W-9", status: "received", due: "Completed" },
      { recipient: "Finance Team", request: "Budget Variance", status: "pending", due: "In 3 days" },
    ],
    mockup: "requests",
  },
  {
    id: "collect",
    name: "Collect",
    tagline: "Get what you need, from anyone",
    description: "Gather receipts, invoices, and documents from employees, vendors, or clients — all in one place.",
    href: "/features/collect",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    items: [
      { source: "Sarah M.", type: "Receipt", status: "received" },
      { source: "Acme Corp", type: "Invoice", status: "pending" },
      { source: "John D.", type: "Document", status: "received" },
    ],
    mockup: "collect",
  },
  {
    id: "approvals",
    name: "Approvals",
    tagline: "Decisions routed, bottlenecks removed",
    description: "Route requests to the right people automatically. Track sign-offs and keep work moving.",
    href: "/features/approvals",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
    items: [
      { item: "Q4 Budget", requester: "Marketing", status: "approved" },
      { item: "Vendor Contract", requester: "Operations", status: "pending" },
      { item: "Travel Request", requester: "Sarah M.", status: "approved" },
    ],
    mockup: "approvals",
  },
  {
    id: "reminders",
    name: "Reminders",
    tagline: "Stop writing \"just following up\"",
    description: "Automated reminders that actually get responses. Set it once, and Vergo handles the follow-ups.",
    href: "/features/reminders",
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
    items: [
      { contact: "John Smith", email: "john@acme.co", status: "sent", daysAgo: 2 },
      { contact: "Sarah Lee", email: "sarah@vendor.io", status: "opened", daysAgo: 1 },
      { contact: "Mike Chen", email: "mike@client.com", status: "responded", daysAgo: 0 },
    ],
    mockup: "email",
  },
];

function TasksMockup({ items, isActive }: { items: typeof features[0]["items"]; isActive: boolean }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-foreground-muted uppercase tracking-wide">Month-End Close</div>
            <div className="text-base font-semibold text-foreground">December 2024</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-foreground-secondary">1 of 4 complete</span>
          </div>
        </div>
        <div className="mt-3 h-1.5 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isActive ? "25%" : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </div>
      <div className="p-3 space-y-1">
        {(items as { task: string; owner: string; status: string }[]).map((item, index) => (
          <motion.div
            key={item.task}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-background-secondary transition-colors"
          >
            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
              item.status === "complete" 
                ? "bg-green-500 border-green-500" 
                : item.status === "in_progress"
                ? "border-blue-500 bg-blue-50"
                : "border-border"
            }`}>
              {item.status === "complete" && (
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">{item.task}</div>
            </div>
            <div className="text-xs text-foreground-muted">{item.owner}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RequestsMockup({ isActive }: { items: typeof features[1]["items"]; isActive: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const fullText = "Send a request to all employees for their receipts to be submitted by Friday. Track replies and attachments.";
  
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
    }, 30);
    
    return () => clearInterval(typingInterval);
  }, [isActive]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="p-6">
        {/* AI Assistant Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
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
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="min-h-[80px] mb-6"
        >
          <p className="text-xl text-foreground leading-relaxed">
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
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm text-foreground-secondary">AI is ready</span>
          </motion.div>

          <AnimatePresence>
            {showButton && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="px-4 py-2 bg-secondary text-white text-sm font-medium rounded-lg hover:bg-secondary-hover transition-colors"
              >
                Create Automation
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function EmailMockup({ items, isActive }: { items: typeof features[1]["items"]; isActive: boolean }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="text-xs text-foreground-muted uppercase tracking-wide">Automated Reminders</div>
        <div className="text-base font-semibold text-foreground">Q4 Invoice Collection</div>
      </div>
      <div className="p-3 space-y-2">
        {(items as { contact: string; email: string; status: string; daysAgo: number }[]).map((item, index) => (
          <motion.div
            key={item.contact}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary"
          >
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs font-semibold">
              {item.contact.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground">{item.contact}</div>
              <div className="text-xs text-foreground-muted truncate">{item.email}</div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              item.status === "responded" 
                ? "bg-green-100 text-green-700" 
                : item.status === "opened"
                ? "bg-blue-100 text-blue-700"
                : "bg-amber-100 text-amber-700"
            }`}>
              {item.status === "responded" ? "✓ Responded" : item.status === "opened" ? "Opened" : "Sent"}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CollectMockup({ isActive }: { items: typeof features[1]["items"]; isActive: boolean }) {
  const collectItems = [
    { source: "Sarah M.", type: "Receipt", status: "received", attachment: "receipt_march.pdf" },
    { source: "Acme Corp", type: "Invoice", status: "pending", attachment: null },
    { source: "John D.", type: "Document", status: "received", attachment: "contract_v2.pdf" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-xs text-foreground-muted uppercase tracking-wide">Collection Inbox</div>
          <div className="text-base font-semibold text-foreground">Recent Submissions</div>
        </motion.div>
      </div>
      <div className="p-3 space-y-2">
        {collectItems.map((item, index) => (
          <motion.div
            key={item.source}
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              x: isActive ? 0 : -20,
              scale: isActive ? 1 : 0.95 
            }}
            transition={{ 
              duration: 0.4, 
              delay: 0.2 + index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-border-hover transition-colors"
          >
            {/* Status Icon */}
            <motion.div 
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.status === "received" ? "bg-emerald-100" : "bg-amber-100"}`}
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.3 + index * 0.15,
                type: "spring",
                stiffness: 200
              }}
            >
              {item.status === "received" ? (
                <motion.svg 
                  className="w-5 h-5 text-emerald-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </motion.svg>
              ) : (
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.15 }}
                    className="flex items-center gap-1 text-xs text-foreground-muted"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="truncate max-w-[100px]">{item.attachment}</span>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Status Badge */}
            <motion.div 
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.status === "received" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
              }`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.15 }}
            >
              {item.status === "received" ? "Received" : "Pending"}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Attachment summary footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="px-4 py-3 bg-background-secondary border-t border-border"
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

function ApprovalsMockup({ items, isActive }: { items: typeof features[2]["items"]; isActive: boolean }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="text-xs text-foreground-muted uppercase tracking-wide">Approval Queue</div>
        <div className="text-base font-semibold text-foreground">Pending Decisions</div>
      </div>
      <div className="p-3 space-y-2">
        {(items as { item: string; requester: string; status: string }[]).map((approval, index) => (
          <motion.div
            key={approval.item}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              approval.status === "approved" ? "bg-green-100" : "bg-blue-100"
            }`}>
              {approval.status === "approved" ? (
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground">{approval.item}</div>
              <div className="text-xs text-foreground-muted">From: {approval.requester}</div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              approval.status === "approved" 
                ? "bg-green-100 text-green-700" 
                : "bg-blue-100 text-blue-700"
            }`}>
              {approval.status === "approved" ? "✓ Approved" : "Awaiting"}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  const renderMockup = () => {
    switch (currentFeature.id) {
      case "tasks":
        return <TasksMockup items={currentFeature.items} isActive={true} />;
      case "requests":
        return <RequestsMockup items={currentFeature.items} isActive={true} />;
      case "collect":
        return <CollectMockup items={currentFeature.items} isActive={true} />;
      case "approvals":
        return <ApprovalsMockup items={currentFeature.items} isActive={true} />;
      case "reminders":
        return <EmailMockup items={currentFeature.items} isActive={true} />;
      default:
        return null;
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl text-foreground mb-4"
          >
            Built for how accounting actually works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Five capabilities. One system. Complete accountability.
          </motion.p>
        </div>

        {/* Feature tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFeature === feature.id
                  ? "bg-foreground text-white"
                  : "bg-background-secondary text-foreground-secondary hover:text-foreground hover:bg-background-tertiary"
              }`}
            >
              {feature.name}
            </button>
          ))}
        </motion.div>

        {/* Feature content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFeature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Description */}
            <div className="order-2 lg:order-1">
              <Badge className={`${currentFeature.lightColor} ${currentFeature.textColor} border-0 mb-4`}>
                {currentFeature.name}
              </Badge>
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
                {currentFeature.tagline}
              </h3>
              <p className="text-foreground-secondary text-lg leading-relaxed mb-6">
                {currentFeature.description}
              </p>
              <Link
                href={currentFeature.href}
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Learn more about {currentFeature.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right: Mockup */}
            <div className="order-1 lg:order-2">
              {renderMockup()}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
