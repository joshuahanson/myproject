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
    default: "Joshua Hanson — Frontend Engineer",
    template: "%s — Joshua Hanson",
  },
  description:
    "Frontend engineer with nearly a decade of experience across ecommerce platforms, agency work, and internal tooling. Strong focus on component architecture, design systems, and performance.",
  metadataBase: new URL("https://joshhanson.ca"),
  openGraph: {
    title: "Joshua Hanson — Frontend Engineer",
    description:
      "Frontend engineer with nearly a decade of experience across ecommerce platforms, agency work, and internal tooling. Strong focus on component architecture, design systems, and performance.",
    url: "https://joshhanson.ca",
    siteName: "Joshua Hanson",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Joshua Hanson — Frontend Engineer",
    description:
      "Frontend engineer with nearly a decade of experience. Component architecture, design systems, performance.",
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
  name: "Joshua Hanson",
  url: "https://joshhanson.ca",
  jobTitle: "Frontend Engineer",
  description:
    "Frontend engineer with a strong focus on component architecture, design systems, and performance.",
  email: "joshhanson.ca@gmail.com",
  sameAs: ["https://linkedin.com/in/hansonjoshua"],
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
