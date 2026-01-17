"use client";

import { motion } from "framer-motion";

interface Shape {
  id: number;
  type: "circle" | "rounded-rect";
  size: number;
  x: number;
  y: number;
  color: string;
  duration: number;
  delay: number;
}

const shapes: Shape[] = [
  { id: 1, type: "circle", size: 120, x: 10, y: 20, color: "rgba(242, 101, 34, 0.08)", duration: 20, delay: 0 },
  { id: 2, type: "rounded-rect", size: 80, x: 75, y: 10, color: "rgba(242, 101, 34, 0.06)", duration: 25, delay: 2 },
  { id: 3, type: "circle", size: 60, x: 85, y: 70, color: "rgba(107, 114, 128, 0.08)", duration: 18, delay: 1 },
  { id: 4, type: "rounded-rect", size: 100, x: 20, y: 75, color: "rgba(107, 114, 128, 0.06)", duration: 22, delay: 3 },
  { id: 5, type: "circle", size: 40, x: 50, y: 40, color: "rgba(242, 101, 34, 0.05)", duration: 15, delay: 0.5 },
  { id: 6, type: "rounded-rect", size: 70, x: 60, y: 85, color: "rgba(242, 101, 34, 0.04)", duration: 28, delay: 4 },
];

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={shape.type === "circle" ? "rounded-full" : "rounded-2xl"}
          style={{
            position: "absolute",
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            backgroundColor: shape.color,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1.1, 0.9],
            x: [0, 20, -10, 15, 0],
            y: [0, -15, 10, -5, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
