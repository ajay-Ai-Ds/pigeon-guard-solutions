"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Wrench, Clock, BadgeCheck, PhoneCall } from "lucide-react";
import Image from "next/image";

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: <ShieldCheck className="w-6 h-6 text-[#4FC3F7]" />,
    title: "100% Certified Safety Materials",
    description: "We use ISO-certified high-tensile HDPE safety nets and rust-proof SS316 marine-grade cables for all installations.",
  },
  {
    id: 2,
    icon: <Wrench className="w-6 h-6 text-[#4FC3F7]" />,
    title: "Expert Certified Installers",
    description: "Our in-house technician team is extensively trained to work at height, ensuring error-free, secure anchoring.",
  },
  {
    id: 3,
    icon: <Award className="w-6 h-6 text-[#4FC3F7]" />,
    title: "Tailor-Made Custom Fits",
    description: "Every balcony, window, duct space, and staircase is measured and custom-netted for clean tension and aesthetics.",
  },
  {
    id: 4,
    icon: <Clock className="w-6 h-6 text-[#4FC3F7]" />,
    title: "Fast Response & Free Visit",
    description: "We offer quick inspections and free site measurements across Andhra Pradesh within 24 hours of booking.",
  },
  {
    id: 5,
    icon: <BadgeCheck className="w-6 h-6 text-[#4FC3F7]" />,
    title: "Aesthetic Safety Integration",
    description: "Our safety solutions protect your loved ones while preserving views, natural breeze, and structural aesthetics.",
  },
  {
    id: 6,
    icon: <PhoneCall className="w-6 h-6 text-[#4FC3F7]" />,
    title: "Client-Centric Care",
    description: "Dedicated local support available pre- and post-installation to handle all questions and maintenance checks.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#F8FAFC] py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Overlay composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[550px] w-full"
          >
            {/* Main Image */}
            <div className="absolute inset-0 w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/images/services/shyambalconygrills.jpg"
                alt="Pigeon Guard Solutions Invisible Grill Installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            {/* Secondary overlapping card image */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
              <Image
                src="/images/services/Shayamstaircase-grills.jpg"
                alt="Pigeon Guard Staircase & Balcony Invisible Steel Grill"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>

            {/* Experience overlay badge */}
            <div className="absolute top-8 right-4 bg-[#0B2545] text-white p-6 rounded-2xl shadow-xl max-w-[180px] text-center border border-primary-600">
              <span className="block text-2xl font-extrabold text-[#4FC3F7] mb-1">Andhra Pradesh</span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-200">
                Local Trusted Net Experts
              </span>
            </div>
          </motion.div>

          {/* Right Column: Values */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] bg-primary-100/60 border border-primary-200/50 px-3.5 py-1.5 rounded-full inline-block self-start">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
                Andhra Pradesh&apos;s Most Trusted Safety &amp; Invisible Grill Installers
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With engineered materials, experienced technicians, and prompt local support, we deliver long-lasting protection for homes across Andhra Pradesh.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
                  <div className="p-3 bg-[#F8FAFC] rounded-xl shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2545] mb-1">{benefit.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
