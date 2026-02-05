import { Monitor, Users, Database, Languages } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Technical Skills",
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
    icon: <Database className="h-5 w-5" />,
    title: "Administrative",
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
    icon: <Users className="h-5 w-5" />,
    title: "Professional",
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
    icon: <Languages className="h-5 w-5" />,
    title: "Languages",
    skills: ["English (Fluent)", "Hindi (Fluent)", "Punjabi (Fluent)"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}