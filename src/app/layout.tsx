import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
      className={`dark ${geist.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg text-text">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
