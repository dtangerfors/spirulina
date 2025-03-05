"use client"
import ReactLenis from "lenis/react";
import { AnimatePresence } from "framer-motion";

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <AnimatePresence>
          {children}
      </AnimatePresence>
    </ReactLenis>
  )
}