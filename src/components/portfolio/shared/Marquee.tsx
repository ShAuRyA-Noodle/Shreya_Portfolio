import { type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ children, speed = 38, reverse = false, className }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-12 pr-12">
          {children}
        </div>
      </div>
    </div>
  );
}
