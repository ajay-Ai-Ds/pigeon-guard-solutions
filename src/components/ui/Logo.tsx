import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  stacked?: boolean;
}

export default function Logo({ className = "", iconOnly = false, light = false, stacked = false }: LogoProps) {
  let logoSrc = "/images/logo/pigeon-guard-logo.svg";

  if (iconOnly) {
    logoSrc = "/images/logo/pigeon-guard-icon.svg";
  } else if (stacked) {
    logoSrc = light
      ? "/images/logo/pigeon-guard-logo-stacked-light.svg"
      : "/images/logo/pigeon-guard-logo-stacked-dark.svg";
  } else if (light) {
    logoSrc = "/images/logo/pigeon-guard-logo-light.svg";
  }

  return (
    <Link
      href="/"
      className={`flex items-center select-none group ${className}`}
      aria-label="Pigeon Guard Solutions Home"
    >
      {iconOnly ? (
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={logoSrc}
            alt="Pigeon Guard Solutions Icon"
            fill
            sizes="48px"
            className="object-contain"
            priority
          />
        </div>
      ) : stacked ? (
        <div className="relative h-24 w-44 sm:w-48 transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src={logoSrc}
            alt="Pigeon Guard Solutions - Safety Nets & Invisible Grills"
            fill
            sizes="200px"
            className="object-contain object-left sm:object-center"
            priority
          />
        </div>
      ) : (
        <div className="relative h-12 sm:h-14 md:h-15 w-52 sm:w-64 md:w-72 transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src={logoSrc}
            alt="Pigeon Guard Solutions - Safety Nets & Invisible Grills"
            fill
            sizes="(max-width: 640px) 210px, 290px"
            className="object-contain object-left"
            priority
          />
        </div>
      )}
    </Link>
  );
}
