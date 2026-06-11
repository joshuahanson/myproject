import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Josh Hanson",
  description:
    "Resume for Joshua Hanson, Frontend Engineer. Experience across React, Phoenix LiveView, ecommerce, component systems, performance, accessibility, and product-focused UI work.",
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="py-10 border-b border-[#e8e8e8] last:border-0">
      <p className="text-xs font-bold uppercase tracking-widest text-[#ff7500] mb-6">{label}</p>
      {children}
    </section>
  );
}

function Job({
  dates,
  title,
  company,
  summary,
  bullets,
  tech,
}: {
  dates: string;
  title: string;
  company: string;
  summary: string;
  bullets: string[];
  tech: string;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <p className="text-xs text-[#aaa] font-medium mb-1">{dates}</p>
      <div className="flex flex-wrap items-baseline gap-x-2 mb-2">
        <span className="text-base font-bold text-[#111]">{title}</span>
        <span className="text-base font-bold text-[#ff7500]">{company}</span>
      </div>
      <p className="text-sm text-[#555] leading-relaxed mb-3">{summary}</p>
      <ul className="space-y-1.5 pl-4 mb-3">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-[#444] leading-relaxed list-disc">{b}</li>
        ))}
      </ul>
      <p className="text-xs text-[#888]"><span className="font-semibold text-[#555]">Stack:</span> {tech}</p>
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="pb-10 border-b border-[#e8e8e8] mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ff7500] mb-3">Resume</p>
            <h1 className="text-4xl font-bold text-[#111] tracking-tight mb-3">Joshua Hanson</h1>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#555]">
              <a
                href="https://joshhanson.ca"
                className="hover:text-[#ff7500] transition-colors duration-200"
              >
                joshhanson.ca
              </a>
              <a
                href="https://linkedin.com/in/hansonjoshua"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff7500] transition-colors duration-200"
              >
                linkedin.com/in/hansonjoshua
              </a>
            </div>
          </div>

          {/* Work Experience */}
          <Section label="Work Experience">
            <Job
              dates="May 2019 – Present"
              title="Frontend Developer"
              company="Hifyre"
              summary="Cannabis retail platform supporting 200+ stores across Canada, including ecommerce, self-ordering kiosks, in-store displays, internal tools, wholesale workflows, and shared UI systems."
              bullets={[
                "Developed frontend features across Phoenix LiveView and React applications, including ecommerce pages, product cards, filters, landing pages, internal management screens, and kiosk interfaces",
                "Built and refactored reusable UI components within a shared monorepo component library, reducing duplicated UI patterns across multiple applications",
                "Implemented frontend performance and UX improvements, including skeleton loading states, layout shift reduction, lazy-loading patterns, and improved loading behaviour for ads, product cards, and page content",
                "Collaborated with product managers and designers on new feature development, Figma handoffs, UI iteration, and component-level implementation details",
                "Added analytics and event tracking for customer actions, and contributed to SEO, accessibility, metadata, and structured content improvements",
              ]}
              tech="Phoenix LiveView, Elixir, JavaScript, React, Redux, HTML, CSS/SCSS"
            />
            <div className="border-t border-[#e8e8e8] my-8" />
            <Job
              dates="November 2017 – May 2019"
              title="Frontend Developer"
              company="Form & Affect"
              summary="Client-focused agency work across ecommerce, media, tourism, nonprofits, wineries, and local businesses."
              bullets={[
                "Built custom websites, web applications, CMS themes, and frontend components from designer mockups",
                "Developed and customized WordPress, ExpressionEngine, and Shopify sites, including custom themes, plugins, and frontend functionality",
                "Integrated REST APIs into websites and web applications for dynamic and real-time content",
                "Built a React-based progressive web app with service workers and offline support",
                "Developed interactive sites for CBC Sports, including fast-turnaround work during the Winter Olympics",
              ]}
              tech="JavaScript, React, HTML, CSS/SCSS, WordPress, Shopify, ExpressionEngine, REST APIs, service workers"
            />
            <div className="border-t border-[#e8e8e8] my-8" />
            <Job
              dates="2017"
              title="Web Developer"
              company="Northern Commerce"
              summary="Magento ecommerce development within a larger structured development team."
              bullets={[
                "Built custom Magento and Magento 2 themes, frontend components, modules, and plugins",
                "Created product import scripts for migrating client data into new Magento builds",
                "Participated in cross-functional design and development reviews",
                "Prepared technical estimates with subtasks, dependencies, timelines, and implementation risks",
                "Worked within structured Git workflows, task tracking, and code review processes",
              ]}
              tech="Magento, Magento 2, PHP, JavaScript, SASS, HTML, CSS, Git"
            />
            <div className="border-t border-[#e8e8e8] my-8" />
            <Job
              dates="2016"
              title="Designer & Developer"
              company="Niagara College Research & Innovation"
              summary="Applied research role spanning UX/UI design, web development, mobile development, and client-facing project work."
              bullets={[
                "Created UX/UI deliverables including storyboards, wireframes, mockups, and information architecture",
                "Designed and developed custom WordPress sites, themes, plugins, and a member portal for an industry client",
                "Built a cross-platform mobile application using Xamarin",
                "Presented project updates to management and clients throughout the project lifecycle",
                "Led client training sessions for websites, CMS platforms, software tools, and mobile applications",
              ]}
              tech="WordPress, PHP, HTML, CSS, JavaScript, Xamarin, C#"
            />
          </Section>

          {/* Skills */}
          <Section label="Skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  heading: "Frontend",
                  items: [
                    "JavaScript, HTML, CSS/SCSS, React, Redux, Phoenix LiveView",
                    "Responsive design, component architecture, UI development",
                  ],
                },
                {
                  heading: "UX / Product",
                  items: [
                    "Figma handoffs, wireframes, mockups, component libraries, design systems",
                    "Accessibility, user flows, frontend performance, analytics/event tracking",
                  ],
                },
                {
                  heading: "Performance",
                  items: [
                    "Core Web Vitals, CLS reduction, skeleton loading states",
                    "Perceived performance, lazy loading, caching, service workers",
                  ],
                },
                {
                  heading: "Tools / Platforms",
                  items: [
                    "WordPress, Shopify, ExpressionEngine, Magento, Magento 2",
                    "REST APIs, Git, GitHub, task tracking, technical estimates",
                  ],
                },
              ].map(({ heading, items }) => (
                <div key={heading}>
                  <p className="text-sm font-bold text-[#111] mb-2">{heading}</p>
                  <ul className="space-y-1 pl-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-sm text-[#444] leading-relaxed list-disc">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section label="Education">
            <p className="text-xs text-[#aaa] font-medium mb-1">2014 – 2016</p>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-base font-bold text-[#111]">Computer Programmer Analyst — Co-op</span>
              <span className="text-base font-bold text-[#ff7500]">Niagara College</span>
            </div>
          </Section>

        </div>
      </main>
    </>
  );
}
