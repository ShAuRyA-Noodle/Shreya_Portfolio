import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

interface SplitRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function SplitReveal({
  text,
  className,
  style,
  as = "h2",
  delay = 0,
  stagger = 0.08,
  once = true,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });
  const words = text.split(" ");

  const Tag = motion[as];

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={style}
      aria-label={text}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-baseline"
          style={{ paddingBottom: "0.12em" }}
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
