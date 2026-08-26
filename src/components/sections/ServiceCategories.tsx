"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Settings, ArrowRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  count: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Safety Nets",
    count: "10 Services Available",
    image: "/images/hero/hero_safety_net.png",
    icon: <Shield className="w-6 h-6 text-white" />,
    description: "Secure your balconies, staircases, and ducts with high-density polyethylene netting designed for children and pet safety.",
    slug: "safety-nets",
  },
  {
    id: 2,
    name: "Invisible Grills",
    count: "6 Services Available",
    image: "/images/hero/balconygrill.webp",
    icon: <Eye className="w-6 h-6 text-white" />,
    description: "Preserve beautiful scenic views while ensuring absolute balcony security with modern nylon-coated stainless steel invisible grills.",
    slug: "invisible-grills",
  },
  {
    id: 3,
    name: "Cloth Hangers",
    count: "2 Services Available",
    image: "/images/materials/clothhangerwork.jpeg",
    icon: <Settings className="w-6 h-6 text-white" />,
    description: "Install dual-pipe pulley ceiling cloth drying hangers or balcony wall-mounted hangers to maximize space and drying efficiency.",
    slug: "cloth-hangers",
  },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="bg-[#FFFFFF] py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B2545] bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Engineered Safety &amp; Utility Solutions
          </h2>
          <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
            Protect your family, secure your pets, and optimize your balcony drying utility with our premium installation services in Andhra Pradesh.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.10)] border border-[#E2E8F0] hover:border-[#4FC3F7] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={`Pigeon Guard Solutions - ${category.name} Installation in Andhra Pradesh`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-[#0B2545] p-3.5 rounded-full shadow-md z-10 transition-transform duration-300 group-hover:rotate-12 border border-[#133E6F]">
                  <div className="text-[#4FC3F7]">{category.icon}</div>
                </div>

                {/* Service count label */}
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-xs text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-white/30">
                  {category.count}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0B2545] mb-3 group-hover:text-[#4FC3F7] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <Link
                  href={`/services/${category.slug}`}
                  className="inline-flex items-center gap-2 text-[#0B2545] font-bold text-sm hover:text-[#4FC3F7] transition-colors group/link mt-auto"
                >
                  <span>Explore {category.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 text-[#4FC3F7]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
