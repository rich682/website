"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

export function VideoDemoSection() {
  return (
    <section id="demo" className="py-20 lg:py-32 bg-background-secondary">
      <Container size="wide">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-4">
              See the accounting execution system in action
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              A 5-minute walkthrough of how Vergo manages periods, tasks, and reconciliations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border bg-foreground group cursor-pointer"
          >
            {/* Placeholder for video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            
            {/* Video preview image placeholder style */}
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground via-foreground/90 to-accent/20 -z-10" />
            
            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-medium">Vergo Platform Walkthrough (5:24)</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
