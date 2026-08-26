"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Sparkles, Award, PhoneCall, Zap, CheckCircle2 } from "lucide-react";

const marqueeItems = [
  { icon: ShieldCheck, text: "100% Pigeon & Bird Exclusion Nets", highlight: "UV-Stabilized" },
  { icon: Star, text: "4.9 ★ Rated by 500+ Andhra Pradesh Homeowners", highlight: "Verified Reviews" },
  { icon: Sparkles, text: "SS316 Marine Grade Invisible Grills", highlight: "Zero-View Blockage" },
  { icon: Award, text: "12+ Years Industry Experience", highlight: "5,000+ Projects" },
  { icon: Zap, text: "Free Doorstep Site Measurement & Estimate", highlight: "Same Day Visit" },
  { icon: CheckCircle2, text: "3 to 5 Years Warranty on All Installations", highlight: "High-Rise Certified" },
  { icon: PhoneCall, text: "Instant WhatsApp & Direct Support", highlight: "+91 93927 99311 / +91 81435 13322" },
];

export default function MarqueeTicker() {
  // Duplicate array 3 times for seamless 100% continuous infinite loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#B0171C] via-[#D61F26] to-[#B0171C] border-y-2 border-[#D61F26]/40 py-3 shadow-md select-none z-20">
      {/* Subtle LED top & bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F7E5C4] to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F7E5C4] to-transparent opacity-80" />

      {/* Side gradient fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#B0171C] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#B0171C] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Ticker Track */}
      <div className="flex w-max">
        <motion.div
          className="flex items-center gap-6 sm:gap-10 shrink-0"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 sm:gap-3 text-white font-sans text-xs sm:text-sm tracking-wide shrink-0 whitespace-nowrap bg-black/20 px-3.5 py-1.5 rounded-full border border-[#133E6F]"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0B2545]/20 border border-[#D61F26]/50 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-[#4FC3F7]" />
                </div>
                <span className="font-bold text-white uppercase">{item.text}</span>
                <span className="bg-[#0B2545] text-[#8F1016] font-extrabold text-[10px] sm:text-xs px-2 py-0.5 rounded-md uppercase tracking-wider">
                  {item.highlight}
                </span>
                <span className="text-[#D61F26]/60 text-base font-bold ml-1">◆</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
