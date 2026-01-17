"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  variant?: "chaos" | "order" | "ambient";
}

export function ParticleField({
  className,
  particleCount = 30,
  variant = "ambient",
}: ParticleFieldProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate particles on mount
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  const getAnimationVariant = (particle: Particle) => {
    switch (variant) {
      case "chaos":
        return {
          x: [
            `${particle.x}%`,
            `${particle.x + (Math.random() - 0.5) * 30}%`,
            `${particle.x + (Math.random() - 0.5) * 20}%`,
            `${particle.x}%`,
          ],
          y: [
            `${particle.y}%`,
            `${particle.y + (Math.random() - 0.5) * 30}%`,
            `${particle.y + (Math.random() - 0.5) * 20}%`,
            `${particle.y}%`,
          ],
          opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity * 0.5, particle.opacity],
        };
      case "order":
        // Particles move toward center and organize
        const centerX = 50;
        const centerY = 50;
        return {
          x: [`${particle.x}%`, `${centerX + (particle.x - centerX) * 0.3}%`],
          y: [`${particle.y}%`, `${centerY + (particle.y - centerY) * 0.3}%`],
          opacity: [particle.opacity * 0.5, particle.opacity],
        };
      case "ambient":
      default:
        return {
          x: [
            `${particle.x}%`,
            `${particle.x + (Math.random() - 0.5) * 10}%`,
            `${particle.x}%`,
          ],
          y: [
            `${particle.y}%`,
            `${particle.y + (Math.random() - 0.5) * 10}%`,
            `${particle.y}%`,
          ],
          opacity: [particle.opacity, particle.opacity * 1.2, particle.opacity],
        };
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={getAnimationVariant(particle)}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Connection lines between nearby particles */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {particles.slice(0, 10).map((p1, i) =>
          particles.slice(i + 1, i + 3).map((p2) => {
            const distance = Math.sqrt(
              Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
            );
            if (distance < 30) {
              return (
                <motion.line
                  key={`${p1.id}-${p2.id}`}
                  x1={`${p1.x}%`}
                  y1={`${p1.y}%`}
                  x2={`${p2.x}%`}
                  y2={`${p2.y}%`}
                  stroke="var(--accent)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            }
            return null;
          })
        )}
      </svg>
    </div>
  );
}
