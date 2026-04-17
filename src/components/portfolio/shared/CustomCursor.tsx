import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 480, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 480, damping: 40, mass: 0.5 });
  const [variant, setVariant] = useState<"default" | "link" | "view">("default");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const el = e.target as HTMLElement | null;
      if (!el) return setVariant("default");
      if (el.closest("[data-cursor='view']")) setVariant("view");
      else if (el.closest("a, button, [role='button'], [data-cursor='link']")) setVariant("link");
      else setVariant("default");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!visible) return null;

  const size = variant === "view" ? 88 : variant === "link" ? 40 : 10;
  const opacity = variant === "default" ? 0.9 : 1;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1000] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor: variant === "default" ? "#F7F4EE" : "transparent",
        border: variant === "default" ? "0px solid transparent" : "1px solid #F7F4EE",
        opacity,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
    >
      {variant === "view" && (
        <span className="font-mono text-[10px] uppercase tracking-micro text-cream">View</span>
      )}
    </motion.div>
  );
}
