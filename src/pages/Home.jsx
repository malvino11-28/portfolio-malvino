import { Navbar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
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
      </main>
      {/* Footer */}
    </div>
  );
};
