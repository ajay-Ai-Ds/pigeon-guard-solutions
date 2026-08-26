"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { andhraPradeshAreasList, areasData } from "@/utils/areasData";

export default function ServiceAreas() {
  return (
    <section className="bg-[#F8FAFC] py-24 scroll-mt-12" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Info Text (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545] bg-white border border-[#E5E7EB] px-3.5 py-1.5 rounded-full inline-block self-start shadow-xs">
              Statewide Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Serving 7 Major Cities Across Andhra Pradesh
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide prompt, on-site measurements and certified safety net and invisible grill installations with localized teams across all 7 premier cities in Andhra Pradesh.
            </p>
            <div className="flex items-center gap-3 text-[#0B2545] text-sm font-bold mt-1">
              <Globe className="w-5 h-5 text-[#0B2545]" />
              <span>Free Doorstep Measurement &amp; Quotes</span>
            </div>
            <div className="pt-2">
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#1F1F1F] hover:text-[#0B2545] transition-colors"
              >
                <span>View All Andhra Pradesh Service Zones</span>
                <ArrowRight className="w-4 h-4 text-[#0B2545]" />
              </Link>
            </div>
          </div>

          {/* 7 Cities Cards Grid (Right) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E5E7EB]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {andhraPradeshAreasList.map((slug, index) => {
                const area = areasData[slug];
                if (!area) return null;
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                  >
                    <Link
                      href={`/areas/${slug}`}
                      className="flex flex-col justify-between p-4 bg-[#F8FAFC]/70 hover:bg-[#0B2545] border border-[#E5E7EB] hover:border-[#0B2545] rounded-2xl transition-all duration-300 group shadow-2xs h-full"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <MapPin className="w-4 h-4 text-[#0B2545] group-hover:text-white shrink-0 transition-colors" />
                          <span className="text-sm font-extrabold text-slate-800 group-hover:text-white transition-colors">
                            {area.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 group-hover:text-white/90 leading-snug transition-colors line-clamp-2">
                          {area.tagline}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#E5E7EB] group-hover:border-white/20 text-[11px] font-bold">
                        <span className="flex items-center gap-1 text-slate-500 group-hover:text-white/80 transition-colors font-medium">
                          <Clock className="w-3 h-3 text-[#0B2545] group-hover:text-white" />
                          <span>Same-Day Service</span>
                        </span>
                        <span className="text-[#0B2545] group-hover:text-white flex items-center gap-1 transition-colors">
                          <span>View City</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-[11px] text-slate-500 text-center mt-6 font-medium">
              Looking for service in neighboring towns or outskirts? We cover surrounding areas for all 7 cities. Call us to confirm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
