"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Star,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Phone,
  Sparkles,
  Filter,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  serviceName: string;
  comment: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Priya S.",
    location: "Vijayawada",
    rating: 5,
    date: "July 2026",
    category: "safety-nets",
    serviceName: "Balcony Safety Nets",
    comment:
      "Pigeon Guard Solutions installed high-density safety nets on our 14th-floor balcony in Vijayawada. The technician arrived on time with physical samples and finished the entire setup cleanly within 3 hours. Absolute peace of mind for our toddlers!",
  },
  {
    id: 2,
    name: "Ramesh K.",
    location: "Visakhapatnam",
    rating: 5,
    date: "July 2026",
    category: "invisible-grills",
    serviceName: "Balcony Invisible Grills",
    comment:
      "We opted for SS316 marine-grade invisible grills for our sea-facing high-rise balcony in Visakhapatnam. The 2mm steel wires look virtually invisible while keeping the balcony 100% secure. Excellent tensioning work and rustproof finishing.",
  },
  {
    id: 3,
    name: "Ananya M.",
    location: "Guntur",
    rating: 5,
    date: "June 2026",
    category: "safety-nets",
    serviceName: "Pigeon Safety Nets",
    comment:
      "Pigeons were destroying our utility area and window ledges in Guntur. Pigeon Guard Solutions installed translucent monofilament bird nets. It completely blocked the pigeons without darkening our rooms. Highly recommended!",
  },
  {
    id: 4,
    name: "Venkatesh R.",
    location: "Tirupathi",
    rating: 5,
    date: "June 2026",
    category: "cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    comment:
      "The ceiling cloth drying hanger installation in our Tirupathi flat balcony is a total space saver. Stainless steel rods with smooth pulley control make hanging laundry completely effortless.",
  },
  {
    id: 5,
    name: "Suresh P.",
    location: "Nellore",
    rating: 5,
    date: "May 2026",
    category: "invisible-grills",
    serviceName: "Window Invisible Grills",
    comment:
      "Installed invisible grills across 6 large sliding windows in our Nellore duplex. No obstruction of light or breeze, and much safer than bulky iron grills. Superb customer service and prompt delivery.",
  },
  {
    id: 6,
    name: "Kavitha D.",
    location: "Rajahmundry",
    rating: 5,
    date: "May 2026",
    category: "safety-nets",
    serviceName: "Children Safety Nets",
    comment:
      "We live near the Godavari riverfront in Rajahmundry. Securing our open balcony banisters with Pigeon Guard's children safety nets was the best decision for our kids. Strong netting and neat anchoring.",
  },
  {
    id: 7,
    name: "Mohan Krishna",
    location: "Ongole",
    rating: 5,
    date: "April 2026",
    category: "safety-nets",
    serviceName: "Anti-Bird Spikes",
    comment:
      "Pigeons roosting on top of our AC outdoor units in Ongole caused terrible mess. Pigeon Guard installed polycarbonate base stainless steel spikes in under an hour. Problem permanently solved!",
  },
  {
    id: 8,
    name: "Divya B.",
    location: "Guntur",
    rating: 5,
    date: "April 2026",
    category: "invisible-grills",
    serviceName: "Staircase Invisible Grills",
    comment:
      "Modern interior look for our internal open staircase in Guntur. Vertical SS316 wire grills gave it a high-end designer finish while preventing accidental falls.",
  },
  {
    id: 9,
    name: "Satyanarayana G.",
    location: "Vijayawada",
    rating: 5,
    date: "March 2026",
    category: "safety-nets",
    serviceName: "Pet Safety Nets",
    comment:
      "Our active cat used to jump near balcony railings in Vijayawada. The scratch-resistant pet safety netting installed by Pigeon Guard keeps our pet 100% safe. Great tension and tight borders.",
  },
];

export default function TestimonialsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTestimonials =
    selectedCategory === "all"
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0B2545] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#0B2545] font-bold">Testimonials</span>
        </nav>

        {/* 1. HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] bg-white border border-slate-200 px-4 py-1.5 rounded-full inline-block self-center shadow-xs">
            Client Feedback &amp; Reviews
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            What Andhra Pradesh Says About Us
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real verified feedback from homeowners, landlords, and commercial facility managers across Andhra Pradesh neighborhoods.
          </p>
        </div>

        {/* 2. OVERALL RATING SUMMARY CARD */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md max-w-3xl mx-auto mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-[#0B2545]">4.9</span>
              <span className="text-lg font-bold text-slate-400">/ 5.0</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-[#4FC3F7] fill-[#4FC3F7]" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-500 mt-1">
              Based on 150+ Verified Local Customer Reviews
            </span>
          </div>

          <div className="flex flex-col gap-2.5 sm:border-l sm:border-slate-100 sm:pl-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>100% Free Doorstep Measurement Visit</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>Certified High-Rise Installation Crew</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>Transparent Written Quotes</span>
            </div>
          </div>
        </div>

        {/* 3. FILTER BY SERVICE TYPE */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B2545] mr-2">
            <Filter className="w-4 h-4 text-[#4FC3F7]" />
            <span>Filter Category:</span>
          </div>
          {[
            { id: "all", label: "All Reviews (9)" },
            { id: "safety-nets", label: "Safety Nets" },
            { id: "invisible-grills", label: "Invisible Grills" },
            { id: "cloth-hangers", label: "Cloth Hangers" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? "bg-[#0B2545] text-[#4FC3F7] shadow-md border border-[#133E6F]"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#4FC3F7] hover:text-[#0B2545]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4. GRID OF TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#4FC3F7] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-4">
                {/* Header info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-base font-extrabold text-[#0B2545] group-hover:text-[#4FC3F7] transition-colors">
                      {item.name}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#4FC3F7]" />
                      <span>{item.location}, Andhra Pradesh</span>
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">{item.date}</span>
                </div>

                {/* Rating & Service Badge */}
                <div className="flex items-center justify-between gap-2 border-y border-slate-100 py-2.5">
                  <div className="flex gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#4FC3F7] fill-[#4FC3F7]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold text-[#0B2545] bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.serviceName}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Verified Badge footer */}
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 mt-6 pt-3 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Pigeon Guard Customer</span>
              </div>
            </div>
          ))}
        </div>

        {/* 5. PROMINENT CTA BANNER */}
        <div className="bg-[#0B2545] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center flex flex-col items-center gap-6 border border-[#133E6F] mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-[#4FC3F7]/40 text-[#4FC3F7] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Join 150+ Happy Customers</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Ready to Protect Your Balcony &amp; Windows in Andhra Pradesh?
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl leading-relaxed">
            Schedule a free on-site measurement visit. Our team carries physical material samples, provides an accurate quote, and ensures fast, clean installation.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-2 w-full max-w-md">
            <a
              href="tel:+919392799311"
              className="flex-1 min-w-[180px] flex items-center justify-center gap-2.5 bg-[#4FC3F7] hover:bg-[#38b6ef] text-[#0B2545] font-black py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 93927 99311</span>
            </a>

            <Link
              href="/contact"
              className="flex-1 min-w-[180px] flex items-center justify-center gap-2.5 bg-white text-[#0B2545] hover:bg-slate-100 font-black py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Free Quote</span>
            </Link>
          </div>
        </div>

        {/* Contact Form Integration */}
        <ContactForm />
      </div>
    </div>
  );
}
