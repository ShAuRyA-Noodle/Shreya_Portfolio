import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Briefcase } from "@phosphor-icons/react";
import { SectionLabel } from "./shared/SectionLabel";
import { SplitReveal } from "./shared/SplitReveal";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  responsibilities: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    company: "Joshi Management",
    role: "Medical Administrative Assistant",
    period: "Feb 2024 — Present",
    location: "Brampton, ON",
    current: true,
    responsibilities: [
      "Maintain patient records in PS Suite (EMR) with strict attention to accuracy and confidentiality.",
      "Handle inquiries, appointment scheduling and front-desk operations across three providers.",
      "Coordinate clinic supplies and maintain organised inventory systems and vendor lists.",
    ],
    tags: ["PS Suite", "EMR", "Scheduling", "Clinic Ops"],
  },
  {
    company: "Pingash Enterprise",
    role: "Administrative Assistant",
    period: "Sep 2022 — Jul 2023",
    location: "Toronto, ON",
    responsibilities: [
      "Owned daily office operations — documentation, filing, correspondence, vendor follow-ups.",
      "Improved workflow efficiency by re-structuring physical and digital record systems.",
      "Recognised as Key Contributor for three consecutive performance cycles.",
    ],
    tags: ["SAP", "Docs", "Workflow"],
  },
  {
    company: "The Westegg Group",
    role: "Customer Service Representative",
    period: "Aug 2021 — Aug 2022",
    location: "Greater Toronto Area",
    responsibilities: [
      "Served as first point of contact at TTC sites, assisting riders with inquiries.",
      "Resolved customer issues with patience, professionalism and calm escalation.",
      "Coordinated with safety teams to ensure smooth operations during peak hours.",
    ],
    tags: ["Customer Service", "Front Desk", "Safety"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-ink text-paper">
      <div className="editorial-container section-band">
        <div className="mb-16 flex items-end justify-between gap-6 md:mb-24">
          <div>
            <div className="[&_*]:text-paper/70">
              <SectionLabel index="02" label="Experience — Three Desks" />
            </div>
            <SplitReveal
              as="h2"
              text="A ledger of rooms kept in order."
              className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter md:text-7xl"
            />
          </div>
          <p className="hidden max-w-sm text-pretty text-paper/60 md:block">
            Three consecutive roles, two industries, one discipline — maintain the signal, absorb
            the noise.
          </p>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <StickyCard key={exp.company} exp={exp} index={i} total={experiences.length} />
          ))}
        </div>

        <div className="mt-24 border-t border-paper/15 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="kicker text-paper/60">Full CV on request</span>
            <a
              href="/documents/Shreya_CV.pdf"
              download
              className="group inline-flex items-center gap-2 text-sm text-paper/90 hover:text-paper"
            >
              Download the complete CV
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyCard({ exp, index, total }: { exp: Experience; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index - 1) * 0.04],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0.55]);

  const top = 110 + index * 24;

  return (
    <div ref={ref} className="relative pt-6">
      <div
        className="sticky"
        style={{ top: `${top}px` }}
      >
        <motion.article
          style={{ scale, opacity }}
          className="relative grid grid-cols-12 gap-6 rounded-[32px] border border-paper/10 bg-ink/80 p-8 backdrop-blur-xl md:gap-10 md:p-12"
        >
          <div className="col-span-12 flex items-start justify-between md:col-span-4">
            <div>
              <span className="kicker text-paper/50 tab-num">0{index + 1} / 0{total}</span>
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 bg-paper/5">
                  <Briefcase size={16} weight="bold" className="text-paper/90" />
                </span>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-paper/15 bg-paper/5 px-3 py-1 text-xs text-paper/80">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-sage/70" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-sage" />
                    </span>
                    Currently
                  </span>
                )}
              </div>
              <div className="mt-6">
                <h3 className="font-display text-4xl leading-[0.95] tracking-tighter md:text-5xl">
                  {exp.company}
                </h3>
                <p className="mt-3 text-paper/70">{exp.role}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-paper/50">
                  <span className="tab-num">{exp.period}</span>
                  <span className="h-3 w-px bg-paper/20" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <ul className="space-y-5">
              {exp.responsibilities.map((resp, j) => (
                <li key={j} className="flex gap-4 text-base leading-relaxed text-paper/85">
                  <span className="mt-[0.55em] h-px w-6 shrink-0 bg-paper/40" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-paper/15 bg-paper/5 px-3 py-1 font-mono text-[11px] uppercase tracking-micro text-paper/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(247,244,238,0.2), transparent)",
            }}
          />
        </motion.article>
      </div>
      <div className="h-[32vh] md:h-[48vh]" aria-hidden />
    </div>
  );
}
