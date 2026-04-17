import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-[100dvh] flex-col items-start justify-between overflow-hidden bg-cream px-6 pb-10 pt-10 text-ink md:px-16 md:pt-16">
      <div className="flex w-full items-center justify-between">
        <span className="kicker">Shreya Punj</span>
        <span className="kicker tab-num">Error / 404</span>
      </div>

      <div className="max-w-5xl">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display leading-[0.85] tracking-tightest"
          style={{ fontSize: "clamp(4rem, 20vw, 18rem)" }}
        >
          A blank <span className="italic">page.</span>
        </motion.h1>
        <p className="mt-8 max-w-md text-pretty text-ink/70">
          The route you visited does not exist in this portfolio.
          <br />
          The quiet studio remains open.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-300 ease-editorial hover:-translate-y-[1px]"
        >
          Return home
          <ArrowUpRight size={14} weight="bold" />
        </a>
      </div>

      <div className="flex w-full items-center justify-between text-xs text-ink/50">
        <span className="kicker">Path · {location.pathname}</span>
        <span className="kicker">TOR · 2026</span>
      </div>
    </main>
  );
};

export default NotFound;
