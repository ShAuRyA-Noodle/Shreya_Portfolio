import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, LinkedinLogo } from "@phosphor-icons/react";
import { Marquee } from "./shared/Marquee";

const credentials = [
  "BBA, Seneca Polytechnic",
  "PS Suite (EMR)",
  "SAP",
  "Healthcare Administration",
  "Greater Toronto Area",
  "Available 2026",
  "Documentation",
  "Scheduling",
  "Confidentiality",
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const kickerY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden pb-10 pt-28 md:pt-36"
    >
      <div className="editorial-container relative">
        <motion.div style={{ y: kickerY }} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="kicker tab-num">SP · 2021—2026</span>
            <span className="h-px w-10 bg-ink/30" />
            <span className="kicker">Portfolio / Volume I</span>
          </div>
          <span className="kicker hidden md:inline">A Quiet Studio of Administration</span>
        </motion.div>

        <motion.div style={{ y: titleY }} className="mt-16 md:mt-24">
          <h1
            className="font-display leading-[0.85] tracking-tightest text-ink"
            style={{ fontSize: "clamp(3.25rem, 11vw, 12.5rem)" }}
          >
            <Word delay={0.05}>Shreya</Word>
            <span className="mx-4 inline-block h-[0.12em] w-[0.6em] translate-y-[-0.35em] align-middle bg-ink" aria-hidden />
            <Word delay={0.18}>Punj.</Word>
            <br />
            <span className="relative inline-flex items-baseline gap-6">
              <Word delay={0.3} italic>
                Administrative
              </Word>
            </span>
            <br />
            <span className="inline-flex items-baseline gap-6">
              <Word delay={0.42}>craft</Word>
              <span className="hidden h-[0.18em] w-[0.9em] translate-y-[-0.35em] bg-ink md:inline-block" aria-hidden />
              <Word delay={0.54} italic>
                for
              </Word>
              <Word delay={0.66}>healthcare</Word>
            </span>
            <br />
            <Word delay={0.78}>&</Word>{" "}
            <Word delay={0.9} italic>
              corporate
            </Word>{" "}
            <Word delay={1.02}>teams.</Word>
          </h1>
        </motion.div>

        <div className="mt-14 grid grid-cols-12 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 md:col-start-1"
          >
            <p className="text-balance text-lg leading-relaxed text-ink/80 md:text-xl">
              A detail-obsessed administrator bringing calm, accuracy, and a near-clinical eye for
              records to every desk she touches — from EMR systems at a family practice to SAP
              ledgers across corporate offices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-6 md:col-start-7 md:justify-end"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-transform duration-300 ease-editorial hover:-translate-y-[1px]"
            >
              <span>Start a conversation</span>
              <span className="relative flex h-4 w-4 overflow-hidden">
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="absolute inset-0 transition-transform duration-500 ease-editorial group-hover:-translate-y-5 group-hover:translate-x-5"
                />
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="absolute inset-0 translate-y-5 -translate-x-5 transition-transform duration-500 ease-editorial group-hover:translate-y-0 group-hover:translate-x-0"
                />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-punjj"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn"
            >
              <LinkedinLogo size={16} weight="bold" />
              LinkedIn
            </a>
          </motion.div>

          <div className="col-span-12 mt-6 md:col-span-3 md:col-start-1 md:mt-0">
            <div className="rounded-2xl border border-ink/10 bg-paper/40 p-5 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-sage/70" />
                  <span className="relative h-2 w-2 rounded-full bg-sage" />
                </span>
                <span className="kicker text-ink/70">Currently</span>
              </div>
              <p className="mt-3 text-sm text-ink/90">
                Medical Administrative Assistant at Joshi Management · Open to new roles across the
                Greater Toronto Area.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="pointer-events-none absolute -right-10 -top-4 hidden aspect-[3/4] w-[22vw] max-w-[320px] overflow-hidden rounded-[28px] border border-ink/10 md:block"
          aria-hidden
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(120% 80% at 20% 10%, hsl(38 50% 92%) 0%, transparent 60%), radial-gradient(120% 80% at 80% 80%, hsl(18 40% 78%) 0%, transparent 55%), linear-gradient(180deg, hsl(38 36% 94%), hsl(28 28% 88%))",
            }}
          />
        </motion.div>
      </div>

      <div className="relative mt-20 border-y border-ink/10 bg-paper/40 py-6">
        <Marquee speed={44}>
          {credentials.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-12 font-display text-3xl tracking-tight text-ink/80 md:text-4xl"
            >
              <span>{item}</span>
              <span className="inline-block h-2 w-2 rounded-full bg-ink/40" />
            </span>
          ))}
        </Marquee>
      </div>

      <motion.a
        href="#about"
        style={{ opacity: cueOpacity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/60 md:flex"
        aria-label="Scroll to About"
      >
        <span className="kicker">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

function Word({
  children,
  delay,
  italic,
}: {
  children: React.ReactNode;
  delay: number;
  italic?: boolean;
}) {
  return (
    <span className="inline-block overflow-hidden align-baseline pb-[0.06em]">
      <motion.span
        className={`inline-block will-change-transform ${italic ? "italic" : ""}`}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
