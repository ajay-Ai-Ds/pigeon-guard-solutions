import { Metadata } from "next";
import Link from "next/link";
import { Home, MapPin, Globe, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { areasList, areasData } from "@/utils/areasData";
import { generateBreadcrumbSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";

export const metadata: Metadata = {
  title: "Areas We Serve | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
  description:
    "Pigeon Guard Solutions provides doorstep site measurement and safety net installation across Andhra Pradesh: Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title: "Areas We Serve | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Pigeon Guard Solutions provides doorstep site measurement and safety net installation across Andhra Pradesh: Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
    url: "https://pigeonguardsolutions.com/areas",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Areas We Serve - Pigeon Guard Solutions Andhra Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas We Serve | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Pigeon Guard Solutions provides doorstep site measurement and safety net installation across Andhra Pradesh serving Vijayawada, Guntur, Vizag, Nellore, Ongole, Tirupathi, and Rajahmundry.",
    images: ["/images/og-image.webp"],
  },
};

export default function AreasPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Areas We Serve", item: "/areas" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#4FC3F7] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#0B2545] font-bold">Areas We Serve</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-block self-start">
            Multi-City Coverage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Our Service Locations Across Andhra Pradesh
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pigeon Guard Solutions operates across all 7 key cities in Andhra Pradesh. We provide prompt on-site measurements, certified safety netting, and SS316 invisible grill installations for residential apartments, villas, and commercial complexes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* 7 Cities Cards Grid (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs">
              <h2 className="text-lg font-bold text-[#0B2545] mb-6 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#4FC3F7]" />
                <span>7 Major Andhra Pradesh Cities Covered</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {areasList.map((slug) => {
                  const city = areasData[slug];
                  if (!city) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/areas/${slug}`}
                      className="group flex flex-col justify-between p-5 bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-[#4FC3F7] hover:shadow-md rounded-2xl transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#4FC3F7]/5 rounded-bl-full pointer-events-none group-hover:bg-[#4FC3F7]/15 transition-colors" />

                      <div className="flex flex-col gap-2 relative z-10">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-sky-100 group-hover:bg-[#0B2545] flex items-center justify-center transition-colors">
                            <MapPin className="w-4 h-4 text-[#0B2545] group-hover:text-[#4FC3F7] transition-colors shrink-0" />
                          </div>
                          <h3 className="text-base font-extrabold text-[#0B2545] group-hover:text-[#4FC3F7] transition-colors">
                            {city.name}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          {city.tagline}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200/60 text-xs font-bold text-[#0B2545]">
                        <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#4FC3F7]" />
                          <span>Same-Day Visit</span>
                        </span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 group-hover:text-[#4FC3F7] transition-all">
                          <span>Explore {city.name}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quality Guarantee Banner */}
            <div className="bg-[#0B2545] text-white rounded-3xl p-6 sm:p-8 border border-[#133E6F] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex flex-col gap-2 text-left">
                <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-wider">
                  Statewide Commitment
                </span>
                <h3 className="text-lg sm:text-xl font-bold">
                  Free Doorstep Inspection Across All 7 Cities
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
                  Every city team is equipped with laser measurement tools, physical material samples, and certified high-rise safety technicians.
                </p>
              </div>
              <a
                href="tel:+919392799311"
                className="bg-[#4FC3F7] hover:bg-[#38b6ef] text-[#0B2545] font-black shrink-0 px-6 py-3.5 text-xs rounded-full flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Call +91 93927 99311</span>
              </a>
            </div>
          </div>

          {/* Map & support CTA (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <MapFrame areaName="Andhra Pradesh" />

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xs text-left flex flex-col gap-4">
              <h3 className="text-base font-extrabold text-[#0B2545] border-b border-slate-100 pb-3">
                Why Pigeon Guard in Andhra Pradesh?
              </h3>
              
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4FC3F7] shrink-0 mt-0.5" />
                  <span><strong>100% Free Site Visits:</strong> Zero obligation measurement & quote.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4FC3F7] shrink-0 mt-0.5" />
                  <span><strong>SS316 Marine Grade:</strong> Rust-free invisible grills for coastal humidity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4FC3F7] shrink-0 mt-0.5" />
                  <span><strong>UV-Treated Nylon & HDPE:</strong> 3-5 year written warranty.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4FC3F7] shrink-0 mt-0.5" />
                  <span><strong>Local Teams in 7 Cities:</strong> Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Vizag, and Rajahmundry.</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:+919392799311"
                  className="w-full flex items-center justify-center gap-2 bg-[#4FC3F7] hover:bg-[#38b6ef] text-[#0B2545] font-black py-3.5 rounded-xl transition-all text-xs shadow-md"
                >
                  Call Primary: +91 93927 99311
                </a>
                <a
                  href="tel:+918143513322"
                  className="w-full flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#133E6F] text-white font-bold py-3 rounded-xl transition-colors text-xs"
                >
                  Call Alt: +91 81435 13322
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
