import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection compact />
      <SkillsSection />
      <ProjectsSection limit={3} />
      <ContactSection compact />
    </>
  );
}
