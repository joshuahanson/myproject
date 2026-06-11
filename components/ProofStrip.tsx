"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10 years",
    label: "Frontend development across product teams, ecommerce platforms, and agency work.",
  },
  {
    value: "200+ stores",
    label: "Frontend work for a national cannabis retail platform.",
  },
  {
    value: "Product + UX",
    label: "Components, Figma handoffs, accessibility, performance, and user flows.",
  },
];

export default function ProofStrip() {
  return (
    <section className="px-6 py-12 border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p className="text-2xl font-bold text-[#ff7500] mb-1">{stat.value}</p>
            <p className="text-sm text-[#555] leading-relaxed">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
