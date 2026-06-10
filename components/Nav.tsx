"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-[#111] tracking-tight hover:text-[#ff7500] transition-colors duration-200"
        >
          Josh Hanson
        </Link>
        <div className="flex items-center gap-6">
          {isHome ? (
            <>
              <a
                href="#work"
                className="text-sm text-[#555] hover:text-[#111] transition-colors duration-200"
              >
                Work
              </a>
              <a
                href="#about"
                className="text-sm text-[#555] hover:text-[#111] transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm text-[#555] hover:text-[#111] transition-colors duration-200"
              >
                Contact
              </a>
            </>
          ) : (
            <Link
              href="/"
              className="text-sm text-[#555] hover:text-[#111] transition-colors duration-200"
            >
              ← Back
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
