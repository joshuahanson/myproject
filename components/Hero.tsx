"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[750px] flex flex-col justify-center px-6 pt-24 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-semibold text-[#ff7500] uppercase tracking-widest mb-6"
        >
          Josh Hanson
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111] leading-[1.1] tracking-tight mb-8"
        >
          I build interfaces that look right, load fast, and hold up at scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg text-[#555] mb-10 leading-relaxed"
        >
          Frontend Engineer with a strong focus on component architecture,
          design systems, and performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#111] text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#ff7500] transition-colors duration-200"
          >
            Get in touch
          </a>
          <a
            href="/resume"
            className="inline-flex items-center gap-2 border border-[#e8e8e8] text-[#111] text-sm font-semibold px-5 py-3 rounded-full hover:border-[#111] transition-colors duration-200"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
