import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "@phosphor-icons/react";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink text-paper">
      <div className="editorial-container pb-10 pt-24 md:pt-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <span className="kicker text-paper/50">Colophon</span>
            <p className="mt-4 max-w-md text-pretty text-paper/70">
              A portfolio site for Shreya Punj — Administrative & Medical Administrative
              Assistant. Written in Toronto, set in Instrument Serif and Satoshi.
            </p>
          </div>

          <div className="col-span-6 flex flex-col gap-2 md:col-span-2">
            <span className="kicker text-paper/50">Contact</span>
            <a
              href="mailto:Punj.shreya28@gmail.com"
              className="text-sm text-paper/80 hover:text-paper"
            >
              Punj.shreya28@gmail.com
            </a>
            <a href="tel:+16472231640" className="text-sm text-paper/80 hover:text-paper">
              (647) 223-1640
            </a>
          </div>

          <div className="col-span-6 flex flex-col gap-2 md:col-span-2">
            <span className="kicker text-paper/50">Elsewhere</span>
            <a
              href="https://www.linkedin.com/in/shreya-punjj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/80 hover:text-paper"
            >
              LinkedIn
            </a>
            <a href="#top" className="text-sm text-paper/80 hover:text-paper">
              Back to top
            </a>
          </div>
        </div>

        <motion.div
          style={{ y, opacity }}
          className="mt-20 select-none border-t border-paper/10 pt-10 md:mt-28"
        >
          <h2
            aria-hidden
            className="font-display leading-[0.8] tracking-tightest text-paper"
            style={{ fontSize: "clamp(4rem, 20vw, 22rem)" }}
          >
            Shreya <span className="italic">Punj.</span>
          </h2>
        </motion.div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-4 text-xs text-paper/60">
            <span className="kicker">© {year} Shreya Punj</span>
            <span className="h-3 w-px bg-paper/20" />
            <span className="kicker">Toronto, Canada</span>
            <span className="h-3 w-px bg-paper/20" />
            <span className="kicker">Available 2026</span>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-xs text-paper/80 transition-colors hover:bg-paper hover:text-ink"
          >
            <ArrowUp size={12} weight="bold" />
            Return to top
          </a>
        </div>
      </div>
    </footer>
  );
}
