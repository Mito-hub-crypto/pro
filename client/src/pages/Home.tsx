import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AudioControl } from "@/components/AudioControl";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <AudioControl />
    </div>
  );
}
