import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection compact />
      <SkillsSection />
      <ProjectsSection limit={3} />
      <Testimonials />
      <ContactSection compact />
    </>
  );
}
