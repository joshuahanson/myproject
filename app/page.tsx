import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import About from "@/components/About";
import WorkGrid from "@/components/WorkGrid";
import HowIWork from "@/components/HowIWork";
import ExperienceSnapshot from "@/components/ExperienceSnapshot";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <WorkGrid />
        <HowIWork />
        <ExperienceSnapshot />
        <ResumeCTA />
        <Contact />
      </main>
      <footer className="px-6 py-8 border-t border-[#e8e8e8]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#aaa]">© {new Date().getFullYear()} Joshua Hanson</p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:joshhanson.ca@gmail.com"
              className="text-xs text-[#aaa] hover:text-[#111] transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/hansonjoshua"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#aaa] hover:text-[#111] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="/resume"
              className="text-xs text-[#aaa] hover:text-[#111] transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
