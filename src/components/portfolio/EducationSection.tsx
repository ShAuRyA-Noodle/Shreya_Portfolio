import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Sales & CRM",
  "Marketing Research",
  "Consumer Behaviour",
  "Financial Accounting",
  "Managerial Accounting",
  "Business Analytics",
  "Micro & Macro Economics",
];

export function EducationSection() {
  return (
    <section id="education" className="section-padding section-alt">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Education
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Education Card */}
          <div className="card-elevated p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Bachelor of Business Administration
                </h3>
                <p className="text-primary font-medium">Marketing Specialization</p>
                <p className="text-muted-foreground mt-1">
                  Seneca Polytechnic • September 2021 – April 2024
                </p>
              </div>
            </div>

            {/* Coursework */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-foreground">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <span key={index} className="skill-badge">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}