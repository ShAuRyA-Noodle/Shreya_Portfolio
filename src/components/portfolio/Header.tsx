import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "#about", label: "About", num: "01" },
  { href: "#experience", label: "Experience", num: "02" },
  { href: "#education", label: "Education", num: "03" },
  { href: "#skills", label: "Skills", num: "04" },
  { href: "#portfolio", label: "Portfolio", num: "05" },
  { href: "#contact", label: "Contact", num: "06" },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 160) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const torontoTime = time.toLocaleTimeString("en-CA", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Toronto",
    hour12: false,
  });

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-[90] flex justify-center px-4"
      >
        <nav
          aria-label="Primary"
          className="flex w-full max-w-[1400px] items-center justify-between gap-3 rounded-full border border-ink/10 bg-paper/70 px-3 py-2 shadow-[0_10px_40px_-20px_rgba(30,20,10,0.35)] backdrop-blur-xl md:px-5"
        >
          <a
            href="#top"
            className="group flex items-center gap-2 pl-2 pr-3"
            aria-label="Shreya Punj — Home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-ink text-paper">
              <motion.span
                className="font-display text-lg leading-none"
                initial={false}
                whileHover={{ rotate: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                s
              </motion.span>
            </span>
            <span className="hidden font-display text-base leading-none sm:inline">Shreya Punj</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-ink/80 transition-colors hover:text-ink"
                >
                  <span className="kicker text-[10px] text-ink/40 group-hover:text-ink/70">
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                  <span className="absolute inset-0 -z-10 rounded-full bg-ink/5 opacity-0 transition-opacity duration-300 ease-editorial group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-ink/10 px-3 py-1.5 md:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-sage/80" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-sage" />
              </span>
              <span className="kicker tab-num text-ink/70">TOR · {torontoTime}</span>
            </div>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform duration-300 ease-editorial hover:-translate-y-[1px] md:inline-flex"
            >
              Let&apos;s talk
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 md:hidden"
              aria-label="Open menu"
            >
              <List size={18} weight="bold" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[120] bg-ink text-paper"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl">Shreya Punj</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20"
                  aria-label="Close menu"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>

              <ul className="mt-16 flex flex-1 flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline justify-between border-b border-paper/10 py-5"
                    >
                      <span className="font-display text-4xl tracking-tighter">{link.label}</span>
                      <span className="kicker text-paper/50">{link.num}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex items-center justify-between text-xs text-paper/60">
                <span className="kicker">Toronto · {torontoTime}</span>
                <a
                  href="mailto:Punj.shreya28@gmail.com"
                  className="kicker underline-offset-4 hover:underline"
                >
                  Punj.shreya28@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
