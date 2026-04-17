import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  direction?: "y" | "x";
}

export function Parallax({ children, className, distance = 80, direction = "y" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const value = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={direction === "y" ? { y: value } : { x: value }}
    >
      {children}
    </motion.div>
  );
}
