"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumeCTA() {
  return (
    <section className="px-6 py-24 border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff7500] mb-3">
            Resume
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight mb-4">
            Want the full picture?
          </h2>
          <p className="text-base text-[#555] mb-8 max-w-md">
            Work history, technologies, and project details — all in one place.
          </p>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 bg-[#111] text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#ff7500] transition-colors duration-200"
          >
            View Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
