import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "Joshi Management",
    role: "Medical Administrative Assistant",
    period: "Feb 2024 – Present",
    current: true,
    responsibilities: [
      "Manage and update patient records using PS Suite (EMR) with strict attention to accuracy and confidentiality",
      "Handle patient inquiries, appointment scheduling, and front-desk operations",
      "Coordinate clinic supplies and maintain organized inventory systems",
    ],
  },
  {
    company: "Pingash Enterprise",
    role: "Administrative Assistant",
    period: "Sep 2022 – Jul 2023",
    responsibilities: [
      "Supported daily office operations including documentation, filing, and correspondence",
      "Improved workflow efficiency through systematic organization of records",
      "Recognized as Key Contributor for three consecutive performance cycles",
    ],
  },
  {
    company: "The Westegg Group",
    role: "Customer Service Representative",
    period: "Aug 2021 – Aug 2022",
    responsibilities: [
      "Served as first point of contact at TTC sites, assisting customers with inquiries",
      "Resolved customer issues with patience and professionalism",
      "Coordinated with safety teams to ensure smooth operations",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Professional Experience
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[15px] top-10 bottom-0 w-0.5 bg-border" />
                )}

                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${
                    exp.current
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                </div>

                {/* Content Card */}
                <div className="card-elevated p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}