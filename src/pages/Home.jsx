import { Navbar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle */}
      <ThemeToggle />
      {/*Background effects*/}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/*Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* Footer */}
    </div>
  );
};
