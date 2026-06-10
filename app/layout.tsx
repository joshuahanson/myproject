import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josh Hanson — Frontend Engineer",
  description:
    "Frontend Engineer with a strong focus on component architecture, design systems, and performance.",
  openGraph: {
    title: "Josh Hanson — Frontend Engineer",
    description:
      "Frontend Engineer with a strong focus on component architecture, design systems, and performance.",
    url: "https://joshhanson.ca",
    siteName: "Josh Hanson",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white text-[#111111] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
