import type { StaticImageData } from "next/image"

// HIFYRE IMAGES
import skeletonLoaded from "../app/images/hifyre/hifyre-loaded.webp"
import skeletonLoading from "../app/images/hifyre/hifyre-skeleton.webp"
import kiosk from "../app/images/hifyre/kiosk.webp"
import storeMenus from "../app/images/hifyre/store-menus.webp"
import prairie from "../app/images/hifyre/prairierecords.webp"

// CBC IMAGES
import cbcBelow from "../app/images/cbc/CBC-below-fold.webp"
import cbcHero from "../app/images/cbc/CBC-hero.webp"
import cbcMobile from "../app/images/cbc/CBC-mobile.webp"

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  stack: string[];
  period: string;
  attribution: string;
  body: string[];
  images: Array<string | StaticImageData>
}

export const projects: Project[] = [
  {
    slug: "hifyre-ecommerce",
    title: "Hifyre — Ecommerce Platform",
    shortTitle: "Hifyre Ecommerce",
    tagline:
      "Primary frontend engineer on a cannabis retail platform supporting 200+ stores across Canada.",
    stack: ["React", "Phoenix LiveView", "Elixir", "CSS", "JavaScript", "Figma"],
    period: "2019–2026",
    attribution: "Built during my time at Hifyre / Fire & Flower (2019–2026)",
    body: [
      "Hifyre powers the retail operations of 200+ cannabis stores across Canada, spanning ecommerce, self-ordering kiosks, in-store displays, internal tooling, and wholesale operations.",
      "I joined as the primary frontend engineer on a React and Node based ecommerce platform. Over time the stack evolved significantly, with the team migrating to a new Elixir and Phoenix LiveView architecture. Taking on a new language and paradigm mid-tenure while continuing to ship features was one of the more formative experiences of my career.",
      "Day to day work involved constant iteration — A/B testing, one-off marketing campaigns, SEO projects, performance improvements, and new feature development. Over time the scope grew to include new internal management applications, a self-ordering kiosk app, and a shared component library used across all of the platforms.",
      "Larger projects included a full homepage redesign validated through A/B testing, a CMS-driven product carousel that gave marketing a proper tool for brand partnership campaigns, a site-wide skeleton loading system that improved perceived performance, and a product page redesign that was later adopted across the cart, kiosk, and tablet interfaces.",
    ],
    images: [prairie],
  },
  {
    slug: "hifyre-kiosk",
    title: "Hifyre — Self-Ordering Kiosk",
    shortTitle: "Hifyre Kiosk",
    tagline:
      "Adapted a tablet UI to a 1080x1920 portrait kiosk display. Shipped across retail locations.",
    stack: ["React", "Phoenix LiveView", "Elixir", "CSS", "JavaScript", "Figma"],
    period: "2019–2026",
    attribution: "Built during my time at Hifyre / Fire & Flower (2019–2026)",
    body: [
      "Hifyre's self-ordering kiosk brings a McDonald's-style ordering experience to cannabis retail. The kiosk app was built on top of the existing clienteling tablet app, adapted to run on a 1080x1920 portrait display in-store.",
      "The core challenge was taking a UI designed for iPad and making it work on a tall portrait screen without a full redesign. That meant rethinking layout, touch targets, and navigation patterns for a very different form factor and use case. The result was a standalone kiosk experience that let customers browse and order independently, reducing strain on in-store staff.",
    ],
    images: [kiosk, storeMenus],
  },
  {
    slug: "component-library",
    title: "Hifyre — Component Library & Performance",
    shortTitle: "Component Library",
    tagline:
      "Built and standardized a shared component system used across multiple apps and platforms.",
    stack: ["Phoenix LiveView", "Elixir", "CSS/SCSS", "Figma"],
    period: "2019–2026",
    attribution: "Built during my time at Hifyre / Fire & Flower (2019–2026)",
    body: [
      "As the platform grew across multiple surfaces — ecommerce, kiosks, internal tools, and displays — the need for a consistent, reusable component system became critical. I contributed heavily to building and standardizing the shared component library, migrating frequently used patterns into clean, composable function components that the whole team could reach for across any app.",
      "On the performance side, I took a systematic approach to identifying and solving frontend bottlenecks. I built a thirdPartyLoader utility that defers third-party script loading until the component that needs it mounts, eliminating the cost of loading Google Maps, Canada Post, reCAPTCHA, and others globally. I also overhauled the SCSS architecture to prioritize critical above-the-fold styles, implemented site-wide skeleton loading states, and iterated on a service worker caching strategy for static assets.",
      "The goal throughout was the same: a faster, more consistent, more maintainable frontend that the whole team benefited from.",
    ],
    images: [skeletonLoading, skeletonLoaded],
  },
  {
    slug: "cbc-sports",
    title: "CBC Sports — Winter Olympics Activation",
    shortTitle: "CBC Sports",
    tagline:
      "Fast-turnaround Samsung brand activation microsite for CBC Sports, live before the Olympics opened.",
    stack: ["JavaScript", "HTML", "CSS"],
    period: "2017–2019",
    attribution: "Built during my time at Form & Affect (2017–2019)",
    body: [
      "A fast-turnaround marketing microsite built for CBC Sports ahead of the Winter Olympics. The site was a Samsung brand activation page linking audiences to VR-streamed Olympic events, live under a CBC Sports subdomain.",
      "Built from designer mockups to production under a tight deadline. One of those projects where the timeline was the challenge as much as the work itself.",
    ],
    images: [cbcHero, cbcBelow, cbcMobile],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
