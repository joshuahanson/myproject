import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <footer className="px-6 py-8 border-t border-[#e8e8e8]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#aaa]">
            © {new Date().getFullYear()} Josh Hanson
          </p>
        </div>
      </footer>
    </>
  );
}
