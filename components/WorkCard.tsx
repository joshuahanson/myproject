"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/lib/projects";

const placeholderColors: Record<string, string> = {
  "hifyre-ecommerce": "#f0ede8",
  "hifyre-kiosk": "#edeef5",
  "component-library": "#edf5ed",
  "cbc-sports": "#f5edee",
};

export default function WorkCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const bgColor = placeholderColors[project.slug] || "#f5f5f5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(0,0,0,0.10)" }}
          transition={{ duration: 0.2 }}
          className="bg-white border border-[#e8e8e8] rounded-[15%] overflow-hidden cursor-pointer"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
        >
          {/* Image placeholder */}
          <div
            className="w-full aspect-[16/9] flex items-center justify-center"
            style={{ background: bgColor }}
          >
            <img
              src={typeof project.images[0] === "string" ? project.images[0] : project.images[0].src}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Card body */}
          <div className="p-6">
            <h3 className="text-base font-semibold text-[#111] mb-2 group-hover:text-[#ff7500] transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-[#555] bg-[#f5f5f5] px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
