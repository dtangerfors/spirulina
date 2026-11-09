"use client"
import { ViewTransition } from "react";
import { usePathname } from "next/navigation";

/**
 * Starts a view transition on every route change.
 *
 * The keyed boundary re-mounts when the pathname changes, which is what tells
 * React to wrap the navigation in `document.startViewTransition`. The boundary
 * itself has no animation (`default="none"`): the visible effect comes from
 * the root snapshot, which is animated in globals.css (`page-leave` /
 * `page-enter`). Animating the root (the viewport as it looks right now) keeps
 * the old page where the visitor had scrolled it to.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ViewTransition key={pathname} default="none">
      {children}
    </ViewTransition>
  );
}
