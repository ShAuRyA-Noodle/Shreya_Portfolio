import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Monitor,
  UsersThree,
  ClipboardText,
  Translate,
  type Icon,
} from "@phosphor-icons/react";
import { SectionLabel } from "./shared/SectionLabel";
import { SplitReveal } from "./shared/SplitReveal";
import { Marquee } from "./shared/Marquee";

interface Category {
  num: string;
  icon: Icon;
  title: string;
  tagline: string;
  skills: string[];
}

const categories: Category[] = [
  {
    num: "A",
    icon: Monitor,
    title: "Technical",
    tagline: "Systems she already speaks fluently.",
    skills: [
      "PS Suite (EMR)",
      "SAP",
      "Microsoft Excel",
      "Microsoft Word",
      "Microsoft PowerPoint",
      "CRM Systems",
      "Data Entry",
    ],
  },
  {
    num: "B",
    icon: ClipboardText,
    title: "Administrative",
    tagline: "The daily choreography of a functioning office.",
    skills: [
      "Office Administration",
      "Scheduling",
      "Documentation Management",
      "Patient Records",
      "Reporting",
      "Workflow Coordination",
      "Inventory Management",
    ],
  },
  {
    num: "C",
    icon: UsersThree,
    title: "Professional",
    tagline: "Soft skills, applied with a steady hand.",
    skills: [
      "Professional Communication",
      "Customer Service",
      "Team Coordination",
      "Problem Solving",
      "Attention to Detail",
      "Confidentiality",
    ],
  },
  {
    num: "D",
    icon: Translate,
    title: "Languages",
    tagline: "Three households, three tongues.",
    skills: ["English (Fluent)", "Hindi (Fluent)", "Punjabi (Fluent)"],
  },
];

const marqueeSkills = [
  "PS Suite",
  "SAP",
  "Excel",
  "Scheduling",
  "Documentation",
  "Patient Records",
  "CRM",
  "Inventory",
  "Reporting",
  "Confidentiality",
  "Team Coordination",
  "English · Hindi · Punjabi",
];

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="skills" className="section-band relative bg-cream">
      <div className="editorial-container">
        <div className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
          <div className="col-span-12 md:col-span-8">
            <SectionLabel index="04" label="Skills — Tooling & Temperament" />
            <SplitReveal
              as="h2"
              text="What she carries into the room."
              className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter text-ink md:text-7xl"
            />
          </div>
          <p className="col-span-12 self-end text-pretty text-ink/70 md:col-span-4">
            Tools earn their place by making the desk quieter — fewer surprises, fewer escalations,
            cleaner hand-offs.
          </p>
        </div>

        <div className="relative mb-16 overflow-hidden rounded-[28px] border border-ink/10 bg-paper py-8 md:mb-24">
          <Marquee speed={36}>
            {marqueeSkills.map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="flex items-center gap-12 font-display text-4xl tracking-tighter text-ink/85 md:text-6xl"
              >
                <span>{s}</span>
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 rotate-45 bg-ink/40"
                />
              </span>
            ))}
          </Marquee>
          <Marquee speed={44} reverse>
            {marqueeSkills.map((s, i) => (
              <span
                key={`rev-${s}-${i}`}
                className="flex items-center gap-12 font-display text-3xl italic tracking-tight text-ink/55 md:text-5xl"
              >
                <span>{s}</span>
                <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-ink/25" />
              </span>
            ))}
          </Marquee>
        </div>

        <div ref={ref} className="relative">
          <motion.div
            aria-hidden
            style={{ scaleX: lineScale }}
            className="absolute left-0 top-0 hidden h-px w-full origin-left bg-ink/30 md:block"
          />

          <div className="grid grid-cols-12 gap-0 md:gap-0">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.article
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative col-span-12 border-b border-ink/10 py-10 md:col-span-6 md:py-14 ${
                    i % 2 === 0 ? "md:pr-10" : "md:border-l md:border-ink/10 md:pl-10"
                  } ${i < 2 ? "md:border-b" : "md:border-b-0"}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors duration-500 group-hover:bg-ink group-hover:text-paper">
                        <Icon size={16} weight="duotone" />
                      </span>
                      <span className="kicker tab-num">{cat.num}</span>
                    </div>
                    <span className="kicker text-ink/40">
                      {String(cat.skills.length).padStart(2, "0")} items
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-4xl leading-none tracking-tighter text-ink md:text-5xl">
                    {cat.title}
                  </h3>
                  <p className="mt-3 max-w-md text-ink/65">{cat.tagline}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + j * 0.04 }}
                        className="inline-flex items-center rounded-full border border-ink/15 bg-paper px-3 py-1.5 text-sm text-ink/85 transition-all duration-300 ease-editorial hover:-translate-y-[1px] hover:border-ink/50"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 translate-x-6 translate-y-6 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
                    style={{ backgroundColor: "hsl(var(--espresso))" }}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
