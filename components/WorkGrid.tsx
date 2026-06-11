"use client";

import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import { projects } from "@/lib/projects";

export default function WorkGrid() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff7500] mb-3">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
            Selected projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <WorkCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
