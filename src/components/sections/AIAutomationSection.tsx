"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const aiCapabilities = [
  {
    title: "Reads responses & attachments",
    description: "AI analyzes incoming documents and responses to confirm they match the request, saving you from manual validation.",
  },
  {
    title: "Understands the accounting period",
    description: "Vergo's AI knows your close calendar. It prioritizes items based on their impact on the current period's deadline.",
  },
  {
    title: "Flags what needs attention",
    description: "Instead of checking every task, Vergo highlights the anomalies and missing pieces that actually require your judgment.",
  },
  {
    title: "Recommends next steps",
    description: "Based on past behavior and current status, the AI suggests when to escalate, when to wait, and how to resolve bottlenecks.",
  },
];

export function AIAutomationSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl lg:text-5xl text-foreground mb-8"
            >
              AI that assists judgment — without taking control.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-foreground-secondary leading-relaxed mb-12"
            >
              We don&apos;t believe in "autopilot" for accounting. Vergo uses AI to handle 
              the data collection and preliminary analysis, so you can focus on the final review.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {aiCapabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-foreground rounded-3xl p-8 lg:p-12 text-white overflow-hidden shadow-2xl"
          >
            {/* Dark themed AI visualization */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Judgment Assistant</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-white/60">Analyzing Attachment</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-success/20 text-success uppercase">Verified</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
                    <motion.div 
                      className="h-full bg-success" 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <p className="mt-3 text-xs text-white/80 italic">
                    "Document matches Request #402. Bank statement for Dec 2024 verified."
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-white/60">Close Timeline Insight</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-500 uppercase">Attention</span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Acme Corp hasn&apos;t responded to 3 requests. Based on previous periods, 
                    this may delay the Monthly Close by 2 days. 
                  </p>
                  <div className="mt-3 flex gap-2">
                    <div className="px-3 py-1 bg-white/10 rounded-md text-[10px] font-bold uppercase cursor-pointer hover:bg-white/20">
                      Nudge Sarah
                    </div>
                    <div className="px-3 py-1 bg-white/10 rounded-md text-[10px] font-bold uppercase cursor-pointer hover:bg-white/20">
                      Escalate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
