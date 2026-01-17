"use client";

import { useReducedMotion } from "framer-motion";
import { createContext, useContext, ReactNode } from "react";

const ReducedMotionContext = createContext(false);

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <ReducedMotionContext.Provider value={prefersReducedMotion ?? false}>
      {children}
    </ReducedMotionContext.Provider>
  );
}

export function usePreferReducedMotion() {
  return useContext(ReducedMotionContext);
}
