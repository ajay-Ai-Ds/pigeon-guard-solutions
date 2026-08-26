"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Settings, ArrowRight, X } from "lucide-react";
import { servicesData } from "@/utils/servicesData";

type CategoryFilter = "all" | "safety-nets" | "invisible-grills" | "cloth-hangers";

export default function FeaturedServices() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  const services = Object.values(servicesData);

  const filteredServices = services.filter(
    (service) => filter === "all" || service.category === filter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "safety-nets":
        return <Shield className="w-4 h-4" />;
      case "invisible-grills":
        return <Eye className="w-4 h-4" />;
      case "cloth-hangers":
        return <Settings className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-24 scroll-mt-12" id="featured-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl flex flex-col gap-3 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B2545] bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-block self-start">
              Our Installations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Featured Safety &amp; Hanger Services
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Explore our full suite of professional services. Handcrafted using premium materials and installed by our certified technicians.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 md:self-end">
            {(["all", "safety-nets", "invisible-grills", "cloth-hangers"] as CategoryFilter[]).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full capitalize cursor-pointer transition-all duration-300 ${
                    filter === cat
                      ? "bg-[#0B2545] text-[#4FC3F7] shadow-md border border-[#133E6F]"
                      : "bg-white hover:bg-slate-50 text-[#0B2545] border border-[#E2E8F0]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {cat === "all" ? null : getCategoryIcon(cat)}
                    <span>{cat.replace("-", " ")}</span>
                  </span>
                </button>
              )
            )}
          </div>
        </div>

        {/* Services Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.10)] border border-[#E2E8F0] hover:border-[#4FC3F7] transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image */}
                <div 
                  className="relative h-64 w-full overflow-hidden bg-slate-200 cursor-zoom-in"
                  onClick={() => setLightboxImage(service.image)}
                >
                  <Image
                    src={service.image}
                    alt={`Pigeon Guard Solutions - ${service.name} Installation Andhra Pradesh`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-xs font-bold text-[#0B2545] px-3 py-1 rounded-md shadow-xs border border-[#E2E8F0] flex items-center gap-1.5">
                    {getCategoryIcon(service.category)}
                    <span className="capitalize">{service.categoryName}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow text-left justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B2545] mb-2 group-hover:text-[#4FC3F7] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-[#6B7280] text-xs leading-relaxed mb-5">
                      {service.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-[#0B2545] group-hover:text-[#4FC3F7] transition-colors group/btn pt-4 border-t border-[#E2E8F0] mt-auto"
                  >
                    <span>Learn Installation Info</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal for Full View */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#0B2545] p-2 cursor-pointer focus:outline-hidden"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image view"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={lightboxImage}
              alt="Pigeon Guard Solutions - Full size installation view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
