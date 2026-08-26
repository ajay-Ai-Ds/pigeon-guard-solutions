"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hammer, CheckCircle } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  caption: string;
}

const teamWorkGallery: GalleryItem[] = [
  {
    id: 1,
    image: "/images/materials/Balconynetwork.jpeg",
    caption: "High-Rise Balcony Safety Net Anchoring",
  },
  {
    id: 2,
    image: "/images/services/shyambalconygrills.jpg",
    caption: "SS316 Invisible Grill Cable Tensioning",
  },
  {
    id: 3,
    image: "/images/materials/clothhangerwork.jpeg",
    caption: "Ceiling Cloth Hanger Pulley Mounting",
  },
  {
    id: 4,
    image: "/images/materials/FactoryNets.jpeg",
    caption: "Commercial Industrial Safety Netting",
  },
  {
    id: 5,
    image: "/images/services/Shayamstaircase-grills.jpg",
    caption: "Staircase Invisible Grill Final Check",
  },
  {
    id: 6,
    image: "/images/materials/BoxCricketnet.jpeg",
    caption: "Sports Turf & Box Cricket Enclosure Setup",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="team-at-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B2545] bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Team at Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight">
            Professional &amp; Insured Installation Team
          </h2>
          <p className="text-[#4B5563] text-sm leading-relaxed">
            Our field technicians are trained in high-rise anchoring safety guidelines and use certified heavy-duty safety gears.
          </p>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamWorkGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)] border border-[#E5E7EB] hover:border-[#0B2545] transition-all duration-300 h-80"
            >
              {/* Technician Image */}
              <Image
                src={item.image}
                alt={`Pigeon Guard Solutions - ${item.caption} in Andhra Pradesh`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Red Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c35]/90 via-[#0B2545]/30 to-transparent"></div>

              {/* Floating Content Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
                <div className="flex flex-col gap-1 text-white">
                  <span className="text-sm font-bold tracking-wide">{item.caption}</span>
                  <span className="text-[10px] text-slate-200 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Verified Real Installation</span>
                  </span>
                </div>
                <div className="bg-[#0B2545] p-2.5 rounded-full text-white shadow-md">
                  <Hammer className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
