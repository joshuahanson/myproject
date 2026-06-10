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
          className="max-w-2xl space-y-5"
        >
          <p className="text-base text-[#444] leading-relaxed">
            I'm a Frontend Engineer based in Niagara Falls, Ontario, with nearly
            a decade of experience building production web applications. My
            background spans ecommerce platforms, agency work, and internal
            tooling, with a consistent focus on the overlap between engineering
            and design. I work closely with designers, think carefully about
            component architecture, and care about shipping interfaces that feel
            as good as they function.
          </p>
          <p className="text-base text-[#444] leading-relaxed">
            I believe the future of frontend engineering is in well-designed
            component systems. As AI-assisted development becomes the norm, the
            quality of your components determines the quality of everything built
            from them. I've spent years building and standardizing shared
            component libraries, and it's the kind of work I find most
            interesting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
