import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Certificate, CalendarBlank, MapPin } from "@phosphor-icons/react";
import { SectionLabel } from "./shared/SectionLabel";
import { SplitReveal } from "./shared/SplitReveal";

const coursework = [
  "Sales & CRM",
  "Marketing Research",
  "Consumer Behaviour",
  "Financial Accounting",
  "Managerial Accounting",
  "Business Analytics",
  "Micro & Macro Economics",
];

const timeline = [
  { year: "2021", label: "Enrolled at Seneca Polytechnic" },
  { year: "2022", label: "Marketing specialisation declared" },
  { year: "2023", label: "Capstone — MRK662 Dollarama launch" },
  { year: "2024", label: "Graduated BBA · Marketing" },
];

export function EducationSection() {
  return (
    <section id="education" className="section-band relative">
      <div className="editorial-container">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionLabel index="03" label="Education — Foundations" />
            <SplitReveal
              as="h2"
              text="Built on a Bachelor of Business Administration."
              className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter text-ink md:text-7xl"
            />
          </div>
          <p className="max-w-sm text-pretty text-ink/70">
            Four years, a marketing specialisation, and a coursework list that still quietly runs
            inside every spreadsheet she touches.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 overflow-hidden rounded-[28px] border border-ink/10 bg-paper p-8 md:col-span-8 md:p-12"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper">
                  <GraduationCap size={20} weight="duotone" />
                </span>
                <div>
                  <span className="kicker">Degree</span>
                  <h3 className="mt-1 font-display text-3xl tracking-tight text-ink md:text-4xl">
                    Bachelor of Business Administration
                  </h3>
                </div>
              </div>
              <span className="hidden text-right text-xs text-ink/60 md:block">
                <span className="kicker tab-num block">2021 — 2024</span>
                <span className="mt-1 block">Seneca Polytechnic · Toronto</span>
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/80">
              Marketing specialisation with coursework spanning quantitative analytics, consumer
              research, and financial accounting — a curriculum that trained the kind of careful
              thinking administration quietly relies on.
            </p>

            <div className="mt-10 border-t border-ink/10 pt-6">
              <div className="flex items-center gap-2">
                <BookOpen size={16} weight="duotone" className="text-ink/70" />
                <span className="kicker text-ink/70">Selected coursework</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center rounded-full border border-ink/10 bg-cream px-3 py-1.5 text-xs text-ink/80"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              <InfoTile icon={<CalendarBlank size={14} weight="duotone" />} k="Duration" v="4 years" />
              <InfoTile icon={<MapPin size={14} weight="duotone" />} k="Campus" v="Newnham, TO" />
              <InfoTile icon={<Certificate size={14} weight="duotone" />} k="Field" v="Marketing" />
              <InfoTile icon={<GraduationCap size={14} weight="duotone" />} k="Status" v="Graduated" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 flex flex-col gap-4 md:col-span-4"
          >
            <div className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[28px] border border-ink/10 bg-ink p-8 text-paper">
              <span className="kicker text-paper/60">Thesis desk</span>
              <div>
                <h4 className="font-display text-4xl leading-[0.9] tracking-tighter md:text-5xl">
                  Marketing <span className="italic">as</span> infrastructure.
                </h4>
                <p className="mt-4 text-sm text-paper/70">
                  Consumer behaviour, pricing, analytics — taught as the plumbing beneath every
                  operation she&apos;d later run.
                </p>
              </div>
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(247,244,238,0.18) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="rounded-[28px] border border-ink/10 bg-paper p-6">
              <span className="kicker">Timeline</span>
              <ul className="mt-4 space-y-3">
                {timeline.map((t, i) => (
                  <motion.li
                    key={t.year}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="mt-[0.4em] font-mono text-[10px] uppercase tracking-micro text-ink/50 tab-num">
                      {t.year}
                    </span>
                    <span className="h-px w-5 shrink-0 translate-y-[0.75em] bg-ink/20" />
                    <span className="flex-1 text-ink/85">{t.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ icon, k, v }: { icon: React.ReactNode; k: string; v: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-cream p-3">
      <div className="flex items-center gap-2 text-ink/70">
        {icon}
        <span className="kicker">{k}</span>
      </div>
      <div className="mt-1.5 text-sm text-ink">{v}</div>
    </div>
  );
}
