import type { Metadata } from "next";
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

const siteUrl = "https://www.izaditya.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aditya Imam Zuhdi — Full-Stack & AI Engineer",
  description:
    "Seorang Builder berbasis di Indonesia. Berpengalaman membangun aplikasi web modern, backend yang scalable, dan integrasi AI untuk produk digital.",
  keywords: [
    "Aditya Imam Zuhdi",
    "Full-Stack Engineer",
    "AI Engineer",
    "Backend Developer",
    "Next.js",
    "Indonesia",
  ],
  authors: [{ name: "Aditya Imam Zuhdi" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: "Aditya Imam Zuhdi — Full-Stack & AI Engineer",
    description:
      "Seorang Builder berbasis di Indonesia. Berpengalaman membangun aplikasi web modern, backend yang scalable, dan integrasi AI untuk produk digital.",
    siteName: "Aditya Imam Zuhdi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Imam Zuhdi — Full-Stack & AI Engineer",
    description:
      "Seorang Builder berbasis di Indonesia. Berpengalaman membangun aplikasi web modern, backend yang scalable, dan integrasi AI untuk produk digital.",
  },
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
