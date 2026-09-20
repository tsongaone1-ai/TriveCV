import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-7"
        aria-hidden="true"
        fill="none"
      >
        <rect
          x="8"
          y="5.5"
          width="16"
          height="21"
          rx="2.5"
          className={inverted ? "stroke-night-fg" : "stroke-fg"}
          strokeWidth="1.5"
        />
        <circle
          cx="16"
          cy="11.5"
          r="2.15"
          className={inverted ? "stroke-night-fg" : "stroke-fg"}
          strokeWidth="1.5"
        />
        <path
          d="M11.5 17.5h9M11.5 21.5h6"
          className={inverted ? "stroke-night-fg" : "stroke-fg"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={cn(
          "font-display text-xl font-medium tracking-tight",
          inverted ? "text-night-fg" : "text-fg",
        )}
      >
        ThriveCV
      </span>
    </span>
  );
}
