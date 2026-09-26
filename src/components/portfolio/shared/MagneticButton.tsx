import { useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "a" | "button" | "div";
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  as = "a",
  href,
  onClick,
  target,
  rel,
  style,
  ariaLabel,
}: MagneticProps) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const setRef = (element: HTMLElement | null) => {
    ref.current = element;
  };
  const motionStyle = { ...style, x: springX, y: springY };

  if (as === "a") {
    return (
      <motion.a
        ref={setRef}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick}
        className={className}
        style={motionStyle}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    );
  }
  if (as === "button") {
    return <motion.button ref={setRef} onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick} className={className} style={motionStyle} aria-label={ariaLabel}>{children}</motion.button>;
  }
  return <motion.div ref={setRef} onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick} className={className} style={motionStyle} aria-label={ariaLabel}>{children}</motion.div>;
}
