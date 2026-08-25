import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = localFont({
  src: "../fonts/outfit-latin-wght-normal.woff2",
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://space-portofolio.vercel.app";

const title = "Rizky Dev — Jasa Pembuatan Website & Joki Coding | rzkydev";
const description =
  "Jasa pembuatan website profesional & joki coding oleh Rizky Dev (rzkydev). Landing page, company profile, dan full-stack app — cepat, responsif, SEO-ready!";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Rizky",
      alternateName: ["rzkydev", "Rizky Dev", "rzky 666", "666 dev"],
      url: siteUrl,
      jobTitle: "Full-Stack Developer",
      description:
        "Jasa pembuatan website dan joki coding — landing page, company profile, dan aplikasi full-stack.",
      knowsAbout: [
        "Jasa Pembuatan Website",
        "Joki Coding",
        "Web Development",
        "Next.js",
        "React",
        "TypeScript",
      ],
      sameAs: ["https://github.com/rzkyfhrzi21"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Rizky Dev — Space Portofolio",
      inLanguage: "id-ID",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "rzkydev",
    "rizky dev",
    "rzky 666",
    "666 dev",
    "joki coding",
    "jasa joki coding",
    "jasa pembuatan website",
    "jasa pembuatan website profesional",
    "jasa website murah",
    "web developer indonesia",
    "jasa landing page",
    "full-stack developer indonesia",
  ],
  authors: [{ name: "Rizky Dev", url: siteUrl }],
  creator: "rzkydev",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Rizky Dev — Space Portofolio",
    title,
    description,
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Rizky Dev — Jasa Pembuatan Website & Joki Coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`dark ${GeistSans.variable} ${GeistMono.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-bg text-text"
      >
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="/security-warning.js"
          strategy="afterInteractive"
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
