"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff7500] mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
            Background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-base text-[#444] leading-relaxed">
            I think frontend quality increasingly comes down to the systems
            underneath it. As AI-assisted development becomes more common,
            reusable components, clear patterns, and good defaults matter even
            more. I've spent years building and standardizing shared component
            libraries, and it's the kind of work I enjoy most.
          </p>
          <p className="text-base text-[#444] leading-relaxed">
            I'm a frontend engineer with nearly a decade of experience building
            production web applications across ecommerce platforms, agency work,
            internal tools, and component systems. My strongest work sits between
            engineering and design — reusable components, interaction patterns,
            performance improvements, and the small UI details that make software
            easier to use.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
