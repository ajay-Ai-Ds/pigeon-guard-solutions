import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

import { generateLocalBusinessSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: {
    default: "Pigeon Guard Solutions | Safety Nets & Invisible Grills Andhra Pradesh",
    template: "%s | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
  },
  description:
    "Pigeon Guard Solutions provides premium balcony safety nets, anti-bird netting, child fall protection, and SS316 invisible grills across Andhra Pradesh, including Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
  keywords: [
    "Safety Nets Andhra Pradesh",
    "Invisible Grills Andhra Pradesh",
    "Balcony Safety Nets Andhra Pradesh",
    "Pigeon Safety Nets Andhra Pradesh",
    "Window Invisible Grills Andhra Pradesh",
    "Ceiling Cloth Hangers Andhra Pradesh",
    "Anti Bird Spikes Andhra Pradesh",
    "Pigeon Guard Solutions Andhra Pradesh",
    "Safety Nets Vijayawada",
    "Safety Nets Guntur",
    "Safety Nets Visakhapatnam",
  ],
  metadataBase: new URL("https://pigeonguardsolutions.com"),
  verification: {
    google: "sxBWfisev7KdCvC-tTgSvXcK8pizCa5U-tnWHB-SUhE",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/images/logo/pigeon-guard-icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/icon.svg",
    apple: "/images/logo/pigeon-guard-icon.svg",
  },
  openGraph: {
    title: "Pigeon Guard Solutions | Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Expert safety netting and modern invisible grill installation in Andhra Pradesh across Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
    url: "https://pigeonguardsolutions.com",
    siteName: "Pigeon Guard Solutions",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pigeon Guard Solutions | Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Premium safety nets and invisible grill installers in Andhra Pradesh serving Vijayawada, Guntur, Vizag, Nellore, Ongole, Tirupathi, and Rajahmundry.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon fallback tags for all browsers & search engines */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen selection:bg-sky-500 selection:text-white`}
      >
        {/* LocalBusiness JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <Navbar />
        <main className="flex-grow pt-[84px] sm:pt-[92px]">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
