export interface AreaReview {
  name: string;
  locality: string;
  rating: number;
  review: string;
  serviceUsed: string;
  date: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  localities: string[];
  landmarks: string[];
  customerReviews: AreaReview[];
  nearbySlugs: string[];
}

const localTraits: Record<
  string,
  {
    name: string;
    desc: string;
    housingType: string;
    localizedDetail: string;
    tagline: string;
    localities: string[];
    landmarks: string[];
    customerReviews: AreaReview[];
  }
> = {
  vijayawada: {
    name: "Vijayawada",
    desc: "Vijayawada is the bustling commercial hub of Andhra Pradesh, featuring fast-growing high-rise apartment clusters along MG Road, Benz Circle, Kanuru, and Tadepalli.",
    housingType: "modern high-rise gated community apartments, luxury riverfront towers, and commercial complexes",
    localizedDetail: "Riverfront breezes from the Krishna river and active balcony culture make UV-treated balcony safety nets and rust-resistant SS316 invisible grills essential for Vijayawada homeowners.",
    tagline: "Certified safety nets & invisible grills installation in Vijayawada — 100% free site inspection, same-day service.",
    localities: [
      "Benz Circle",
      "MG Road",
      "Kanuru",
      "Tadepalli",
      "Moghalrajpuram",
      "Bhavanipuram",
      "Gunadala",
      "Poranki",
      "Gollapudi",
      "Governorpet",
      "Auto Nagar",
      "Enikepadu",
      "Kankipadu",
      "Penamaluru",
    ],
    landmarks: ["Prakasam Barrage", "Benz Circle Flyover", "Kanaka Durga Temple", "Trendset Mall", "MG Road"],
    customerReviews: [
      {
        name: "Srinivas Rao M.",
        locality: "Benz Circle, Vijayawada",
        rating: 5,
        review:
          "Installed balcony safety nets and invisible grills in our 9th-floor apartment. The team arrived on time with laser measurement tools. The finishing is neat and feels very secure for my children.",
        serviceUsed: "Balcony Safety Nets & Invisible Grills",
        date: "Last week",
      },
      {
        name: "Lakshmi Priya K.",
        locality: "Kanuru, Vijayawada",
        rating: 5,
        review:
          "We were suffering from severe pigeon infestation in our AC duct and balcony. Pigeon Guard installed transparent nets in 3 hours. Totally humane, no pigeons since then!",
        serviceUsed: "Pigeon Safety Nets",
        date: "2 weeks ago",
      },
      {
        name: "Venkat Raman",
        locality: "Tadepalli, Vijayawada",
        rating: 5,
        review:
          "Very honest team. Clear per-sqft pricing with no surprise charges. Provided official 5-year warranty card upon completion.",
        serviceUsed: "Balcony Invisible Grills",
        date: "1 month ago",
      },
    ],
  },
  guntur: {
    name: "Guntur",
    desc: "Guntur is a major educational, medical, and residential metropolis in Andhra Pradesh with extensive multi-story residential communities across Brodipet, Arundelpet, Lakshmipuram, and Inner Ring Road.",
    housingType: "multi-story family apartments, gated community townships, and modern residential flats",
    localizedDetail: "High ambient summer temperatures and open balcony layouts require durable child fall protection netting and high-tensile pigeon exclusion barriers.",
    tagline: "Certified safety nets & invisible grills installation in Guntur — free doorstep inspection, same-day service.",
    localities: [
      "Brodipet",
      "Arundelpet",
      "Lakshmipuram",
      "Inner Ring Road",
      "Pattabhipuram",
      "Amaravathi Road",
      "Vidya Nagar",
      "Syamala Nagar",
      "Nallapadu",
      "Koretipadu",
      "Chandramouli Nagar",
      "Guentur Town",
    ],
    landmarks: ["Inner Ring Road", "Amaravathi Road Junction", "NTR Stadium", "Jinnah Tower", "Guntur Medical College Area"],
    customerReviews: [
      {
        name: "Dr. K. Ramakrishna",
        locality: "Lakshmipuram, Guntur",
        rating: 5,
        review:
          "Needed child safety nets for our 5th-floor balcony. Pigeon Guard technicians were polite, skilled, and used high-grade UV-treated netting. Highly recommended for families with toddlers.",
        serviceUsed: "Children Safety Nets",
        date: "3 days ago",
      },
      {
        name: "Venkata Satyanarayana",
        locality: "Brodipet, Guntur",
        rating: 5,
        review:
          "Quick response and free doorstep measurement. Installed anti-bird spikes and duct area safety nets. Very clean work.",
        serviceUsed: "Anti-Bird Spikes & Duct Nets",
        date: "3 weeks ago",
      },
      {
        name: "Anusha V.",
        locality: "Inner Ring Road, Guntur",
        rating: 5,
        review:
          "Invisible grills look super elegant and don't block the street view at all. 100% rustproof SS316 cables.",
        serviceUsed: "Balcony Invisible Grills",
        date: "1 month ago",
      },
    ],
  },
  ongole: {
    name: "Ongole",
    desc: "Ongole is the thriving commercial and administrative center in Prakasam district of Andhra Pradesh, witnessing rapid expansion of multi-family apartment complexes.",
    housingType: "modern residential flats, independent multi-tier homes, and expanding apartment layouts",
    localizedDetail: "High-temperature summers and open balcony layouts make UV-treated safety netting and space-efficient ceiling cloth hangers top choices in Ongole.",
    tagline: "Certified safety nets & invisible grills installation in Ongole — free doorstep measurement, same-day service.",
    localities: [
      "Lawyerpet",
      "Kurnool Road",
      "Bhagyanagar",
      "Santhapeta",
      "Anjaiah Road",
      "Mangamuru Road",
      "Housing Board Colony",
      "Gopal Nagar",
      "Trunk Road",
      "Ram Nagar",
    ],
    landmarks: ["RIMS Ongole", "Clock Tower Center", "Kurnool Road Flyover", "Collectorate Area"],
    customerReviews: [
      {
        name: "P. Sudhakar",
        locality: "Lawyerpet, Ongole",
        rating: 5,
        review:
          "Very professional installation. Pigeon Guard team brought samples and gave a fair quote. Completed our 2 balconies in 2.5 hours.",
        serviceUsed: "Balcony Safety Nets",
        date: "1 week ago",
      },
      {
        name: "Haritha Reddy",
        locality: "Bhagyanagar, Ongole",
        rating: 5,
        review:
          "Got ceiling cloth hangers and balcony netting installed together. Very space saving and sturdy.",
        serviceUsed: "Ceiling Cloth Hangers & Balcony Nets",
        date: "3 weeks ago",
      },
    ],
  },
  nellore: {
    name: "Nellore",
    desc: "Nellore is a major coastal metropolis in southern Andhra Pradesh, boasting modern apartment projects and coastal residential sectors.",
    housingType: "coastal residential apartments, multi-story family housing, and gated communities",
    localizedDetail: "Humid coastal air requires marine-grade SS316 invisible steel grills and weather-stabilized pigeon protection nets.",
    tagline: "Certified safety nets & invisible grills installation in Nellore — free doorstep measurement, same-day service.",
    localities: [
      "Magunta Layout",
      "Vedayapalem",
      "Haranathapuram",
      "Dargamitta",
      "Balaji Nagar",
      "Podalakur Road",
      "Stonehousepet",
      "Children's Park Road",
      "Pogathota",
      "Kavali Road",
    ],
    landmarks: ["Magunta Layout Circle", "Penna River Bridge", "VRC Centre", "Dargamitta"],
    customerReviews: [
      {
        name: "Ramesh Babu Ch.",
        locality: "Magunta Layout, Nellore",
        rating: 5,
        review:
          "Because of coastal air, normal iron grills rust fast. Pigeon Guard's marine-grade SS316 invisible grills are rust-free and look fantastic on our balcony.",
        serviceUsed: "Balcony Invisible Grills",
        date: "4 days ago",
      },
      {
        name: "Madhavi Latha",
        locality: "Haranathapuram, Nellore",
        rating: 5,
        review:
          "Excellent pigeon netting service. Technicians were polite, clean, and didn't damage any balcony tiles.",
        serviceUsed: "Pigeon Safety Nets",
        date: "2 weeks ago",
      },
    ],
  },
  tirupathi: {
    name: "Tirupathi",
    desc: "Tirupathi is a bustling spiritual and institutional capital in Andhra Pradesh with dense residential developments and modern apartment flats.",
    housingType: "modern family apartment flats, township complexes, and residential buildings",
    localizedDetail: "Balcony safety nets, anti-bird spikes, and kid-proof invisible grills provide comprehensive fall and bird protection against strong hill breezes.",
    tagline: "Certified safety nets & invisible grills installation in Tirupathi — free doorstep inspection, same-day service.",
    localities: [
      "MR Palli",
      "Korlagunta",
      "Bairagipatteda",
      "Alipiri",
      "Renigunta Road",
      "Chandragiri Road",
      "SVU Campus Area",
      "Tiruchanur Road",
      "Leela Mahal Road",
      "Bhavani Nagar",
    ],
    landmarks: ["Alipiri Footpath Entry", "SV University", "Renigunta Junction", "Korlagunta Circle"],
    customerReviews: [
      {
        name: "M. Murali Krishna",
        locality: "MR Palli, Tirupathi",
        rating: 5,
        review:
          "Had huge pigeon problem in our apartment duct area. Pigeon Guard covered the complete shaft area safely. Excellent work and genuine 5-year warranty.",
        serviceUsed: "Duct Area Safety Nets",
        date: "5 days ago",
      },
      {
        name: "Kavitha S.",
        locality: "Bairagipatteda, Tirupathi",
        rating: 5,
        review:
          "Safe and tensioned perfectly for our kids and pet dog. Great experience from inspection to finishing.",
        serviceUsed: "Balcony Safety Nets & Pet Nets",
        date: "2 weeks ago",
      },
    ],
  },
  visakhapatnam: {
    name: "Visakhapatnam",
    desc: "Visakhapatnam (Vizag) is Andhra Pradesh's premier coastal metropolis and tech hub, famous for high-rise sea-view balconies, beachfront flats, and tech corridors.",
    housingType: "luxury sea-facing high-rise towers, hillside gated apartments, and premium penthouses",
    localizedDetail: "Strong coastal wind exposure and saline marine air make marine-grade SS316 invisible grills and UV-stabilized heavy-duty safety nets the gold standard for Vizag balconies.",
    tagline: "Certified safety nets & invisible grills installation in Visakhapatnam — free doorstep inspection, same-day service.",
    localities: [
      "MVP Colony",
      "Madhurawada",
      "Gajuwaka",
      "Seethammadhara",
      "Rushikonda",
      "Yendada",
      "Siripuram",
      "Pendurthi",
      "Dwaraka Nagar",
      "Maharani Peta",
      "Kommadi",
      "Sheela Nagar",
      "Sujeetha Nagar",
      "Kurmannapalem",
    ],
    landmarks: ["Beach Road", "Kailasagiri", "Rushikonda IT Park", "MVP Double Road", "Siripuram Circle", "Gajuwaka Junction"],
    customerReviews: [
      {
        name: "Capt. Rajesh Varma",
        locality: "Beach Road, Visakhapatnam",
        rating: 5,
        review:
          "Living on the 14th floor facing the sea, corrosion was our main worry. Pigeon Guard installed genuine SS316 marine-grade invisible grills. The sea view remains 100% unobstructed and balcony is completely safe!",
        serviceUsed: "Balcony Invisible Grills",
        date: "2 days ago",
      },
      {
        name: "Sunil Kumar Naidu",
        locality: "Madhurawada, Visakhapatnam",
        rating: 5,
        review:
          "Pigeon Guard team arrived in 2 hours for free inspection. Netting quality is super strong with stainless steel anchors. No pigeons on our AC units now.",
        serviceUsed: "Pigeon Safety Nets & Spikes",
        date: "1 week ago",
      },
      {
        name: "Deepika Rao",
        locality: "MVP Colony, Visakhapatnam",
        rating: 5,
        review:
          "Great job with child safety net installation. Clean drilling with vacuum dust protection. Friendly technicians and transparent billing.",
        serviceUsed: "Children Safety Nets",
        date: "3 weeks ago",
      },
    ],
  },
  rajahmundry: {
    name: "Rajahmundry",
    desc: "Rajahmundry is the cultural capital on the Godavari riverfront in Andhra Pradesh, featuring scenic riverside apartment towers and vibrant residential nodes.",
    housingType: "riverside multi-story apartments, gated communities, and family residential flats",
    localizedDetail: "Pigeon exclusion nets for balcony ledges and duct shafts, paired with sleek invisible grills, protect riverside homes effortlessly against bird droppings and riverfront breeze.",
    tagline: "Certified safety nets & invisible grills installation in Rajahmundry — free doorstep inspection, same-day service.",
    localities: [
      "Danavaipeta",
      "Tilak Road",
      "JN Road",
      "Prakash Nagar",
      "Morampudi",
      "Diwancheruvu",
      "Lalacheruvu",
      "Aryapuram",
      "Innespeta",
      "Kotilingala",
      "Hukumpeta",
    ],
    landmarks: ["Godavari Arch Bridge", "Pushkar Ghat", "Danavaipeta Park", "Morampudi Junction"],
    customerReviews: [
      {
        name: "T. Subba Rao",
        locality: "Danavaipeta, Rajahmundry",
        rating: 5,
        review:
          "Riverfront apartment had continuous pigeon roosting issues. Pigeon Guard sealed the entire balcony perimeter neatly with transparent nets. Clean and humane solution.",
        serviceUsed: "Pigeon Safety Nets",
        date: "4 days ago",
      },
      {
        name: "Sandhya Rani",
        locality: "Prakash Nagar, Rajahmundry",
        rating: 5,
        review:
          "Installed invisible grills and ceiling cloth hangers. Super neat finish, high quality SS316 wire ropes. Very happy with the service.",
        serviceUsed: "Balcony Invisible Grills & Cloth Hangers",
        date: "2 weeks ago",
      },
    ],
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
    overview: `${trait.desc} As multi-story apartment living and high-rise gated communities expand across ${cityName}, balcony safety and pigeon protection have become essential for every homeowner. Pigeon Guard Solutions provides certified, heavy-duty safety netting and modern SS316 invisible grill installation across all residential nodes in ${cityName}.`,
    apartmentLiving: `Living in modern high-rise apartments in ${cityName} offers great panoramic views and natural airflow, but open balconies and windows present serious safety risks for toddlers and pets. Pigeon Guard Solutions provides custom-anchored safety solutions engineered specifically for ${cityName}'s building architectures.`,
    balconySafety: `Accidental balcony falls and railing gaps can be dangerous. Our child fall prevention nets and bite-proof pet safety nets secure every balcony corner in ${cityName} without obstructing fresh air or scenic views. ${trait.localizedDetail}`,
    birdProblem: `Pigeons roosting and nesting on balcony ledges, AC outdoor compressors, and open building ducts cause severe respiratory health risks and property staining. In ${cityName}, our translucent anti-bird nets and stainless steel bird spikes provide a permanent, humane barrier.`,
    weatherDetails: `Andhra Pradesh's climate, intense summer sunlight, and coastal winds demand durable materials. In ${cityName}, Pigeon Guard installs virgin UV-stabilized copolymer nets and rustproof SS316 marine-grade invisible grills that withstand the outdoor elements for 10+ years.`,
    localities: trait.localities,
    landmarks: trait.landmarks,
    customerReviews: trait.customerReviews,
    nearbySlugs,
  };

  return acc;
}, {} as Record<string, AreaDetail>);
