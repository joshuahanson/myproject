import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Josh Hanson — Frontend Engineer",
    template: "%s — Josh Hanson",
  },
  description:
    "Frontend Engineer based in Niagara Falls, Ontario. Nearly a decade of experience building production web applications with a focus on component architecture, design systems, and performance.",
  metadataBase: new URL("https://joshhanson.ca"),
  openGraph: {
    title: "Josh Hanson — Frontend Engineer",
    description:
      "Frontend Engineer based in Niagara Falls, Ontario. Nearly a decade of experience building production web applications with a focus on component architecture, design systems, and performance.",
    url: "https://joshhanson.ca",
    siteName: "Josh Hanson",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Josh Hanson — Frontend Engineer",
    description:
      "Frontend Engineer based in Niagara Falls, Ontario. Component architecture, design systems, performance.",
  },
  alternates: {
    canonical: "https://joshhanson.ca",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Josh Hanson",
  url: "https://joshhanson.ca",
  jobTitle: "Frontend Engineer",
  description:
    "Frontend Engineer with a strong focus on component architecture, design systems, and performance.",
  email: "joshhanson.ca@gmail.com",
  sameAs: ["https://linkedin.com/in/hansonjoshua"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Niagara Falls",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-white text-[#111111] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
