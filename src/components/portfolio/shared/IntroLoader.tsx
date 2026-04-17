import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const already = sessionStorage.getItem("intro-seen");
    if (already) {
      setVisible(false);
      return;
    }

    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 4);
      setProgress(Math.floor(p));
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => {
          sessionStorage.setItem("intro-seen", "1");
          setVisible(false);
        }, 450);
      }
    }, 120);

    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-between bg-ink px-6 pb-10 pt-10 text-paper"
        >
          <div className="flex w-full items-center justify-between">
            <span className="kicker text-paper/60">Shreya Punj</span>
            <span className="kicker tab-num text-paper/60">TOR / 2026</span>
          </div>

          <div className="relative w-full text-center">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-[0.85] tracking-tightest"
              style={{ fontSize: "clamp(3rem, 14vw, 14rem)" }}
            >
              A quiet studio <span className="italic">of</span> administration.
            </motion.h1>
          </div>

          <div className="flex w-full items-center gap-4">
            <span className="kicker tab-num text-paper/70">
              {String(progress).padStart(3, "0")}
            </span>
            <div className="relative h-px flex-1 bg-paper/20">
              <motion.div
                className="absolute left-0 top-0 h-full bg-paper"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <span className="kicker text-paper/70">Loading</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
