import { Metadata } from "next";
import { generateBreadcrumbSchema, generateAggregateRatingSchema } from "@/utils/schema";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
  description:
    "Read 150+ verified reviews for Pigeon Guard Solutions across Andhra Pradesh, including Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry. Rated 4.9/5 for safety netting and invisible grills.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Customer Reviews & Testimonials | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Read 150+ verified reviews for Pigeon Guard Solutions across Andhra Pradesh, including Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
    url: "https://pigeonguardsolutions.com/testimonials",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Pigeon Guard Solutions Testimonials & Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & Testimonials | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Read 150+ verified reviews for Pigeon Guard Solutions across Andhra Pradesh serving Vijayawada, Guntur, Vizag, Nellore, Ongole, Tirupathi, and Rajahmundry.",
    images: ["/images/og-image.webp"],
  },
};

export default function TestimonialsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Testimonials", item: "/testimonials" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAggregateRatingSchema()) }}
      />
      <TestimonialsClient />
    </>
  );
}
