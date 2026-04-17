import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import { SectionLabel } from "./shared/SectionLabel";
import { SplitReveal } from "./shared/SplitReveal";

const highlights = [
  { k: "01", v: "Detail-oriented documentation management" },
  { k: "02", v: "Healthcare & corporate administration experience" },
  { k: "03", v: "Proficient in PS Suite (EMR) and SAP systems" },
  { k: "04", v: "Strong commitment to confidentiality & accuracy" },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const plate = useTransform(scrollYProgress, [0, 1], [0.92, 1.04]);

  return (
    <section id="about" className="section-band relative overflow-hidden">
      <div className="editorial-container">
        <div className="mb-14 md:mb-20">
          <SectionLabel index="01" label="About — A Quiet Discipline" />
        </div>

        <div ref={ref} className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <div className="sticky top-28">
              <motion.div
                style={{ y: parallax, scale: plate }}
                className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-ink/10"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(120% 80% at 20% 15%, hsl(38 50% 92%) 0%, transparent 55%), radial-gradient(120% 80% at 80% 85%, hsl(20 28% 74%) 0%, transparent 55%), linear-gradient(170deg, hsl(38 36% 94%), hsl(30 22% 82%))",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="flex flex-col gap-1 text-ink">
                    <span className="kicker">Portrait / Calm Operator</span>
                    <span className="font-display text-2xl tracking-tight">
                      Precision is the practice.
                    </span>
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent 0 6px, rgba(30,20,10,0.04) 6px 7px)",
                  }}
                />
              </motion.div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Metric k="03+" v="Years in practice" />
                <Metric k="02" v="Industries served" />
                <Metric k="100%" v="Confidential records" />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-10">
            <SplitReveal
              as="h2"
              text="Administration is not paperwork — it is the choreography of a room."
              className="font-display text-4xl leading-[0.95] tracking-tighter text-ink md:text-6xl"
            />

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/80">
              <p>
                Shreya Punj is a detail-oriented Administrative Assistant with a Bachelor of
                Business Administration from Seneca Polytechnic. Her work spans healthcare
                clinics, corporate offices and customer-facing desks — each one reinforcing a
                single conviction: a well-run system is the quietest form of care.
              </p>
              <p className="text-ink/70">
                Whether she is reconciling patient records in PS Suite, coordinating schedules for
                three providers at once, or drafting documentation that holds up to compliance
                review, her approach is the same — clarity first, speed second, assumption last.
              </p>
              <p className="text-ink/70">
                She is currently seeking a role where accuracy and a steady temperament translate
                directly into better experiences for patients, clients, and the teams behind them.
              </p>
            </div>

            <div className="divider my-14" />

            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.k}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex items-start gap-4 border-b border-ink/10 py-6 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-ink/10 md:[&:nth-child(odd)]:pr-8 md:[&:nth-child(even)]:pl-8"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/80 transition-colors group-hover:bg-ink group-hover:text-paper">
                    <CheckCircle size={16} weight="duotone" />
                  </div>
                  <div>
                    <span className="kicker">{h.k}</span>
                    <p className="mt-1 text-ink/90">{h.v}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-paper/40 p-4 backdrop-blur">
      <div className="font-display text-3xl tracking-tighter text-ink tab-num">{k}</div>
      <div className="kicker mt-1 text-ink/70">{v}</div>
    </div>
  );
}
