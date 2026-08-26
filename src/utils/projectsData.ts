import { SpecItem } from "./servicesData";

export interface ProjectDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  service: string;
  serviceName: string;
  location: string;
  locationSlug: string;
  date: string; // Formatted project completion date
  description: string;
  problem: string;
  solution: string;
  materialsUsed: string[];
  process: string[];
  image: string;
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  specs: SpecItem[];
}

export const projectsData: Record<string, ProjectDetail> = {
  "balcony-safety-nets-vijayawada": {
    slug: "balcony-safety-nets-vijayawada",
    name: "Balcony Safety Nets Installation in Vijayawada Residential Complex",
    category: "safety-nets",
    service: "balcony-safety-nets",
    serviceName: "Balcony Safety Nets",
    location: "Vijayawada",
    locationSlug: "vijayawada",
    date: "Completed May 2026",
    description: "Installation of heavy-duty double-locked HDPE safety netting on the 7th and 8th floor balconies of a luxury apartment complex in Vijayawada.",
    problem: "The client resided on a high-floor apartment in Vijayawada. Due to open balcony railings, there was an active hazard for children and domestic cats. Pigeons were also nesting on the AC ledge, causing noise and hygiene issues.",
    solution: "Pigeon Guard Solutions installed a custom-fit, high-tensile HDPE safety netting barrier across the entire balcony frame. The net was anchored securely into concrete ceilings and walls using stainless steel expansion bolts and border ropes.",
    materialsUsed: [
      "100% UV-Stabilized HDPE Nylon netting",
      "0.8mm mesh border ropes",
      "SS304 wall anchoring brackets",
    ],
    process: [
      "Conducted a free site inspection and measurements of balcony boundaries.",
      "Prepared concrete anchor points and drilled hooks at regular intervals.",
      "Tensioned and tied the HDPE mesh across border ropes.",
      "Conducted load testing on the netting anchors to ensure child-safe tension.",
    ],
    image: "/images/materials/Balconynetwork.jpeg",
    gallery: [
      "/images/materials/Balconynetwork.jpeg",
      "/images/services/child.webp",
      "/images/materials/FactoryNets.jpeg",
    ],
    beforeImage: "/images/gallery/before_balcony.png",
    afterImage: "/images/materials/Balconynetwork.jpeg",
    specs: [
      { label: "Material Used", value: "HDPE Monofilament" },
      { label: "Mesh Diameter", value: "35mm x 35mm" },
      { label: "Tensile Strength", value: "150 kg per strand capacity" },
      { label: "Project Warranty", value: "5 Years Manufacturer Warranty" },
    ],
  },
  "invisible-grills-visakhapatnam": {
    slug: "invisible-grills-visakhapatnam",
    name: "Window and Balcony Invisible Grills in Visakhapatnam High-Rise Apartment",
    category: "invisible-grills",
    service: "balcony-invisible-grills",
    serviceName: "Balcony Invisible Grills",
    location: "Visakhapatnam",
    locationSlug: "visakhapatnam",
    date: "Completed June 2026",
    description: "Elegant invisible steel wire grill installation along balcony railings of a coastal high-rise apartment in Visakhapatnam.",
    problem: "The resident of a 14th-floor Visakhapatnam apartment wanted to secure their balcony for pet safety. Traditional heavy iron grills blocked the sea view and rusted quickly due to coastal saline humidity.",
    solution: "Pigeon Guard installed SS316 marine-grade invisible steel wire grills spaced 3 inches apart. The wires are wrapped in a clear nylon sleeve to prevent scratches, clamped firmly in heavy aluminium base tracking.",
    materialsUsed: [
      "SS316 Marine Grade Stainless Steel wire core",
      "High-elastic Nylon protective sheath",
      "Heavy-duty Aluminium track clamps",
    ],
    process: [
      "Mapped and measured the balcony railing profile.",
      "Mounted the heavy aluminium tracking rails at the ceiling and floor base.",
      "Threaded and tensioned the SS316 cables through tracking guides.",
      "Locked the cables at high tension using internal copper sleeves.",
    ],
    image: "/images/services/shyambalconygrills.jpg",
    gallery: [
      "/images/services/shyambalconygrills.jpg",
      "/images/services/shyamchildreninvisiblegrills.jpg",
      "/images/services/Shayamstaircase-grills.jpg",
    ],
    beforeImage: "/images/gallery/before_balcony.png",
    afterImage: "/images/services/shyambalconygrills.jpg",
    specs: [
      { label: "Grill Core", value: "316 Stainless Steel (Marine Grade)" },
      { label: "Spacing", value: "3 inches (75mm)" },
      { label: "Cable Diameter", value: "2.5mm" },
      { label: "Strength Rating", value: "400 kg high tension core" },
    ],
  },
  "ceiling-hangers-guntur": {
    slug: "ceiling-hangers-guntur",
    name: "Ceiling-Mounted Pulley Cloth Hanger Setup in Guntur Flat",
    category: "cloth-hangers",
    service: "ceiling-cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    location: "Guntur",
    locationSlug: "guntur",
    date: "Completed July 2026",
    description: "Installation of a 6-pipe dual-rope pulley ceiling drying hanger in a compact utility balcony of a Guntur residence.",
    problem: "The resident faced severe drying space constraints. Standard metal floor racks blocked the utility balcony, restricting access to the washing machine and blocking ventilation.",
    solution: "Pigeon Guard installed a premium ceiling-mounted pulley cloth drying system with 6 rustproof stainless steel pipes, allowing the resident to lift damp clothes easily to ceiling height.",
    materialsUsed: [
      "SS304 rustproof stainless steel rods",
      "Braided high-strength nylon ropes",
      "Dual rope pulley lockers & rollers",
    ],
    process: [
      "Inspected ceiling structure to confirm secure anchoring spots.",
      "Drilled and mounted pulley pulleys into concrete ceiling.",
      "Threaded the braided nylon cords and locked SS304 rods in place.",
      "Tested vertical lift weight limit (up to 15kg per rod).",
    ],
    image: "/images/materials/clothhangerwork.jpeg",
    gallery: [
      "/images/materials/clothhangerwork.jpeg",
      "/images/services/service_balcony_hanger.png",
    ],
    beforeImage: "/images/gallery/before_balcony.png",
    afterImage: "/images/materials/clothhangerwork.jpeg",
    specs: [
      { label: "Rod Count", value: "6 Pipes" },
      { label: "Rod Length", value: "6 feet (SS304)" },
      { label: "Rope material", value: "Braided Nylon cord" },
      { label: "Warranty", value: "3 Years Full Replacement Warranty" },
    ],
  },
};
