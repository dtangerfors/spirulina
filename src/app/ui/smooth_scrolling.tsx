"use client"
import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScrolling({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <>
      {children}
    </>
  )
}