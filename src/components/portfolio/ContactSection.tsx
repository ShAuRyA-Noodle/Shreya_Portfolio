import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  Phone,
  LinkedinLogo,
  MapPin,
  ArrowUpRight,
  type Icon,
} from "@phosphor-icons/react";
import { SectionLabel } from "./shared/SectionLabel";
import { MagneticButton } from "./shared/MagneticButton";

interface Line {
  icon: Icon;
  label: string;
  value: string;
  href: string | null;
}

const contactLines: Line[] = [
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: "Punj.shreya28@gmail.com",
    href: "mailto:Punj.shreya28@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(647) 223-1640",
    href: "tel:+16472231640",
  },
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    value: "linkedin.com/in/shreya-punjj",
    href: "https://www.linkedin.com/in/shreya-punjj",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Greater Toronto Area, Canada",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-band relative bg-cream">
      <div className="editorial-container">
        <div className="mb-16 md:mb-24">
          <SectionLabel index="06" label="Contact — The Next Desk" />
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1 }}
              className="font-display leading-[0.88] tracking-tightest text-ink"
              style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}
            >
              <Line text="Say" delay={0} /> <Line text="hello," delay={0.06} italic />
              <br />
              <Line text="let&rsquo;s" delay={0.12} italic />{" "}
              <Line text="work" delay={0.18} />{" "}
              <Line text="together." delay={0.24} />
            </motion.h2>

            <p className="mt-10 max-w-xl text-pretty text-lg text-ink/75">
              Actively looking for administrative and medical administrative assistant roles across
              the Greater Toronto Area. The fastest way to reach Shreya is email — replies usually
              come back within the same business day.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton
                as="a"
                href="mailto:Punj.shreya28@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-transform duration-300 ease-editorial active:scale-[0.98]"
              >
                Send an email
                <ArrowUpRight size={16} weight="bold" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="/documents/Shreya_CV.pdf"
                className="ghost-btn"
              >
                Download CV
                <ArrowUpRight size={14} weight="bold" />
              </MagneticButton>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-paper px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-sage/70" />
                <span className="relative h-2 w-2 rounded-full bg-sage" />
              </span>
              <span className="kicker text-ink/75">Currently accepting new engagements</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <ul className="rounded-[28px] border border-ink/10 bg-paper">
              {contactLines.map((line, i) => {
                const Icon = line.icon;
                const isLast = i === contactLines.length - 1;
                const body = (
                  <>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/80 transition-colors duration-500 group-hover:bg-ink group-hover:text-paper">
                        <Icon size={16} weight="duotone" />
                      </span>
                      <div>
                        <span className="kicker text-ink/60">{line.label}</span>
                        <div className="mt-1 text-ink/90 break-all">{line.value}</div>
                      </div>
                    </div>
                    {line.href && (
                      <ArrowUpRight
                        size={16}
                        weight="bold"
                        className="text-ink/40 transition-all duration-500 group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-ink"
                      />
                    )}
                  </>
                );
                return (
                  <li key={line.label} className={isLast ? "" : "border-b border-ink/10"}>
                    {line.href ? (
                      <a
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-4 px-6 py-5"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-4 px-6 py-5">
                        {body}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 rounded-[28px] border border-ink/10 bg-ink p-6 text-paper">
              <span className="kicker text-paper/60">Response time</span>
              <p className="mt-3 font-display text-2xl tracking-tight">
                Usually within <span className="italic">4 hours</span> on business days.
              </p>
              <p className="mt-3 text-sm text-paper/70">
                Ontario business hours, Monday through Friday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({ text, delay, italic }: { text: string; delay: number; italic?: boolean }) {
  return (
    <span className="inline-block overflow-hidden align-baseline pb-[0.06em]">
      <motion.span
        className={`inline-block will-change-transform ${italic ? "italic" : ""}`}
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </span>
  );
}
