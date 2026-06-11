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
            I'm a frontend engineer with nearly a decade of experience across
            ecommerce platforms, agency work, and internal tooling. My strongest
            work sits at the overlap of engineering and design: reusable
            components, interaction patterns, performance improvements, and the
            small UI details that make software feel right.
          </p>
          <p className="text-base text-[#444] leading-relaxed">
            Frontend quality comes down to the systems underneath it. As
            AI-assisted development becomes more common, reusable components,
            clear patterns, and good defaults matter more than ever. I've spent
            years building and standardizing shared component libraries. It's the
            work I find most interesting and do best.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
