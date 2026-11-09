import clsx from "clsx";

/**
 * Masked rise-in for headings: the content starts just below its own box and
 * slides up into place, clipped so it seems to appear from behind the baseline.
 * Pure CSS (see `.reveal` in globals.css), so it works in server components and
 * plays whenever the element mounts, including during a page transition.
 *
 * Put it inside the heading so the heading keeps its semantics:
 *   <h1><Reveal>Selected work</Reveal></h1>
 *
 * For a heading in several parts, give each part its own Reveal and stagger
 * them by 0.2s with `delay` (the default delay is 0.5s).
 */
export function Reveal({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  /** Seconds before the animation starts. Defaults to the value in globals.css. */
  delay?: number;
}) {
  return (
    <span className={clsx("reveal", className)}>
      <span
        className="reveal-inner"
        style={delay !== undefined ? { animationDelay: `${delay}s` } : undefined}
      >
        {children}
      </span>
    </span>
  );
}
