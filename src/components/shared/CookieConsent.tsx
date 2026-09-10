"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already acknowledged cookie consent
    const consent = localStorage.getItem("pg_cookie_consent");
    if (!consent) {
      // Delay showing for smoother UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("pg_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("pg_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-[#07182C] text-slate-200 p-5 rounded-2xl shadow-2xl border border-[#133E6F] backdrop-blur-md"
          role="region"
          aria-label="Cookie consent banner"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#4FC3F7]/10 text-[#4FC3F7] rounded-xl shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex-1 text-xs leading-relaxed">
              <h4 className="font-bold text-white text-sm mb-1">We value your privacy</h4>
              <p className="text-slate-300">
                Pigeon Guard Solutions uses cookies to ensure you get the best browsing experience and to analyze site performance in accordance with our{" "}
                <Link href="/privacy-policy" className="text-[#4FC3F7] underline hover:text-[#73D5FF]">
                  Privacy Policy
                </Link>.
              </p>
              <div className="flex items-center gap-2.5 mt-3.5">
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-[#4FC3F7] hover:bg-[#38b6ef] text-[#0B2545] font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Decline
                </button>
              </div>
            </div>
            <button
              onClick={handleDecline}
              aria-label="Close cookie banner"
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
