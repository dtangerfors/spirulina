const VIEWBOX = 100;
const DEFAULT_STROKE = 8; // in viewBox units, i.e. 8px when rendered at 100px

type LogoProps = {
  /** Rendered width/height in px. */
  size?: number;
  /** Stroke width in rendered px. Omit to keep the original 8/100 proportion. */
  stroke?: number;
  className?: string;
};

export function Logo({ size = 100, stroke, className = "" }: LogoProps) {
  const strokeWidth = stroke ? (stroke * VIEWBOX) / size : DEFAULT_STROKE;

  return (
    <svg
      className={`stroke-black hover:stroke-primary ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="round"
      role="img"
      aria-label="Daniel Tängerfors"
    >
      <path d="M48.3 57.5C39.8 55.5 30 68.5 28.7 79.5C27.3 90.5 33.7 93.5 39.5 89.5C46.6 84.5 53.5 75.5 58.6 65.5C66 49.5 71.7 27.5 63.9 26.5C56.9 26.5 52.9 45.5 52.1 63.5C51.6 80 64.3 91.3 74.1 84.4A42 42 0 1 0 15.6 74.1" />
    </svg>
  )
}
