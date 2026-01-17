"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container, Badge, Button } from "@/components/ui";

export function RequestsFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="accent" className="mb-6">Requests</Badge>
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-6">
              Ask for anything,{" "}
              <span className="text-accent">in plain English</span>
            </h2>
            <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
              Describe what you need in natural language. Our AI understands context, 
              creates the right request, and sends it to the right people—automatically.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Natural language request creation",
                "Automatic recipient detection",
                "Smart scheduling and follow-ups",
                "Attachment tracking and validation",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground-secondary">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/features/requests">
              <Button variant="primary" size="lg">
                Learn more about Requests
              </Button>
            </Link>
          </motion.div>

          {/* Right: AI Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AIRequestAnimation isInView={isInView} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function AIRequestAnimation({ isInView }: { isInView: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const fullText = "Send a request to all employees for their receipts to be submitted by Friday. Track replies and attachments.";
  
  useEffect(() => {
    if (!isInView || hasStarted) {
      return;
    }
    
    setHasStarted(true);
    
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
    }, 600);
    
    return () => clearTimeout(startDelay);
  }, [isInView, hasStarted]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="p-8">
        {/* AI Assistant Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
          <span className="text-base font-medium text-indigo-600">AI Assistant</span>
        </motion.div>

        {/* Typing Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="min-h-[100px] mb-8"
        >
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            {displayedText}
            {isTyping && (
              <motion.span
                className="inline-block w-0.5 h-6 bg-foreground ml-0.5 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border my-6" />

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <motion.span 
              className="w-2.5 h-2.5 rounded-full bg-accent"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-foreground-secondary">AI is ready</span>
          </motion.div>

          {showButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="px-5 py-2.5 bg-secondary text-white text-sm font-medium rounded-lg shadow-lg"
            >
              Create Automation
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
