import { useState, useCallback, useEffect, type ReactNode } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Download,
  Award,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";



interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  type: "resume" | "certificate" | "letter" | "sample";
  icon: ReactNode;
  downloadUrl?: string;
}



const portfolioItems: PortfolioItem[] = [
  {
    id: "resume",
    title: "Professional Resume",
    description:
      "My complete resume with detailed work history, education, and skills.",
    type: "resume",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/Shreya_CV.pdf",
  },
  {
    id: "degree",
    title: "BBA Degree Certificate",
    description:
      "Bachelor of Business Administration - Marketing from Seneca Polytechnic.",
    type: "certificate",
    icon: <FileCheck className="h-8 w-8" />,
    downloadUrl: "./documents/Degree.pdf",
  },
  {
    id: "marketing-plan",
    title: "Marketing Plan — Shuttle (Project)",
    description:
      "Comprehensive marketing plan & launch strategy for the Shuttle q-commerce project.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/marketing-plan.pdf",
  },
  {
    id: "martha-stewart",
    title: "Martha Stewart — CBD Strategy",
    description:
      "Brand positioning & strategy slide deck for Martha Stewart Cannabis.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/martha-stewart-cbd.pptx",
  },
  {
    id: "mrk662",
    title: "MRK662 — Dollarama Launch",
    description:
      "New product launch deck and financials for Dollarama.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/mrk662-group3.pptx",
  },
  {
    id: "le-pliage",
    title: "Le Pliage — Longchamp",
    description:
      "Luxury brand & market analysis presentation.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/le-pliage.pptx",
  },
  {
    id: "buyer-behaviour",
    title: "Buyer Behaviour Assignment",
    description:
      "Consumer interview & decision-making analysis.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/buyer-behaviour.docx",
  },
  {
    id: "nevada-case",
    title: "Nevada Stakeholder Case Study",
    description:
      "Stakeholder impact and case analysis report.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/nevada-case.docx",
  },
  {
    id: "mrk516",
    title: "MRK516 Spreadsheet Assignment",
    description:
      "Data analysis and calculations workbook.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/mrk516-assignment1.xlsx",
  },
  {
    id: "loblaws",
    title: "Loblaw Service Analysis",
    description:
      "Service quality and gap analysis assignment.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/loblaws.docx",
  },
  {
    id: "final-exam-sheet",
    title: "Final Exam Workbook (VA)",
    description:
      "Analytics final exam worksheet.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/final-exam-vaworksheet.xlsx",
  },
  {
    id: "mrk428",
    title: "MRK428 Coursework",
    description:
      "Marketing coursework document.",
    type: "sample",
    icon: <FileText className="h-8 w-8" />,
    downloadUrl: "/documents/mrk428.docx",
  },
];



const typeColors = {
  resume: "bg-primary/10 text-primary",
  certificate: "bg-accent text-accent-foreground",
  letter: "bg-warm/10 text-warm",
  sample: "bg-secondary text-secondary-foreground",
};



const typeLabels = {
  resume: "Resume",
  certificate: "Certificate",
  letter: "Recognition",
  sample: "Work Sample",
};



export function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });



  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);



  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);



  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);



  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);



  return (
    <section id="portfolio" className="section-padding section-alt">
      <div className="section-container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Portfolio & Documents
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Access my professional documents, certifications, and work samples.
          </p>
        </div>



        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ChevronLeft />
          </Button>



          <Button
            variant="outline"
            size="icon"
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10"
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ChevronRight />
          </Button>



          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {portfolioItems.map((item) => (
                <div key={item.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 pl-4">
                  <div className="card-elevated p-6 h-full flex flex-col">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs mb-4 ${typeColors[item.type]}`}
                    >
                      {typeLabels[item.type]}
                    </span>



                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>



                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow mb-6">
                      {item.description}
                    </p>



                    <Button size="sm" asChild className="w-full">
                      <a 
                        href={item.downloadUrl} 
                        download={item.title}
                      >
                        <Download className="h-4 w-4 mr-1.5" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>



          <div className="flex justify-center gap-2 mt-6">
            {portfolioItems.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex ? "bg-primary w-6" : "bg-border w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
