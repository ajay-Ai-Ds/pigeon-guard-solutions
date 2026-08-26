"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  Zap,
  Sparkles,
  Award,
} from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  pricePerSqFt: number;
  unit: string;
  warranty: string;
}

const serviceOptions: ServiceOption[] = [
  { id: "balcony-net", name: "Balcony Safety Nets (HDPE)", pricePerSqFt: 18, unit: "sq. ft.", warranty: "5 Years" },
  { id: "pigeon-net", name: "Pigeon & Anti-Bird Nets", pricePerSqFt: 16, unit: "sq. ft.", warranty: "5 Years" },
  { id: "invisible-grill", name: "SS316 Invisible Grills", pricePerSqFt: 140, unit: "sq. ft.", warranty: "10 Years" },
  { id: "pet-net", name: "Bite-Proof Pet Safety Nets", pricePerSqFt: 22, unit: "sq. ft.", warranty: "5 Years" },
  { id: "children-net", name: "High-Rise Child Safety Nets", pricePerSqFt: 20, unit: "sq. ft.", warranty: "5 Years" },
  { id: "cloth-hanger", name: "Ceiling Cloth Hangers (6 Pipes)", pricePerSqFt: 450, unit: "set", warranty: "3 Years" },
];

export default function CostCalculator() {
  const [selectedService, setSelectedService] = useState<ServiceOption>(serviceOptions[0]);
  const [areaSqFt, setAreaSqFt] = useState<number>(120);

  const estimatedCost = Math.round(selectedService.pricePerSqFt * areaSqFt);
  const minCost = Math.round(estimatedCost * 0.95);
  const maxCost = Math.round(estimatedCost * 1.05);

  const whatsappMessage = encodeURIComponent(
    `Hi Pigeon Guard Solutions, I calculated an estimate for ${selectedService.name} (~${areaSqFt} ${selectedService.unit}) around ₹${minCost} - ₹${maxCost}. Please confirm my free site inspection time in Andhra Pradesh.`
  );

  return (
    <section className="bg-[#F8FAFC] py-20 scroll-mt-12" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-[#0B2545] border border-sky-200 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-xs">
            <Calculator className="w-4 h-4 text-[#0B2545]" /> Instant Price Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1F1F] tracking-tight leading-tight mb-4">
            Calculate Your Estimated Installation Cost
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
            Get an instant budget estimate for your balcony safety nets, invisible grills, or cloth hangers in Andhra Pradesh. <span className="font-bold text-[#0B2545]">Zero hidden charges + Free doorstep measurement.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-white rounded-[20px] p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_10px_35px_rgba(0,0,0,0.05)] space-y-6"
          >
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#4B5563] mb-3">
                1. Select Required Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((srv) => {
                  const isSelected = selectedService.id === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-[#0B2545] text-white border-[#0B2545] shadow-sm"
                          : "bg-[#F8FAFC] text-[#1F1F1F] border-[#E5E7EB] hover:border-[#0B2545]"
                      }`}
                    >
                      <span className="truncate pr-2">{srv.name}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider for Area / Quantity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#4B5563]">
                  2. Estimated Area / Size ({selectedService.unit})
                </label>
                <span className="text-sm font-extrabold text-[#0B2545] bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                  {areaSqFt} {selectedService.unit}
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={600}
                step={10}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2545]"
              />
              <div className="flex justify-between text-[11px] font-medium text-[#4B5563] mt-2">
                <span>Small Balcony (50 sq.ft)</span>
                <span>Standard (120 sq.ft)</span>
                <span>Large Villa (400+ sq.ft)</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="pt-4 border-t border-[#E5E7EB]">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-[#4B5563] mb-3">
                All Installations Include:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#1F1F1F]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Free Doorstep Inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>{selectedService.warranty} Official Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Stainless Steel Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Zero Advance - Pay After Work</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Results & CTA Card (Gradient #0B2545 to #081c35) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#0B2545] to-[#081c35] text-white rounded-[20px] p-6 sm:p-8 shadow-[0_15px_40px_rgba(214,31,38,0.30)] flex flex-col justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider mb-4 border border-white/25">
                <Sparkles className="w-3.5 h-3.5 text-white" /> Estimated Total Range
              </span>

              <div className="mb-6">
                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-1">
                  ₹{minCost.toLocaleString("en-IN")} - ₹{maxCost.toLocaleString("en-IN")}
                </div>
                <p className="text-xs text-slate-100 font-medium">
                  Estimated cost for ~{areaSqFt} {selectedService.unit} of {selectedService.name} in Andhra Pradesh.
                </p>
              </div>

              {/* Conversion Trust Points */}
              <div className="space-y-3 mb-8 bg-black/20 p-4 rounded-xl border border-white/10 text-xs">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Same-Day Inspection:</strong> Tech arrives within 2 hours across Andhra Pradesh.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Quality Material:</strong> 100% UV Stabilized Copolymer & Marine SS316.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-white shrink-0" />
                  <span><strong>Top Rated:</strong> 4.9★ rating based on 500+ Andhra Pradesh customer reviews.</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/919392799311?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 shadow-lg text-sm sm:text-base transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get Exact Quote on WhatsApp</span>
              </a>

              <a
                href="tel:+919392799311"
                className="w-full bg-white hover:bg-slate-100 text-[#0B2545] font-extrabold py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 shadow-lg text-sm sm:text-base transition-all transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5 text-[#0B2545]" />
                <span>Call Specialist Now (+91 93927 99311)</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
