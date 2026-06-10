"use client";

import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type GridItem = {
  imageIndex: number;
  gridColumn: string;
  gridRow: string;
  objectPosition?: string;
};

type GridConfig = {
  templateColumns: string;
  templateRows: string;
  gap?: string;
  items: GridItem[];
};

// Hardcoded layouts per project, informed by each image's actual dimensions/orientation.
const layouts: Record<string, GridConfig> = {
  // 5 images: [0]prairie L, [1]reactHome L, [2]reactSpark L, [3]skeletonLoaded P, [4]fika P
  // Portraits bookend the two stacked landscapes; reactSpark runs full-width below.
  "hifyre-ecommerce": {
    templateColumns: "1fr",
    templateRows: "auto",
    items: [
      { imageIndex: 0, gridColumn: "1", gridRow: "1" },                             // prairie landscape
    ],
  },

  // 2 images: [0]kiosk P (2250x3000), [1]storeMenus L (2000x900)
  // Kiosk portrait on left (narrower col), landscape menu shot on right.
  "hifyre-kiosk": {
    templateColumns: "1fr 2fr",
    templateRows: "500px",
    items: [
      { imageIndex: 0, gridColumn: "1", gridRow: "1", objectPosition: "top" }, // kiosk portrait
      { imageIndex: 1, gridColumn: "2", gridRow: "1" },                         // storeMenus landscape
    ],
  },

  // 2 images: [0]skeletonLoading P, [1]skeletonLoaded P — before/after, both portrait
  "component-library": {
    templateColumns: "1fr 1fr",
    templateRows: "auto",
    items: [
      { imageIndex: 0, gridColumn: "1", gridRow: "1", objectPosition: "top" },
      { imageIndex: 1, gridColumn: "2", gridRow: "1", objectPosition: "top" },
    ],
  },

  // 3 images: [0]cbcHero L, [1]cbcBelow L, [2]cbcMobile P (401x869)
  // Portrait in col 1 spans both rows; two landscape shots stack in col 2.
  "cbc-sports": {
    templateColumns: "2fr 3fr",
    templateRows: "260px 260px",
    items: [
      { imageIndex: 2, gridColumn: "1", gridRow: "1 / 3" }, // cbcMobile portrait
      { imageIndex: 0, gridColumn: "2", gridRow: "1" },      // cbcHero landscape
      { imageIndex: 1, gridColumn: "2", gridRow: "2" },      // cbcBelow landscape
    ],
  },
};

function imgSrc(img: string | StaticImageData): string {
  return typeof img === "string" ? img : img.src;
}

export default function ProjectImageGrid({
  slug,
  images,
}: {
  slug: string;
  images: Array<string | StaticImageData>;
}) {
  const layout = layouts[slug];

  // Fallback: simple 2-col grid if no layout defined
  if (!layout) {
    return (
      <div className="grid grid-cols-2 gap-3 mb-12">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-2xl aspect-video">
            <img src={imgSrc(img)} className="w-full h-full object-cover" alt="" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      style={{
        display: "grid",
        gridTemplateColumns: layout.templateColumns,
        gridTemplateRows: layout.templateRows,
        gap: layout.gap ?? "1rem",
      }}
      className="project-image-grid mb-12"
    >
      {layout.items.map(({ imageIndex, gridColumn, gridRow, objectPosition }) => {
        const img = images[imageIndex];
        if (!img) return null;
        return (
          <div
            key={imageIndex}
            style={{ gridColumn, gridRow }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={imgSrc(img)}
              className="w-full h-full object-cover"
              style={{ objectPosition: objectPosition ?? "center" }}
              alt=""
            />
          </div>
        );
      })}
    </motion.div>
  );
}
