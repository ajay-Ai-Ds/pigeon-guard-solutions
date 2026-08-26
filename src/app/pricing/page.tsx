import { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Ruler,
  Layers,
  FileCheck,
  Maximize,
  Award,
  Building,
  ShieldCheck,
  Phone,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Pricing Approach | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
  description:
    "Explore transparent pricing for safety nets, invisible grills & cloth hangers by Pigeon Guard Solutions in Andhra Pradesh across Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing Approach | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Explore transparent pricing for safety nets, invisible grills & cloth hangers by Pigeon Guard Solutions in Andhra Pradesh across Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
    url: "https://pigeonguardsolutions.com/pricing",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Pigeon Guard Solutions Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Approach | Pigeon Guard Solutions - Safety Nets & Invisible Grills Andhra Pradesh",
    description:
      "Explore transparent pricing for safety nets, invisible grills & cloth hangers by Pigeon Guard Solutions in Andhra Pradesh serving Vijayawada, Guntur, Vizag, Nellore, Ongole, Tirupathi, and Rajahmundry.",
    images: ["/images/og-image.webp"],
  },
};

export default function PricingPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Pricing", item: "/pricing" },
  ];
  const howWePriceSteps = [
    {
      step: "01",
      icon: <Ruler className="w-7 h-7 text-[#4FC3F7]" />,
      title: "Free Site Visit & Measurement",
      description:
        "We send a certified technician to measure your exact balcony, window, or duct space in Andhra Pradesh — no estimates or guesswork.",
    },
    {
      step: "02",
      icon: <Layers className="w-7 h-7 text-[#4FC3F7]" />,
      title: "Material Selection",
      description:
        "Inspect physical samples of Standard, Premium, or Elite grade netting and SS316 cable grills directly at your doorstep.",
    },
    {
      step: "03",
      icon: <FileCheck className="w-7 h-7 text-[#4FC3F7]" />,
      title: "Instant Written Quote",
      description:
        "Receive an accurate, transparent written quotation on the spot. No waiting for days and no hidden charges after installation.",
    },
  ];

  const priceFactors = [
    {
      icon: <Maximize className="w-6 h-6 text-[#4FC3F7]" />,
      title: "Total Area & Dimensions",
      description:
        "The overall square footage of your balconies, open window frames, stairwells, or vertical duct shafts.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#4FC3F7]" />,
      title: "Material Grade Selection",
      description:
        "Choice of netting thickness (HDPE/copolymer grade) or cable specifications (SS316 marine steel wire invisible grills).",
    },
    {
      icon: <Building className="w-6 h-6 text-[#4FC3F7]" />,
      title: "Installation Complexity",
      description:
        "Height of the floor, high-rise building accessibility, scaffolding needs, and specific wall anchoring conditions.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#4FC3F7]" />,
      title: "Hardware & Accessories",
      description:
        "Custom heavy-duty aluminum track channels, stainless steel eyelets, burglar alarm integrations, or specialized fittings.",
    },
  ];

  const trustBadges = [
    {
      title: "No Advance Payment for Site Visit",
      desc: "Our inspection, measurements, and sample showcases are 100% free with zero obligation.",
    },
    {
      title: "Written Quote, No Verbal Surprises",
      desc: "Every cost breakdown is documented in writing upfront before installation starts.",
    },
    {
      title: "Free Re-Inspection if Needed",
      desc: "If you have any questions or alignment checks after inspection, we revisit free of charge.",
    },
    {
      title: "Best Value in Andhra Pradesh",
      desc: "ISO-certified netting and marine-grade SS316 cable grills at fair, competitive rates.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#4FC3F7] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#0B2545] font-bold">Pricing Approach</span>
        </nav>

        {/* 1. HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full inline-block self-center shadow-xs">
            Honest &amp; Transparent
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Fair, Transparent Pricing
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            No hidden costs, no surprises — just honest, accurate quotes tailored to your exact space and chosen material specification in Andhra Pradesh.
          </p>
        </div>

        {/* 2. HOW WE PRICE (3-Step Explainer) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              How We Calculate Your Quote
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Our 3-step transparent pricing workflow ensures absolute clarity before any work begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWePriceSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col items-center text-center group"
              >
                <div className="absolute top-4 right-6 text-3xl font-black text-slate-200 group-hover:text-[#4FC3F7]/30 transition-colors">
                  {stepItem.step}
                </div>
                <div className="p-4 bg-[#F8FAFC] rounded-2xl mb-6 shadow-xs group-hover:bg-[#0B2545] transition-colors duration-300">
                  {stepItem.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B2545] mb-3 group-hover:text-[#4FC3F7] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. WHAT AFFECTS YOUR PRICE */}
        <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">Cost Factors</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              What Affects Your Installation Price?
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Pricing varies depending on key technical specifications of your installation space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceFactors.map((factor) => (
              <div
                key={factor.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <div className="p-3 bg-[#F8FAFC] rounded-xl self-start">
                  {factor.icon}
                </div>
                <h3 className="text-sm font-bold text-[#0B2545] mt-1">{factor.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TRUST BADGES */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              Our Honest Pricing Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4"
              >
                <div className="p-2.5 bg-sky-50 text-[#0B2545] rounded-xl shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#4FC3F7]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1">{badge.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. LARGE PROMINENT CTA BANNER */}
        <div className="bg-[#0B2545] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden text-center flex flex-col items-center gap-6 border border-[#133E6F]">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-[#4FC3F7]/40 text-[#4FC3F7] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Ready for an Exact On-Site Quote?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Get Your Free On-Site Measurement Today
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl leading-relaxed">
            Our technician will visit your location in Andhra Pradesh with physical material samples, measure your space accurately, and share a written quote on the spot.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-2 w-full max-w-md">
            <a
              href="tel:+919392799311"
              className="flex-1 min-w-[180px] flex items-center justify-center gap-2.5 bg-[#4FC3F7] hover:bg-[#38b6ef] text-[#0B2545] font-black py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 93927 99311</span>
            </a>

            <a
              href="https://wa.me/919392799311?text=Hi%20Pigeon%20Guard%20Solutions%2C%20I%20would%20like%20to%20request%20a%20free%20on-site%20measurement%20and%20pricing%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[180px] flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>

        {/* Contact Form Inclusion */}
        <ContactForm />
      </div>
    </div>
  );
}
