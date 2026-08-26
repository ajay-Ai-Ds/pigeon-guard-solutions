import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
  description:
    "Explore case studies & real installation projects by Pigeon Guard Solutions across Andhra Pradesh, including Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Explore case studies & real installation projects by Pigeon Guard Solutions across Andhra Pradesh, including Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
    url: "https://pigeonguardsolutions.com/case-studies",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Pigeon Guard Solutions Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Explore case studies & real installation projects by Pigeon Guard Solutions across Andhra Pradesh serving Vijayawada, Guntur, Vizag, Nellore, Ongole, Tirupathi, and Rajahmundry.",
    images: ["/images/og-image.webp"],
  },
};

export default function CaseStudiesPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <CaseStudiesClient />
    </>
  );
}
