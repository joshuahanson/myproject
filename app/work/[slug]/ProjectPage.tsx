"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import ProjectImageGrid from "@/components/ProjectImageGrid";
import { Project } from "@/lib/projects";

export default function ProjectPage({ project }: { project: Project }) {

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="text-sm text-[#555] hover:text-[#111] transition-colors duration-200"
            >
              ← All work
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#ff7500] mb-3">
              {project.period}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-[#555] leading-relaxed">
              {project.tagline}
            </p>
          </motion.div>

          {/* Stack tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-[#555] bg-[#f5f5f5] px-3 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Body copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="space-y-5 mb-12"
          >
            {project.body.map((paragraph, i) => (
              <p key={i} className="text-base text-[#444] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <ProjectImageGrid slug={project.slug} images={project.images} />

          {/* Attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-xs text-[#aaa] border-t border-[#e8e8e8] pt-6"
          >
            {project.attribution}
          </motion.p>
        </div>
      </main>
    </>
  );
}
