"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    company: "Hifyre",
    role: "Frontend Engineer",
    years: "2019–2026",
    summary: "Cannabis retail technology platform — ecommerce, kiosks, internal tools, shared UI systems.",
  },
  {
    company: "Form & Affect",
    role: "Frontend Developer",
    years: "2017–2019",
    summary: "Agency work across CMS, ecommerce, media, tourism, nonprofits, and React/PWA projects.",
  },
  {
    company: "Northern Commerce",
    role: "Web Developer",
    years: "2017",
    summary: "Magento ecommerce development.",
  },
  {
    company: "Niagara College R&I",
    role: "Designer & Developer",
    years: "2016",
    summary: "UX/UI, WordPress, client projects, and applied research work.",
  },
];

export default function ExperienceSnapshot() {
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
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
            Where I've worked
          </h2>
        </motion.div>

        <div className="space-y-0">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 border-b border-[#e8e8e8] last:border-0"
            >
              <div className="sm:w-40 shrink-0">
                <p className="text-xs text-[#aaa] font-medium">{job.years}</p>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                  <span className="text-sm font-bold text-[#111]">{job.company}</span>
                  <span className="text-sm text-[#555]">· {job.role}</span>
                </div>
                <p className="text-sm text-[#777] leading-relaxed">{job.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
