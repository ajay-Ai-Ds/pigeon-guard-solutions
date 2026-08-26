import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07182C] text-slate-300 pt-16 pb-8 border-t border-[#133E6F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <Logo light={true} />
            <p className="text-[#D1D5DB] text-sm leading-relaxed mt-2">
              Pigeon Guard Solutions is a premier provider of high-grade safety netting solutions and elegant invisible grills in Andhra Pradesh. Committed to absolute safety, premium durability, and aesthetic design.
            </p>
            <div className="flex flex-col gap-3 mt-1 text-sm text-[#D1D5DB]">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#4FC3F7] shrink-0" />
                <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#4FC3F7]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing Approach", href: "/pricing" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Completed Projects", href: "/projects" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Coverage Areas", href: "/areas" },
                { label: "Latest Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#4FC3F7] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#4FC3F7] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick View */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#4FC3F7]">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
                { label: "Children Safety Nets", href: "/services/children-safety-nets" },
                { label: "Pet Safety Nets", href: "/services/pet-safety-nets" },
                { label: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
                { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
                { label: "Window Invisible Grills", href: "/services/window-invisible-grills" },
                { label: "Staircase Invisible Grills", href: "/services/staircase-invisible-grills" },
                { label: "Ceiling Cloth Hangers", href: "/services/ceiling-cloth-hangers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#4FC3F7] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#4FC3F7] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#4FC3F7]">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-[#D1D5DB]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#4FC3F7] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Office Location</span>
                  <span className="block text-sm text-[#D1D5DB] mt-1">
                    Andhra Pradesh
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#4FC3F7] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white block">Phone Numbers</span>
                  <a href="tel:+919392799311" className="hover:text-[#4FC3F7] transition-colors text-white font-semibold flex items-center gap-1.5">
                    <span>+91 93927 99311</span>
                    <span className="text-[10px] bg-[#4FC3F7]/20 text-[#4FC3F7] px-1.5 py-0.2 rounded font-bold">Primary</span>
                  </a>
                  <a href="tel:+918143513322" className="hover:text-[#4FC3F7] transition-colors text-[#D1D5DB] font-semibold flex items-center gap-1.5">
                    <span>+91 81435 13322</span>
                    <span className="text-[10px] bg-white/10 text-slate-300 px-1.5 py-0.2 rounded font-bold">Alt</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#4FC3F7] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Email</span>
                  <a href="mailto:pigeonguardsolutions@gmail.com" className="hover:text-[#4FC3F7] transition-colors">
                    pigeonguardsolutions@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 7 Cities Local SEO Footer Links */}
        <div className="py-6 border-t border-[#133E6F] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-white font-bold shrink-0">
            <MapPin className="w-4 h-4 text-[#4FC3F7]" />
            <span>Service Cities in Andhra Pradesh:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-[#D1D5DB]">
            {[
              { name: "Vijayawada", slug: "vijayawada" },
              { name: "Guntur", slug: "guntur" },
              { name: "Ongole", slug: "ongole" },
              { name: "Nellore", slug: "nellore" },
              { name: "Tirupathi", slug: "tirupathi" },
              { name: "Visakhapatnam", slug: "visakhapatnam" },
              { name: "Rajahmundry", slug: "rajahmundry" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="hover:text-[#4FC3F7] transition-colors"
              >
                {city.name} Safety Nets
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#133E6F] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D1D5DB] gap-4">
          <p>© {currentYear} Pigeon Guard Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#4FC3F7] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#4FC3F7] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
