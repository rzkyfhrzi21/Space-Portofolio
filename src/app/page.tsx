import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ThoughtsSection } from "@/components/ThoughtsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AiTwinSection } from "@/components/AiTwinSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ThoughtsSection />
        <TechStackSection />
        <TestimonialsSection />
        <AiTwinSection />
        <ContactSection />
      </main>
    </>
  );
}
