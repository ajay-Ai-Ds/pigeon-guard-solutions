"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Star, Users } from "lucide-react";

export default function Stats() {
  const statItems = [
    {
      id: 1,
      icon: <CheckCircle2 className="w-7 h-7 text-[#4FC3F7]" />,
      label: "Completed Projects",
      value: "5,000+",
      description: "Residential & commercial safety net and grill installations across Andhra Pradesh",
    },
    {
      id: 2,
      icon: <Users className="w-7 h-7 text-[#4FC3F7]" />,
      label: "Happy Homes Protected",
      value: "4,800+",
      description: "Families enjoying balcony safety and pet security",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-7 h-7 text-[#4FC3F7]" />,
      label: "Industry Experience",
      value: "12+ Years",
      description: "Providing trusted protective netting services in Andhra Pradesh",
    },
    {
      id: 4,
      icon: <Star className="w-7 h-7 text-[#4FC3F7]" />,
      label: "Client Rating & Feedback",
      value: "4.9 ★ (500+ Reviews)",
      description: "Based on verified local customer feedback",
    },
  ];

  return (
    <section className="bg-[#0B2545] py-16 border-y border-[#133E6F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center p-6 sm:p-7 bg-[#07182C]/70 rounded-[20px] border border-[#133E6F] hover:border-[#4FC3F7] transition-all duration-300 group shadow-lg"
            >
              {/* Icon Container with subtle sky blue background badge */}
              <div className="p-3.5 bg-[#4FC3F7]/10 group-hover:bg-[#4FC3F7] rounded-full mb-4 transition-colors duration-300">
                {stat.id === 1 && <CheckCircle2 className="w-7 h-7 text-[#4FC3F7] group-hover:text-[#0B2545] transition-colors duration-300" />}
                {stat.id === 2 && <Users className="w-7 h-7 text-[#4FC3F7] group-hover:text-[#0B2545] transition-colors duration-300" />}
                {stat.id === 3 && <ShieldCheck className="w-7 h-7 text-[#4FC3F7] group-hover:text-[#0B2545] transition-colors duration-300" />}
                {stat.id === 4 && <Star className="w-7 h-7 text-[#4FC3F7] group-hover:text-[#0B2545] transition-colors duration-300" />}
              </div>

              {/* Label */}
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-1.5">
                {stat.label}
              </h3>

              {/* Value Highlight */}
              <div className="text-2xl sm:text-3xl font-black text-[#4FC3F7] tracking-tight mb-2">
                {stat.value}
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
