"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

export function SecurityTrustSection() {
  return (
    <section className="py-20 lg:py-32 bg-background-secondary relative">
      <Container size="wide" className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4"
          >
            See Vergo in action.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
          >
            Watch how accounting teams use Vergo to close faster, automate requests, and eliminate busywork.
          </motion.p>
        </div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-lg bg-black aspect-video">
            {/*
              Replace the placeholder below with your video embed.

              For YouTube:
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Vergo Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              For Loom:
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.loom.com/embed/YOUR_VIDEO_ID"
                title="Vergo Demo"
                allowFullScreen
              />

              For Vimeo:
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                title="Vergo Demo"
                allowFullScreen
              />
            */}

            {/* Placeholder — shown until you add a real video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/60 text-sm font-medium">Demo video coming soon</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
