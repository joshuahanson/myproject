"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff7500] mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight mb-4">
            Get in touch
          </h2>
          <p className="text-base text-[#555] mb-8">
            Open to frontend engineering and design systems roles.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/hansonjoshua"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#e8e8e8] text-[#111] text-sm font-semibold px-5 py-3 rounded-full hover:border-[#111] transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
