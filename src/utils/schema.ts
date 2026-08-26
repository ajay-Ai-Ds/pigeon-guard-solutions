export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export const CITIES_ANDHRA_PRADESH = [
  "Vijayawada",
  "Guntur",
  "Ongole",
  "Nellore",
  "Tirupathi",
  "Visakhapatnam",
  "Rajahmundry",
];

export const ALL_18_SERVICES = [
  "Balcony Safety Nets",
  "Children Safety Nets",
  "Pet Safety Nets",
  "Pigeon Safety Nets",
  "Monkey Safety Nets",
  "Cricket Nets",
  "Sports Nets",
  "Construction Safety Nets",
  "Duct Area Safety Nets",
  "Anti-Bird Spikes",
  "Balcony Invisible Grills",
  "Window Invisible Grills",
  "Staircase Invisible Grills",
  "Custom Invisible Grills",
  "Ceiling Cloth Hangers",
  "Balcony Cloth Hangers",
  "Wall Mounted Cloth Hangers",
  "Pull Down Cloth Hangers",
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pigeon Guard Solutions",
    "url": "https://pigeonguardsolutions.com",
    "logo": "https://pigeonguardsolutions.com/images/logo/pigeon-guard-icon.svg",
    "image": "https://pigeonguardsolutions.com/images/og-image.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": ["+91 93927 99311", "+91 81435 13322"],
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Telugu", "Hindi"],
    },
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  const citiesServed = areaName
    ? [areaName]
    : CITIES_ANDHRA_PRADESH;

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `https://pigeonguardsolutions.com/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": areaName ? `Pigeon Guard Solutions - ${areaName}` : "Pigeon Guard Solutions",
    "url": areaName
      ? `https://pigeonguardsolutions.com/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}`
      : "https://pigeonguardsolutions.com",
    "telephone": ["+91 93927 99311", "+91 81435 13322"],
    "email": "pigeonguardsolutions@gmail.com",
    "image": "https://pigeonguardsolutions.com/images/og-image.webp",
    "logo": "https://pigeonguardsolutions.com/images/logo/pigeon-guard-icon.svg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": areaName ? `${areaName}, Andhra Pradesh` : "Andhra Pradesh",
      "addressLocality": areaName || "Andhra Pradesh",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "520001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.5062,
      "longitude": 80.648,
    },
    "areaServed": citiesServed.map((city) => ({
      "@type": "City",
      "name": `${city}, Andhra Pradesh`,
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets, Invisible Grills & Cloth Hangers Installation Services",
      "itemListElement": ALL_18_SERVICES.map((srv, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Pigeon Guard Solutions",
          },
        },
        "position": idx + 1,
      })),
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
  };
}

export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pigeon Guard Safety Nets & Invisible Grills Installation",
    "image": "https://pigeonguardsolutions.com/images/og-image.webp",
    "description": "Top-rated balcony safety nets, transparent bird netting, and SS316 invisible grills in Andhra Pradesh across Vijayawada, Guntur, Ongole, Nellore, Tirupathi, Visakhapatnam, and Rajahmundry.",
    "brand": {
      "@type": "Brand",
      "name": "Pigeon Guard Solutions",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://pigeonguardsolutions.com",
    "name": "Pigeon Guard Solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pigeonguardsolutions.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(links: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": links.map((link, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": link.name,
      "item": link.item.startsWith("http") ? link.item : `https://pigeonguardsolutions.com${link.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": categoryName,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "name": "Pigeon Guard Solutions",
      "telephone": ["+91 93927 99311", "+91 81435 13322"],
      "email": "pigeonguardsolutions@gmail.com",
      "image": "https://pigeonguardsolutions.com/images/og-image.webp",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Andhra Pradesh",
        "addressLocality": "Andhra Pradesh",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN",
      },
    },
    "description": description,
    "areaServed": CITIES_ANDHRA_PRADESH.map((city) => ({
      "@type": "City",
      "name": `${city}, Andhra Pradesh`,
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(title: string, description: string, image: string, datePublished: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image.startsWith("http") ? image : `https://pigeonguardsolutions.com${image}`,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": "Pigeon Guard Solutions",
      "url": "https://pigeonguardsolutions.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pigeon Guard Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pigeonguardsolutions.com/images/logo/pigeon-guard-icon.svg",
      },
    },
  };
}

