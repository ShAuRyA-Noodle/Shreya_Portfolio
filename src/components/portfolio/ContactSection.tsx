import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "Punj.shreya28@gmail.com",
    href: "mailto:Punj.shreya28@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "(647) 223-1640",
    href: "tel:+16472231640",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/shreya-punjj",
    href: "https://www.linkedin.com/in/shreya-punjj",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Greater Toronto Area, Canada",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Get in Touch
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm currently open to new opportunities in administrative and medical 
              administrative roles. Feel free to reach out—I'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactInfo.map((item, index) => (
              <div key={index} className="card-elevated p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" asChild>
              <a href="mailto:Punj.shreya28@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}