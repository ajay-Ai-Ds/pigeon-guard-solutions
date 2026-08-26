"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Award,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  serviceCategory: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  quote?: string;
  clientName?: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "Protecting a Toddler on a 12th-Floor High-Rise Balcony",
    location: "Vijayawada, Andhra Pradesh",
    serviceCategory: "Balcony Safety Nets",
    image: "/images/services/service_balcony_net.png",
    challenge:
      "A young family in Vijayawada moved into a 12th-floor apartment with wide open balcony railings, creating an immediate fall hazard for their 2-year-old daughter.",
    solution:
      "Our certified technicians conducted a free site visit within 24 hours and custom-fitted heavy-duty 100% UV-stabilized HDPE copolymer safety netting designed to withstand high-rise wind pressure without sagging.",
    result:
      "Installation was completed cleanly in under 3 hours. The family enjoys worry-free open balcony access, and the net has successfully endured two full Andhra Pradesh monsoon seasons without tension loss.",
    quote:
      "Pigeon Guard Solutions gave us complete peace of mind. Our daughter can play safely while we enjoy our morning coffee.",
    clientName: "Priya & Vivek S., Vijayawada",
  },
  {
    id: 2,
    title: "Preserving Coastal Views while Securing a Modern Penthouse",
    location: "Visakhapatnam, Andhra Pradesh",
    serviceCategory: "Balcony Invisible Grills",
    image: "/images/services/service_invisible_grill.png",
    challenge:
      "A penthouse homeowner in Visakhapatnam wanted high-level balcony safety for visiting grandchildren without installing traditional heavy iron bars that block sea views and breeze.",
    solution:
      "We installed marine-grade SS316 stainless steel cable invisible grills spaced at 2 inches with customized aluminum track channels powder-coated to match the balcony frame.",
    result:
      "High tensile steel cables support over 140kg break-load while remaining virtually invisible from 5 meters away, maintaining unobstructed Bay of Bengal views.",
    quote:
      "The invisible grills look incredibly modern. Our sea view is totally intact and the kids are 100% safe.",
    clientName: "Ramesh K., Visakhapatnam",
  },
  {
    id: 3,
    title: "Comprehensive Bird Proofing for Gated Township Duct Shafts",
    location: "Guntur, Andhra Pradesh",
    serviceCategory: "Duct Area Safety Nets",
    image: "/images/hero/duct-area-net.jpg",
    challenge:
      "A 200-flat residential gated community in Guntur suffered severe pigeon infestation across 8 vertical plumbing duct shafts, causing foul odors and AC unit damage.",
    solution:
      "Pigeon Guard deployed high-rise abseiling certified rope access crews to install heavy-gauge, translucent bird exclusion netting from the terrace to the ground floor.",
    result:
      "Completely blocked bird entry into all 8 shafts without impeding ventilation or maintenance access for plumbing lines.",
    quote:
      "Pigeon Guard managed a massive 8-shaft project with zero disruption to residents. Clean and highly professional execution.",
    clientName: "Township RWA Committee, Guntur",
  },
  {
    id: 4,
    title: "Space-Saving Balcony Cloth Drying Solution for Compact Flat",
    location: "Tirupathi, Andhra Pradesh",
    serviceCategory: "Ceiling Cloth Hangers",
    image: "/images/hero/cloth-drying-hanger.jpg",
    challenge:
      "A compact 2BHK apartment balcony in Tirupathi lacked floor space for bulky folding clothes racks while maintaining walking space.",
    solution:
      "Fitted a 6-pipe individual pulley ceiling cloth drying hanger made of rustproof SS202 stainless steel rods rated for 30kg load capacity.",
    result:
      "Freed up 100% of balcony floor space. Easy individual pull-down operation allows effortless daily laundry drying.",
    quote:
      "It completely transformed our small utility balcony. Smooth mechanism and very solid build quality.",
    clientName: "Venkatesh R., Tirupathi",
  },
  {
    id: 5,
    title: "Eliminating Chronic Pigeon Nesting at Commercial Complex",
    location: "Nellore, Andhra Pradesh",
    serviceCategory: "Anti-Bird Spikes",
    image: "/images/hero/service-spikes.jpg",
    challenge:
      "Severe pigeon infestation along exterior ledges and AC duct shafts at a 5-story commercial building in Nellore caused persistent mess, odor, and HVAC air quality concerns.",
    solution:
      "Mounted heavy-duty weather-resistant polycarbonate base strips with stainless steel 304 anti-bird spikes along 650 linear feet of ledges and window sills.",
    result:
      "Pigeon roosting was eliminated 100% within 24 hours of installation without harming birds. Building maintenance costs dropped significantly.",
    quote:
      "The bird spikes solved a 3-year recurring maintenance nightmare in less than a day.",
    clientName: "Suresh P., Estate Lead, Nellore",
  },
];

export default function CaseStudiesClient() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm font-medium text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0B2545] transition-colors flex items-center gap-1.5">
            <Home className="w-4 h-4 text-[#4FC3F7]" />
            <span>Home</span>
          </Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-[#0B2545] font-semibold">Case Studies</span>
        </nav>

        {/* Hero Banner Header */}
        <div className="bg-gradient-to-r from-[#0B2545] via-[#07182C] to-[#0B2545] text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden border border-[#133E6F]">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-[#4FC3F7]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#4FC3F7] text-xs font-bold uppercase tracking-wider mb-4 border border-[#4FC3F7]/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" /> Proven Installation Results
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
              Real Safety Solutions for Real Andhra Pradesh Homes
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6">
              Explore how Pigeon Guard Solutions solves complex balcony fall hazards, pigeon roosting problems, and high-rise safety challenges across residential and commercial properties in Andhra Pradesh.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/15 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4FC3F7]" />
                <span>5,000+ Completed Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#4FC3F7]" />
                <span>100% Certified Safety Materials</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12 mb-16">
          {caseStudiesData.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Case Study Image */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[420px] bg-slate-100 overflow-hidden">
                <Image
                  src={study.image}
                  alt={`Pigeon Guard Solutions - ${study.title} in ${study.location}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#0B2545]/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-sm self-start">
                    {study.serviceCategory}
                  </span>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#4FC3F7] shrink-0" />
                    <span>{study.location}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-6">
                    {study.title}
                  </h2>

                  <div className="space-y-4 mb-6">
                    {/* Challenge */}
                    <div className="bg-sky-50/60 rounded-2xl p-4 border border-amber-100/80">
                      <div className="flex items-center gap-2 text-amber-900 text-xs font-bold uppercase tracking-wider mb-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                      <div className="flex items-center gap-2 text-[#0B2545] text-xs font-bold uppercase tracking-wider mb-1.5">
                        <Lightbulb className="w-4 h-4 text-[#4FC3F7] shrink-0" />
                        <span>Our Solution</span>
                      </div>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100/80">
                      <div className="flex items-center gap-2 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Verified Result</span>
                      </div>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Client Quote & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {study.quote && (
                    <div className="italic text-xs sm:text-sm text-slate-600">
                      &ldquo;{study.quote}&rdquo; — <span className="font-bold text-slate-800 not-italic">{study.clientName}</span>
                    </div>
                  )}

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#4FC3F7] text-white hover:text-slate-900 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors shrink-0 self-end sm:self-auto shadow-xs"
                  >
                    <span>Request Similar Setup</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Contact Form Component */}
        <ContactForm />
      </div>
    </div>
  );
}
