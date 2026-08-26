"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, MessageSquare, ArrowRight, MapPin } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  badge: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/hero/balconysafetynet.jpg",
    badge: "Pigeon Exclusion",
    title: "100% Pigeon & Bird Proofing Balcony Nets",
    subtitle: "Keep pigeons and birds away from nesting on your balcony. Elegant, durable, and transparent netting solutions.",
    ctaText: "View Bird Netting",
    ctaLink: "#services",
  },
  {
    id: 2,
    image: "/images/hero/balconygrill.webp",
    badge: "Architectural Elegance",
    title: "Elegant Invisible Grills for Windows & Balconies",
    subtitle: "Get zero-blockage panoramic views and top-tier security. Made of high-grade 316 marine stainless steel wires wrapped in nylon coating.",
    ctaText: "View Invisible Grills",
    ctaLink: "#services",
  },
  {
    id: 3,
    image: "/images/services/child.webp",
    badge: "Certified Materials",
    title: "100% UV-Stabilized Copolymer Netting",
    subtitle: "Certified high-tensile HDPE safety nets engineered for max durability against extreme coastal weather and sun exposure.",
    ctaText: "View Material Specs",
    ctaLink: "#materials",
  },
  {
    id: 4,
    image: "/images/materials/clothhangerwork.jpeg",
    badge: "Space-Saving Innovation",
    title: "Premium Ceiling & Balcony Cloth Hangers",
    subtitle: "Maximize your living space with our smooth dual-pipe pulley drying system. Rust-proof stainless steel pipes engineered for absolute convenience.",
    ctaText: "Check Cloth Hangers",
    ctaLink: "#services",
  },
  {
    id: 5,
    image: "/images/services/Shayamstaircase-grills.jpg",
    badge: "Invisible Grills",
    title: "Premium Invisible Grills for Staircases & Balconies",
    subtitle: "High-tensile SS316 marine stainless steel cable grills providing unblocked views and total child safety.",
    ctaText: "View Invisible Grills",
    ctaLink: "/services/staircase-invisible-grills",
  },
  {
    id: 6,
    image: "/images/materials/BoxCricketnet.jpeg",
    badge: "Sports Nets",
    title: "Heavy-Duty Sports Nets & Box Cricket Enclosures",
    subtitle: "Durable, UV-treated sports practice netting for terrace cricket pitches, football turf enclosures, and sports academies across Andhra Pradesh.",
    ctaText: "View Sports Nets",
    ctaLink: "/services/sports-nets",
  },
];

const totalSlides = slides.length;
const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

const TRANSITION_DURATION = 700;
const AUTOPLAY_INTERVAL = 3500;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionLockRef = useRef(false);

  const minSwipeDistance = 50;
  const realIndex = ((activeIndex - 1) % totalSlides + totalSlides) % totalSlides;

  const goToNext = useCallback(() => {
    if (transitionLockRef.current) return;
    transitionLockRef.current = true;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    if (transitionLockRef.current) return;
    transitionLockRef.current = true;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (transitionLockRef.current) return;
      transitionLockRef.current = true;
      setIsTransitioning(true);
      setActiveIndex(index + 1);
    },
    []
  );

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    transitionLockRef.current = false;

    if (activeIndex === 0) {
      setActiveIndex(totalSlides);
    } else if (activeIndex === totalSlides + 1) {
      setActiveIndex(1);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();
  };

  const translateX = -activeIndex * 100;

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] min-h-[510px] sm:min-h-[580px] md:min-h-[600px] max-h-[900px] overflow-hidden bg-[#0B2545] focus:outline-hidden"
      aria-label="Pigeon Guard Solutions Hero Slider"
      tabIndex={0}
    >
      {/* Infinite slide strip */}
      <div
        className="flex h-full"
        style={{
          width: `${extendedSlides.length * 100}%`,
          transform: `translateX(${translateX / extendedSlides.length}%)`,
          transition: isTransitioning
            ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.77, 0, 0.175, 1)`
            : "none",
          willChange: "transform",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, idx) => (
          <div
            key={`${slide.id}-${idx}`}
            className="relative h-full flex-shrink-0 bg-[#0B2545]"
            style={{ width: `${100 / extendedSlides.length}%` }}
          >
            {/* Ken Burns effect */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                animation:
                  idx === activeIndex
                    ? `kenBurns ${AUTOPLAY_INTERVAL + TRANSITION_DURATION}ms ease-out forwards`
                    : "none",
              }}
            >
              <Image
                src={slide.image}
                alt={`Pigeon Guard Solutions - ${slide.title} Andhra Pradesh`}
                fill
                priority={idx === 1 || idx === 0 || idx === 2}
                loading={idx === 1 || idx === 0 || idx === 2 ? "eager" : "lazy"}
                quality={85}
                sizes="100vw"
                className="object-cover object-center transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/50 to-black/20 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Text Content Overlay */}
      <div className="absolute inset-0 flex items-center pointer-events-none pt-4 sm:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={realIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-3xl text-left flex flex-col items-start gap-2.5 sm:gap-6 pointer-events-auto"
            >
              {/* Badge */}
              <span className="bg-[#4FC3F7] text-[#0B2545] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                {slides[realIndex].badge}
              </span>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-sans tracking-tight drop-shadow-md">
                {slides[realIndex].title}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-200 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl font-medium drop-shadow-sm line-clamp-3 sm:line-clamp-none">
                {slides[realIndex].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5 sm:gap-4 mt-1 sm:mt-2">
                {/* Call Button */}
                <a
                  href="tel:+91 93927 99311"
                  className="bg-[#4FC3F7] hover:bg-[#38b6ef] text-[#0B2545] font-extrabold rounded-full flex items-center gap-2 font-extrabold px-6 py-3.5 text-xs sm:text-sm shadow-xl"
                >
                  <Phone className="w-4 h-4 fill-white/10" />
                  <span>Call +91 93927 99311</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919392799311?text=Hi%20Pigeon%20Guard%20Solutions%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white font-extrabold px-6 py-3.5 rounded-full hover:bg-[#20bd5a] transition-all shadow-xl text-xs sm:text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white/10" />
                  <span>WhatsApp Quote</span>
                </a>

                {/* Request Quote Button */}
                <Link
                  href="#contact"
                  className="border-2 border-[#4FC3F7] text-white hover:bg-[#4FC3F7] hover:text-[#0B2545] font-bold rounded-full hidden xs:flex items-center gap-2 font-bold px-6 py-3.5 text-xs sm:text-sm"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Multi-City 7 Cities Service Row */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                <span className="flex items-center gap-1 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#4FC3F7]">
                  <MapPin className="w-3.5 h-3.5 text-[#4FC3F7]" />
                  <span>Serving AP:</span>
                </span>
                {["Vijayawada", "Guntur", "Ongole", "Nellore", "Tirupathi", "Visakhapatnam", "Rajahmundry"].map((city) => (
                  <Link
                    key={city}
                    href={`/areas/${city.toLowerCase()}`}
                    className="text-[10px] sm:text-xs font-semibold bg-white/10 hover:bg-[#4FC3F7] text-white px-2.5 py-1 rounded-full border border-white/20 hover:border-[#4FC3F7] transition-all backdrop-blur-xs shadow-xs"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Control Chevrons */}
      <button
        onClick={goToPrev}
        className="hidden md:flex absolute top-1/2 left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-[#4FC3F7] text-white hover:text-[#0B2545] items-center justify-center border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="hidden md:flex absolute top-1/2 right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-[#4FC3F7] text-white hover:text-[#0B2545] items-center justify-center border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className="p-3.5 flex items-center justify-center cursor-pointer focus:outline-hidden"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === realIndex ? "true" : "false"}
          >
            <span
              className={`h-2.5 rounded-full transition-all duration-300 block ${
                index === realIndex ? "w-8 bg-[#4FC3F7]" : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Ken Burns keyframe animation */}
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
      `}</style>
    </section>
  );
}
