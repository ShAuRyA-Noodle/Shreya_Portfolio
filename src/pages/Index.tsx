import { Header } from "@/components/portfolio/Header";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { PortfolioCarousel } from "@/components/portfolio/PortfolioCarousel";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { SmoothScroll } from "@/components/portfolio/shared/SmoothScroll";
import { GrainOverlay } from "@/components/portfolio/shared/GrainOverlay";
import { CustomCursor } from "@/components/portfolio/shared/CustomCursor";
import { ScrollProgress } from "@/components/portfolio/shared/ScrollProgress";
import { IntroLoader } from "@/components/portfolio/shared/IntroLoader";

const Index = () => {
  return (
    <SmoothScroll>
      <IntroLoader />
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />

      <div className="relative min-h-[100dvh] bg-cream text-ink">
        <Header />
        <main id="top">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <PortfolioCarousel />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
