import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  DownloadSimple,
  FileText,
  FilePdf,
  FileDoc,
  FileXls,
  FilePpt,
  CaretLeft,
  CaretRight,
  type Icon,
} from "@phosphor-icons/react";
import { SectionLabel } from "./shared/SectionLabel";
import { SplitReveal } from "./shared/SplitReveal";

type ItemType = "resume" | "certificate" | "deck" | "doc" | "sheet";

interface PortfolioItem {
  id: string;
  num: string;
  title: string;
  description: string;
  type: ItemType;
  course?: string;
  downloadUrl: string;
  ext: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "resume",
    num: "01",
    title: "Professional Resume",
    description: "Full CV — work history, education, technical systems and relevant skills.",
    type: "resume",
    downloadUrl: "/documents/Shreya_CV.pdf",
    ext: "PDF",
  },
  {
    id: "degree",
    num: "02",
    title: "BBA Degree Certificate",
    description: "Bachelor of Business Administration, Marketing — Seneca Polytechnic.",
    type: "certificate",
    downloadUrl: "./documents/Degree.pdf",
    ext: "PDF",
  },
  {
    id: "marketing-plan",
    num: "03",
    title: "Shuttle — Q-Commerce Launch",
    description: "Comprehensive marketing plan and go-to-market strategy for Shuttle.",
    type: "doc",
    course: "Capstone",
    downloadUrl: "/documents/marketing-plan.pdf",
    ext: "PDF",
  },
  {
    id: "martha-stewart",
    num: "04",
    title: "Martha Stewart — CBD Strategy",
    description: "Brand positioning and strategy slide deck for Martha Stewart Cannabis.",
    type: "deck",
    course: "MRK",
    downloadUrl: "/documents/martha-stewart-cbd.pptx",
    ext: "PPTX",
  },
  {
    id: "mrk662",
    num: "05",
    title: "MRK662 — Dollarama Launch",
    description: "New product launch deck with financial model for Dollarama.",
    type: "deck",
    course: "MRK662",
    downloadUrl: "/documents/mrk662-group3.pptx",
    ext: "PPTX",
  },
  {
    id: "le-pliage",
    num: "06",
    title: "Le Pliage — Longchamp",
    description: "Luxury brand analysis and global market positioning presentation.",
    type: "deck",
    course: "MRK",
    downloadUrl: "/documents/le-pliage.pptx",
    ext: "PPTX",
  },
  {
    id: "buyer-behaviour",
    num: "07",
    title: "Buyer Behaviour",
    description: "Consumer interview and decision-making analysis.",
    type: "doc",
    course: "CBH",
    downloadUrl: "/documents/buyer-behaviour.docx",
    ext: "DOCX",
  },
  {
    id: "nevada-case",
    num: "08",
    title: "Nevada Stakeholder Case",
    description: "Stakeholder impact and case analysis report.",
    type: "doc",
    course: "Case Study",
    downloadUrl: "/documents/nevada-case.docx",
    ext: "DOCX",
  },
  {
    id: "mrk516",
    num: "09",
    title: "MRK516 Analytics Workbook",
    description: "Data analysis spreadsheet — calculations and forecasting.",
    type: "sheet",
    course: "MRK516",
    downloadUrl: "/documents/mrk516-assignment1.xlsx",
    ext: "XLSX",
  },
  {
    id: "loblaws",
    num: "10",
    title: "Loblaw Service Analysis",
    description: "Service quality and gap analysis of Loblaw supermarket operations.",
    type: "doc",
    course: "Service Mgmt",
    downloadUrl: "/documents/loblaws.docx",
    ext: "DOCX",
  },
  {
    id: "final-exam-sheet",
    num: "11",
    title: "Final Exam Workbook",
    description: "Analytics final exam worksheet with full model.",
    type: "sheet",
    course: "Analytics",
    downloadUrl: "/documents/final-exam-vaworksheet.xlsx",
    ext: "XLSX",
  },
  {
    id: "mrk428",
    num: "12",
    title: "MRK428 Coursework",
    description: "Marketing coursework — applied brand strategy document.",
    type: "doc",
    course: "MRK428",
    downloadUrl: "/documents/mrk428.docx",
    ext: "DOCX",
  },
];

const typeIcon: Record<ItemType, Icon> = {
  resume: FileText,
  certificate: FilePdf,
  deck: FilePpt,
  doc: FileDoc,
  sheet: FileXls,
};

const typeLabel: Record<ItemType, string> = {
  resume: "Resume",
  certificate: "Certificate",
  deck: "Deck",
  doc: "Document",
  sheet: "Spreadsheet",
};

const gradientFor: Record<ItemType, string> = {
  resume:
    "radial-gradient(120% 80% at 15% 20%, hsl(38 48% 90%) 0%, transparent 60%), linear-gradient(160deg, hsl(38 36% 94%), hsl(28 22% 84%))",
  certificate:
    "radial-gradient(120% 80% at 80% 20%, hsl(18 40% 82%) 0%, transparent 60%), linear-gradient(160deg, hsl(38 36% 94%), hsl(20 26% 80%))",
  deck:
    "radial-gradient(120% 80% at 20% 80%, hsl(95 16% 78%) 0%, transparent 60%), linear-gradient(160deg, hsl(38 36% 94%), hsl(95 14% 82%))",
  doc:
    "radial-gradient(120% 80% at 80% 80%, hsl(38 30% 86%) 0%, transparent 60%), linear-gradient(160deg, hsl(38 36% 94%), hsl(30 18% 86%))",
  sheet:
    "radial-gradient(120% 80% at 50% 10%, hsl(20 20% 78%) 0%, transparent 60%), linear-gradient(160deg, hsl(38 36% 94%), hsl(18 16% 82%))",
};

export function PortfolioCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, mass: 0.3 });
  const x = useTransform(progress, [0, 1], ["0%", "-72%"]);

  const nudge = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="portfolio" ref={containerRef} className="relative bg-ink text-paper">
      <div className="editorial-container pt-32 md:pt-44">
        <div className="mb-10 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="[&_*]:text-paper/60">
              <SectionLabel index="05" label="Portfolio — Documents, Decks, Data" />
            </div>
            <SplitReveal
              as="h2"
              text="A shelf of proof — twelve artefacts."
              className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter md:text-7xl"
            />
            <p className="mt-6 max-w-lg text-pretty text-paper/60">
              Résumé, degree, capstones and coursework. Hover to lift, click to download.
            </p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => nudge(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:bg-paper hover:text-ink"
              aria-label="Previous"
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <button
              onClick={() => nudge(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:bg-paper hover:text-ink"
              aria-label="Next"
            >
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden h-[240vh] md:block" aria-hidden>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-[6vw] will-change-transform">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-[10vw] bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[10vw] bg-gradient-to-l from-ink to-transparent" />
        </div>
      </div>

      <div className="md:hidden">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-10"
          style={{ scrollbarWidth: "none" }}
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="w-[82vw] shrink-0 snap-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useSpring(useTransform(y, [-150, 150], [6, -6]), { stiffness: 150, damping: 18 });
  const rotY = useSpring(useTransform(x, [-150, 150], [-6, 6]), { stiffness: 150, damping: 18 });
  const ref = useRef<HTMLDivElement>(null);
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const Icon = typeIcon[item.type];
  const glare = useMotionTemplate`radial-gradient(320px circle at ${cursorX}px ${cursorY}px, rgba(247,244,238,0.16), transparent 60%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left - r.width / 2;
    const py = e.clientY - r.top - r.height / 2;
    x.set(px);
    y.set(py);
    cursorX.set(e.clientX - r.left);
    cursorY.set(e.clientY - r.top);
  };

  return (
    <motion.a
      ref={ref}
      href={item.downloadUrl}
      download
      data-cursor="view"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        x.set(0);
        y.set(0);
      }}
      onMouseMove={onMove}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex h-[460px] w-[360px] shrink-0 flex-col justify-between overflow-hidden rounded-[28px] border border-paper/10 bg-paper/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-paper/25"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glare }}
      />

      <div
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: gradientFor[item.type] }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="kicker tab-num text-paper/60 group-hover:text-ink/60">{item.num}</span>
          <span className="h-px w-8 bg-paper/30 group-hover:bg-ink/30" />
          <span className="kicker text-paper/60 group-hover:text-ink/60">
            {typeLabel[item.type]}
          </span>
        </div>
        <span className="rounded-full border border-paper/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-micro text-paper/70 group-hover:border-ink/20 group-hover:text-ink/70">
          {item.ext}
        </span>
      </div>

      <div className="relative z-10">
        <div
          className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-paper/20 text-paper/90 transition-colors duration-500 group-hover:border-ink/20 group-hover:bg-ink group-hover:text-paper"
        >
          <Icon size={22} weight="duotone" />
        </div>

        <h3 className="font-display text-3xl leading-[1] tracking-tighter text-paper transition-colors duration-500 group-hover:text-ink">
          {item.title}
        </h3>

        {item.course && (
          <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-micro text-paper/50 group-hover:text-ink/60">
            {item.course}
          </span>
        )}

        <p className="mt-4 text-sm text-paper/70 transition-colors duration-500 group-hover:text-ink/70">
          {item.description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-paper/15 pt-4 group-hover:border-ink/15">
        <span className="text-xs text-paper/60 group-hover:text-ink/70">Click to download</span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-all duration-500 group-hover:border-ink/20 group-hover:bg-ink group-hover:text-paper">
          {hover ? (
            <ArrowUpRight size={14} weight="bold" />
          ) : (
            <DownloadSimple size={14} weight="bold" />
          )}
        </span>
      </div>
    </motion.a>
  );
}

