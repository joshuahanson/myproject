"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "I ask questions before building.",
    body: "A vague feature usually needs clearer requirements before it needs more code.",
  },
  {
    title: "I care about the in-between states.",
    body: "Loading, empty, error, disabled, and responsive states are part of the interface, not afterthoughts.",
  },
  {
    title: "I turn repeated patterns into reusable pieces.",
    body: "If the same UI keeps showing up, it probably belongs in a component.",
  },
  {
    title: "I think frontend is product work.",
    body: "The interface is where users feel every product decision, good or bad.",
  },
];

export default function HowIWork() {
  return (
    <section className="px-6 py-24 border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff7500] mb-3">
            Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
            How I work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-[#e8e8e8] rounded-[20px] p-6"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
            >
              <p className="text-base font-semibold text-[#111] mb-2">{p.title}</p>
              <p className="text-sm text-[#555] leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
