import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Detail-oriented documentation management",
  "Healthcare & corporate administration experience",
  "Proficient in PS Suite (EMR) and SAP systems",
  "Strong commitment to confidentiality",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Main Text */}
            <div className="md:col-span-3 space-y-5">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a detail-oriented Administrative Assistant with a Bachelor's degree in 
                Business Administration from Seneca Polytechnic. My experience spans healthcare 
                clinics, corporate offices, and customer-facing roles—each reinforcing my 
                commitment to accuracy, organization, and professional communication.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether managing patient records in a busy medical practice, coordinating 
                schedules across teams, or ensuring documentation meets compliance standards, 
                I approach every task with care and precision. I take pride in creating 
                organized systems that help teams work more efficiently.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to contribute to environments where reliability and attention to 
                detail make a real difference—supporting healthcare providers, office managers, 
                and organizations in delivering excellent service.
              </p>
            </div>

            {/* Highlights Card */}
            <div className="md:col-span-2">
              <div className="card-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Core Strengths
                </h3>
                <ul className="space-y-3">
                  {highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}