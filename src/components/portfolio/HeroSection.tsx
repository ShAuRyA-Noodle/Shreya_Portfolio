import { ArrowDown, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            Shreya Punj
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-primary font-medium mb-6">
            Administrative Assistant | Medical Administrative Assistant
          </p>

          {/* Value Proposition */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Bringing precision, reliability, and calm efficiency to healthcare and 
            corporate administration. Dedicated to maintaining accuracy, confidentiality, 
            and seamless operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/shreya-punjj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-sm mb-2">Learn more</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}