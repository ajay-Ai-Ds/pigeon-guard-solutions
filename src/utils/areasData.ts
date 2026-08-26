export interface AreaDetail {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  nearbySlugs: string[];
}

const localTraits: Record<string, { name: string; desc: string; housingType: string; localizedDetail: string; tagline: string }> = {
  "vijayawada": {
    name: "Vijayawada",
    desc: "Vijayawada is the commercial heart of Andhra Pradesh, featuring vibrant high-rise apartment towers along MG Road, Benz Circle, Kanuru, and Tadepalli.",
    housingType: "modern high-rise gated community apartments, luxury riverfront towers, and residential complexes",
    localizedDetail: "Riverfront wind currents and active balcony living make high-grade HDPE balcony safety nets and rust-free SS316 invisible grills essential for Vijayawada homeowners.",
    tagline: "Safety nets & invisible grills installation in Vijayawada — free inspection, same-day service.",
  },
  "guntur": {
    name: "Guntur",
    desc: "Guntur is a premier educational, commercial, and medical hub in Andhra Pradesh with extensive multi-story residential communities across Brodipet, Arundelpet, and Inner Ring Road.",
    housingType: "multi-story family apartments, gated community townships, and modern residential flats",
    localizedDetail: "Open balconies and ventilation ducts require durable child fall protection netting and pigeon exclusion barriers.",
    tagline: "Safety nets & invisible grills installation in Guntur — free inspection, same-day service.",
  },
  "ongole": {
    name: "Ongole",
    desc: "Ongole is a key commercial and administrative center in Prakasam district of Andhra Pradesh, witnessing fast expansion of multi-family apartment complexes.",
    housingType: "modern residential flats, independent multi-tier homes, and expanding apartment layouts",
    localizedDetail: "High-temperature summers and open balcony layouts make UV-treated safety netting and space-efficient ceiling cloth hangers top choices in Ongole.",
    tagline: "Safety nets & invisible grills installation in Ongole — free inspection, same-day service.",
  },
  "nellore": {
    name: "Nellore",
    desc: "Nellore is a major coastal metropolis in southern Andhra Pradesh, boasting modern apartment projects and coastal residential sectors.",
    housingType: "coastal residential apartments, multi-story family housing, and gated communities",
    localizedDetail: "Humid coastal air requires marine-grade SS316 invisible steel grills and weather-stabilized pigeon protection nets.",
    tagline: "Safety nets & invisible grills installation in Nellore — free inspection, same-day service.",
  },
  "tirupathi": {
    name: "Tirupathi",
    desc: "Tirupathi is a bustling spiritual and institutional capital in Andhra Pradesh with dense residential developments and modern apartment flats.",
    housingType: "modern family apartment flats, township complexes, and residential buildings",
    localizedDetail: "Balcony safety nets, anti-bird spikes, and kid-proof invisible grills provide comprehensive fall and bird protection.",
    tagline: "Safety nets & invisible grills installation in Tirupathi — free inspection, same-day service.",
  },
  "visakhapatnam": {
    name: "Visakhapatnam",
    desc: "Visakhapatnam (Vizag) is Andhra Pradesh's largest city and premier coastal metropolis, famous for high-rise sea-view balconies, beachfront flats, and tech corridors.",
    housingType: "luxury sea-facing high-rise towers, hillside gated apartments, and premium penthouses",
    localizedDetail: "Strong coastal wind exposure and saline marine air make marine-grade SS316 invisible grills and UV-stabilized heavy-duty safety nets the gold standard for Vizag balconies.",
    tagline: "Safety nets & invisible grills installation in Visakhapatnam — free inspection, same-day service.",
  },
  "rajahmundry": {
    name: "Rajahmundry",
    desc: "Rajahmundry is the cultural capital on the Godavari riverfront in Andhra Pradesh, featuring scenic riverside apartment towers and vibrant residential nodes.",
    housingType: "riverside multi-story apartments, gated communities, and family residential flats",
    localizedDetail: "Pigeon exclusion nets for balcony ledges and duct shafts, paired with sleek invisible grills, protect riverside homes effortlessly.",
    tagline: "Safety nets & invisible grills installation in Rajahmundry — free inspection, same-day service.",
  },
};

export const areasList = Object.keys(localTraits);
export const andhraPradeshAreasList = areasList;
export const citiesList = areasList;

export const areasData: Record<string, AreaDetail> = areasList.reduce((acc, slug) => {
  const trait = localTraits[slug];
  const cityName = trait.name;

  const currentIdx = areasList.indexOf(slug);
  const nearbySlugs = [
    areasList[(currentIdx + 1) % areasList.length],
    areasList[(currentIdx + 2) % areasList.length],
    areasList[(currentIdx + 3) % areasList.length],
    areasList[(currentIdx + 4) % areasList.length],
  ];

  acc[slug] = {
    slug,
    name: cityName,
    tagline: trait.tagline,
    overview: `${trait.desc} As multi-story apartment living and high-rise developments expand across ${cityName}, balcony safety and bird protection have become top priorities. Pigeon Guard Solutions provides certified, heavy-duty safety netting and modern SS316 invisible grill installation throughout ${cityName}.`,
    apartmentLiving: `Living in modern apartments in ${cityName} offers great views and open ventilation, but open balconies and windows present serious fall risks for toddlers and pets. Pigeon Guard Solutions provides custom-anchored safety solutions engineered specifically for ${cityName}'s building architectures.`,
    balconySafety: `Accidental balcony falls and gaps in railings can be dangerous. Our child fall prevention nets and bite-proof pet safety nets secure every balcony corner in ${cityName} without blocking fresh air or natural light. ${trait.localizedDetail}`,
    birdProblem: `Pigeons roosting and nesting on balcony ledges, AC outdoor compressors, and open building ducts cause severe respiratory health risks and property staining. In ${cityName}, our translucent anti-bird nets and stainless steel bird spikes provide a permanent, humane barrier.`,
    weatherDetails: `Andhra Pradesh's coastal climate, intense summer sunlight, and seasonal rains demand durable materials. In ${cityName}, Pigeon Guard installs virgin UV-stabilized copolymer nets and rustproof SS316 marine-grade invisible grills that withstand the elements for 10+ years.`,
    nearbySlugs,
  };

  return acc;
}, {} as Record<string, AreaDetail>);
