export interface FAQItem {
  question: string;
  answer: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  categoryName: string;
  title: string;
  description: string;
  longDescription: string;
  aiOverview: string;
  image: string; // Hero image
  supportingImages: string[]; // 4 images
  gallery: string[]; // 6 images
  beforeImage: string;
  afterImage: string;
  benefits: string[];
  specsTable: SpecItem[];
  faqs: FAQItem[];
}

// Helper to generate 12 standard, voice-search-friendly FAQs for any service
function generateFAQsForService(serviceName: string, category: string): FAQItem[] {
  return [
    {
      question: `What is the cost of ${serviceName} installation in Andhra Pradesh?`,
      answer: "Pricing is transparently custom-calculated starting from affordable per-square-foot rates based on total area, material grade selection, height, and specific anchoring complexity. Contact our team for a free on-site quote.",
    },
    {
      question: `Do you provide a warranty on ${serviceName}?`,
      answer: "Yes, Pigeon Guard Solutions offers a comprehensive 3 to 5 Year Manufacturer Warranty on safety nets and SS316 marine-grade invisible grills covering UV degradation and cable tension integrity.",
    },
    {
      question: `How long does it take to install ${serviceName} in an apartment?`,
      answer: `Most residential ${serviceName} setups are completed within 2 to 4 hours. Our certified technicians bring all necessary drilling equipment and clean up the work area immediately after installation.`,
    },
    {
      question: `Are your materials for ${serviceName} rust-proof and weatherproof?`,
      answer: `Yes, we use copolymer nylon or UV-treated HDPE for nets, and SS316 marine-grade steel cables for grills. These materials are engineered to survive Andhra Pradesh's high humidity, direct sunlight, and outdoor weather.`,
    },
    {
      question: `Do you charge for site inspection visits and measurements in Andhra Pradesh?`,
      answer: `No, our site inspection, measurements, and material sample showcases are 100% free of charge across Andhra Pradesh. There is no obligation to book after the quotation is shared.`,
    },
    {
      question: `How do you anchor ${serviceName} to concrete walls?`,
      answer: "We drill precise holes using industrial hammer drills and secure expansion hooks or aluminium tracks. This anchoring setup handles high load tensions without damaging the structural strength of your walls.",
    },
    {
      question: `Is ${serviceName} safe for toddlers and small children?`,
      answer: `Absolutely. Securing balconies, windows, or shafts with ${serviceName} forms a highly durable safety barrier. It prevents accidental falls, providing peace of mind for families with active toddlers and children.`,
    },
    {
      question: `Can pets chew or tear through ${serviceName}?`,
      answer: category === "invisible-grills" 
        ? "SS316 steel wire invisible grills are completely bite-proof and scratch-proof, making them the ultimate safety solution for cats, dogs, and other active household pets."
        : "For houses with pets, we recommend our thick-gauge netting. Nylon and HDPE safety nets are highly tear-resistant, keeping pets safe from slipping through railings.",
    },
    {
      question: `Will ${serviceName} block my scenic view or light?`,
      answer: category === "invisible-grills"
        ? "No, invisible grills feature ultra-slim 2.0mm steel cables, making them virtually invisible from a short distance. You enjoy unobstructed views, light, and ventilation."
        : "No, our nets are translucent or color-matched to ensure they do not obstruct fresh breeze, natural light, or views from your balconies and windows.",
    },
    {
      question: `Do you have certified technicians to work at high floors?`,
      answer: `Yes, all Pigeon Guard Solutions field technicians are trained in safety harness usage and high-rise installation guidelines. They are fully insured and handle high-floor setups professionally.`,
    },
    {
      question: `What maintenance is required for ${serviceName}?`,
      answer: "Practically zero maintenance. You can occasionally clean the net or grill wires with a damp microfiber cloth to remove dust. Do not use acid or abrasive chemicals.",
    },
    {
      question: `How do we contact Pigeon Guard Solutions for booking?`,
      answer: "You can book a free measurement session by calling us directly at +91 93927 99311, sending a message on WhatsApp, or submitting our contact request form.",
    },
  ];
}

export const servicesData: Record<string, ServiceDetail> = {
  // Safety Nets (10 Services)
  "balcony-safety-nets": {
    slug: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Premium Balcony Safety Nets Installation in Andhra Pradesh | Pigeon Guard Solutions",
    description: "Secure your balconies from accidental falls with heavy-duty UV-stabilized safety netting. Fast, expert installation in Andhra Pradesh.",
    longDescription: "Pigeon Guard Solutions is Andhra Pradesh's trusted installer for balcony safety nets. Our safety nets are fabricated using premium high-density polyethylene (HDPE) with built-in UV stabilizers. They are engineered to endure Andhra Pradesh's outdoor weather without losing tensile strength, forming a secure barrier for high-rise apartment balconies.",
    aiOverview: "Pigeon Guard Balcony Safety Nets provide a heavy-duty fall barrier using UV-stabilized copolymer nylon mesh. Custom-anchored by high-rise safety experts, they prevent falls by children and pets while allowing 100% natural ventilation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Child Safety Protection", "Pet Balcony Safety", "UV-Stabilized HDPE Mesh", "Rustproof Steel Hooks", "Clear Ventilation Flow", "5+ Years Outdoor Durability"],
    specsTable: [
      { label: "Material", value: "HDPE Copolymer Nylon" },
      { label: "Thickness", value: "0.8mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "150 kg per strand capacity" },
      { label: "Durability", value: "5+ Years Outdoor Lifespan" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable (SS Anchors Rustproof)" },
      { label: "Maintenance", value: "Wash with water/microfiber wipe" },
    ],
    faqs: generateFAQsForService("Balcony Safety Nets", "safety-nets"),
  },
  "children-safety-nets": {
    slug: "children-safety-nets",
    name: "Children Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Toddler & Children Fall Protection Nets Andhra Pradesh | Pigeon Guard Solutions",
    description: "Secure windows, stairwells, and balconies from accidental kid falls. Heavy load shock-absorbing children safety nets.",
    longDescription: "Our children safety nets provide vital protection for families living in high-rise buildings. Designed with thick-gauge netting, tight mesh structures, and closer anchoring points, they absorb high impact forces. Perfect for securing open stairwells, terraces, balconies, and windows where kids play.",
    aiOverview: "Pigeon Guard Children Safety Nets are heavy-duty protective grids designed to absorb sudden impact shocks. Woven with double-locked nodes, they secure balconies, windows, and banisters, creating a kid-proof play zone without blocking light or air.",
    image: "/images/hero/childrensafetygrill.jpg",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Fall Prevention", "High Impact Shock Absorption", "Zero Sharp Edges", "Closer Anchor Spacing", "100% Breathable Mesh", "Kid-Safe Locking System"],
    specsTable: [
      { label: "Material", value: "Braided Nylon / HDPE" },
      { label: "Thickness", value: "1.5mm to 3.0mm" },
      { label: "Strength (Break Load)", value: "180 kg high impact rating" },
      { label: "Durability", value: "5+ Years Weatherproof Life" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Periodic tension check & wash" },
    ],
    faqs: generateFAQsForService("Children Safety Nets", "safety-nets"),
  },
  "pet-safety-nets": {
    slug: "pet-safety-nets",
    name: "Pet Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cat & Dog Balcony Protection Nets Andhra Pradesh | Pigeon Guard Solutions",
    description: "Prevent cats, dogs, and pets from falling through high-rise balcony railings. Scratch-resistant fine netting.",
    longDescription: "Keep your active pets safe. Our pet safety nets are designed with fine mesh sizes that prevent kittens or puppies from squeezing through banister slots. They use highly scratch-resistant, bite-proof materials that hold tight under impact.",
    aiOverview: "Pigeon Guard Pet Safety Nets create a secure boundary around balconies and windows, preventing dogs, cats, and birds from falling or escaping. Crafted with fine, claws-safe mesh, they are highly bite-resistant and firmly anchored.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Prevents Pet Falls", "Claw & Scratch Resistant", "No Claw Snagging Mesh", "UV-Stabilized Lifespan", "Maintains Bright Views", "Custom Frame Tight Anchors"],
    specsTable: [
      { label: "Material", value: "HDPE monofilament core" },
      { label: "Thickness", value: "1.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "140 kg tear resistance" },
      { label: "Durability", value: "5+ Years Outdoor Life" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Microfiber wipe down" },
    ],
    faqs: generateFAQsForService("Pet Safety Nets", "safety-nets"),
  },
  "pigeon-safety-nets": {
    slug: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Transparent Pigeon Exclusion Nets Andhra Pradesh | Pigeon Guard Solutions",
    description: "Exclude pigeons from nesting on balconies and window sills. Translucent, long-lasting bird safety netting.",
    longDescription: "Pigeon nesting creates severe hygiene and health risks. Our transparent pigeon netting blocks birds out cleanly. Woven with thin, high-strength monofilament ropes, these nets are practically invisible, maintaining your building's external view.",
    aiOverview: "Pigeon Guard Pigeon Safety Nets offer a translucent, eco-friendly barrier to keep birds off balconies and AC shafts. Woven with monofilament copolymer, they prevent droppings and nesting hazards without ruining the visual layout.",
    image: "/images/hero/pigeonnet.jpg",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Hygienic Clean Balcony", "Transparent Aesthetics", "No Harm to Pigeons", "Blocks AC Shaft Nesting", "Rust-Free Anchors", "Weather Resistant Mesh"],
    specsTable: [
      { label: "Material", value: "Monofilament Copolymer Nylon" },
      { label: "Thickness", value: "0.7mm to 1.2mm" },
      { label: "Strength (Break Load)", value: "120 kg tensile strand" },
      { label: "Durability", value: "5+ Years UV Protected" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Vacuum or light dust wipe" },
    ],
    faqs: generateFAQsForService("Pigeon Safety Nets", "safety-nets"),
  },
  "sports-nets": {
    slug: "sports-nets",
    name: "Sports Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cricket Practice & Sports Ground Nets Andhra Pradesh | Pigeon Guard Solutions",
    description: "Heavy impact-resistant sports boundary netting for cricket turf, football pitches, and open grounds.",
    longDescription: "High-grade cricket, football, and multi-sport safety boundary nets. Woven with premium high-density nylon cord, these nets are designed to withstand constant ball impacts and protect nearby properties and spectators.",
    aiOverview: "Pigeon Guard Sports Nets provide impact-resistant enclosing barriers for cricket pitches, terraced sports grounds, and school courts. Made of high-grade braided nylon, they absorb huge strike forces while surviving outdoor sun.",
    image: "/images/materials/BoxCricketnet.jpeg",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["High Ball-Impact Absorption", "UV-treated Braided Nylon", "Spectator Protection", "Terrace Enclosures", "Custom Height Options", "Sturdy Structural Steel Framework"],
    specsTable: [
      { label: "Material", value: "Braided Nylon Cord" },
      { label: "Thickness", value: "2.0mm to 4.0mm" },
      { label: "Strength (Break Load)", value: "250 kg ball impact rating" },
      { label: "Durability", value: "5+ Years Heavy Use" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Inspect boundary knots periodically" },
    ],
    faqs: generateFAQsForService("Sports Nets", "safety-nets"),
  },
  "construction-safety-nets": {
    slug: "construction-safety-nets",
    name: "Construction Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Industrial Fall & Debris Containment Nets Andhra Pradesh | Pigeon Guard Solutions",
    description: "Certified construction safety netting to secure site workers and catch falling debris on building sites.",
    longDescription: "Ensure security compliance at your building sites. Our industrial-grade construction safety nets are fabricated to catch falling tools, dust, cement chunks, and support labor falls. Tested under rigorous load tests.",
    aiOverview: "Pigeon Guard Construction Safety Nets are heavy-duty industrial mesh borders designed to prevent work-site falls. Conforming to site safety codes, they act as active protection layers on high-rise constructions.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Worker Fall Protection", "Debris & Tool Catching", "Meets ISO Safety Norms", "Dual Border Anchor Lines", "Highly Durable Materials", "Large Site Coverage Capacity"],
    specsTable: [
      { label: "Material", value: "High-Tensile Polypropylene (PP)" },
      { label: "Thickness", value: "3.0mm to 6.0mm" },
      { label: "Strength (Break Load)", value: "500 kg industrial drop rating" },
      { label: "Durability", value: "3+ Years Site Construction Life" },
      { label: "UV Resistance", value: "Medium to High" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Inspect for cuts and loading wear" },
    ],
    faqs: generateFAQsForService("Construction Safety Nets", "safety-nets"),
  },
  "duct-area-safety-nets": {
    slug: "duct-area-safety-nets",
    name: "Duct Area Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Apartment Duct & Open Ventilation Shaft Nets Andhra Pradesh | Pigeon Guard Solutions",
    description: "Seal open building ducts to block pigeons, nesting, and trash drops. Custom-sized safety netting.",
    longDescription: "Central ventilation shafts in apartments easily accumulate garbage and harbor pigeons. We seal these open vertical shafts with premium-quality safety nets, ensuring zero pest intrusion while keeping shafts breathable.",
    aiOverview: "Pigeon Guard Duct Area Safety Nets prevent pigeons and falling household waste from building up in open building shafts. Anchored across multi-story ducts, they optimize hygiene while allowing ventilation.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Blocks Pigeon Nesting", "Prevents Dropped Trash", "Permits Light & Airflow", "Rustproof Steel Eyelets", "Insured High-Rise Team", "UV-Stabilized Durability"],
    specsTable: [
      { label: "Material", value: "HDPE monofilament mesh" },
      { label: "Thickness", value: "1.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "130 kg strand load" },
      { label: "Durability", value: "5+ Years Shaft Coverage" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Clear debris if piled on mesh" },
    ],
    faqs: generateFAQsForService("Duct Area Safety Nets", "safety-nets"),
  },
  "monkey-safety-nets": {
    slug: "monkey-safety-nets",
    name: "Monkey Safety Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Thick Steel-Reinforced Monkey Exclusion Nets Andhra Pradesh | Pigeon Guard Solutions",
    description: "Prevent wild monkeys from breaching balconies, kitchens, and terraces. Heavy-gauge reinforced safety nets.",
    longDescription: "Monkeys present a significant problem in specific Andhra Pradesh residential zones. Normal netting can be torn or chewed by them. Our monkey safety netting uses thick-gauge, steel-wire reinforced nylon to secure entryways.",
    aiOverview: "Pigeon Guard Monkey Safety Nets provide animal exclusion using steel-core wire reinforced meshes. Strongly anchored to withstand pulling and chewing forces, they keep wild monkeys out of balconies.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Bite & Chew Proof Wires", "Strong Heavy-duty Anchoring", "Prevents Monkey Intrusions", "Restricts Property Damage", "Permits Light Ventilation", "Secure Lockdown Frame"],
    specsTable: [
      { label: "Material", value: "HDPE Nylon with Steel-Wire Cores" },
      { label: "Thickness", value: "2.0mm to 3.5mm" },
      { label: "Strength (Break Load)", value: "300 kg reinforced load" },
      { label: "Durability", value: "5+ Years Heavy Duty" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Steel core rust-protected by Nylon sheath" },
      { label: "Maintenance", value: "Wipe clean" },
    ],
    faqs: generateFAQsForService("Monkey Safety Nets", "safety-nets"),
  },
  "cricket-practice-nets": {
    slug: "cricket-practice-nets",
    name: "Cricket Practice Nets",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Cricket Practice Nets Installation in Andhra Pradesh | Pigeon Guard Solutions",
    description: "Professional cricket practice nets for indoor & outdoor setups, academies, schools, and residences in Andhra Pradesh.",
    longDescription: "Pigeon Guard Solutions offers professional cricket practice netting solutions across Andhra Pradesh. We install durable, impact-absorbing nets for sports academies, educational clubs, corporate turfs, and residential terraces. Our cricket nets are made of high-quality UV-stabilized nylon ropes and braided twine.",
    aiOverview: "Pigeon Guard Cricket Practice Nets offer heavy-impact ball containment using UV-treated braided nylon mesh. Engineered for commercial sports turfs and home terraces, they provide durable practice zones in Andhra Pradesh.",
    image: "/images/materials/BoxCricketnet.jpeg",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Absorbs High Ball Impact", "UV-Stabilized Weatherproof Ropes", "Spectator & Property Protection", "Indoor & Outdoor Custom Frames", "Durable Heavy-Duty Nylon Twine", "Free Site Measurement Visits"],
    specsTable: [
      { label: "Material", value: "Braided Nylon Twine / HDPE" },
      { label: "Thickness", value: "2.5mm to 4.0mm" },
      { label: "Strength (Break Load)", value: "250 kg high impact rating" },
      { label: "Durability", value: "5+ Years Turf/Outdoor Life" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "SS eyelets & galvanized frame rustproof" },
      { label: "Maintenance", value: "Inspect frame ropes periodically" },
    ],
    faqs: generateFAQsForService("Cricket Practice Nets", "safety-nets"),
  },
  "anti-bird-spikes": {
    slug: "anti-bird-spikes",
    name: "Anti-Bird Spikes",
    category: "safety-nets",
    categoryName: "Safety Nets",
    title: "Anti-Bird Spikes Installation in Andhra Pradesh | Pigeon Guard Solutions",
    description: "Durable polycarbonate and stainless steel anti-bird spikes for balcony ledges, window sills, and building beams in Andhra Pradesh.",
    longDescription: "Pigeon Guard Solutions offers premium anti-bird spikes installation across Andhra Pradesh to prevent pigeons, crows, and pest birds from perching or nesting on ledges, window sills, parapet walls, and commercial signage. Manufactured with UV-stabilized polycarbonate bases and marine-grade stainless steel spikes, our bird spikes provide a humane, maintenance-free, and long-lasting bird exclusion solution.",
    aiOverview: "Pigeon Guard Anti-Bird Spikes provide a physical perching barrier using UV-stabilized polycarbonate or SS304/SS316 stainless steel blunt spikes. Engineered for balcony ledges, window sills, AC outdoor units, and commercial signboards, they deter pigeons without harming birds.",
    image: "/images/hero/pigeonnet.jpg",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["100% Eco-Friendly & Humane Deterrence", "UV-Stabilized Polycarbonate Base", "Marine-Grade SS304/SS316 Steel Spikes", "Zero Maintenance Required", "Weatherproof & Rustproof Construction", "Ideal for Ledges, AC Units & Signage"],
    specsTable: [
      { label: "Material Base", value: "UV-Stabilized Polycarbonate / Stainless Steel" },
      { label: "Spike Material", value: "SS304 / SS316 Marine Grade Stainless Steel" },
      { label: "Spike Height", value: "110mm to 125mm" },
      { label: "Coverage", value: "Linear strip modules (custom lengths)" },
      { label: "UV Resistance", value: "High (UV-Protected Polycarbonate)" },
      { label: "Rust Resistance", value: "100% Rustproof Stainless Steel" },
      { label: "Maintenance", value: "Zero maintenance required" },
    ],
    faqs: generateFAQsForService("Anti-Bird Spikes", "safety-nets"),
  },

  // Invisible Grills (6 Services)
  "balcony-invisible-grills": {
    slug: "balcony-invisible-grills",
    name: "Balcony Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Balcony Invisible Grills Installation Andhra Pradesh | Pigeon Guard Solutions",
    description: "Rustproof marine-grade SS316 cable grills for balcony security. Enjoy unobstructed panoramic views.",
    longDescription: "Elevate your high-rise balcony security. Our invisible grills utilize pre-tensioned, marine-grade SS316 stainless steel wires wrapped in a clear nylon protective casing. They offer absolute security for children and pets without spoiling the scenic view of your balcony.",
    aiOverview: "Pigeon Guard Balcony Invisible Grills feature high-strength SS316 steel wires wrapped in protective nylon coatings. They replace heavy iron grids to secure balconies for children and pets while preserving unobstructed view layouts.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["99% Unobstructed Views", "SS316 Rustproof Steel Wires", "Anti-scratch Nylon Sheath", "Toddler & Pet Safety", "Easy Fire Escape Option", "Built-in Burglar Alarm Hook (Optional)"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Tension Limit)", value: "400 kg tensile limit rating" },
      { label: "Durability", value: "10+ Years Marine Grade Life" },
      { label: "UV Resistance", value: "High (Nylon UV-protected sheath)" },
      { label: "Rust Resistance", value: "100% Rustproof (Marine grade)" },
      { label: "Maintenance", value: "Wipe with damp microfiber cloth" },
    ],
    faqs: generateFAQsForService("Balcony Invisible Grills", "invisible-grills"),
  },
  "children-invisible-grills": {
    slug: "children-invisible-grills",
    name: "Children Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Children Invisible Grills Installation Andhra Pradesh | Pigeon Guard Solutions",
    description: "Child-proof invisible steel cable grills for high-rise balconies and windows in Andhra Pradesh. High tension SS316 wire barriers for toddler safety.",
    longDescription: "Designed specifically with child safety at the forefront, Pigeon Guard Solutions provides high-density children invisible grills for balconies, windows, and open stairways. Woven with 2.0mm to 2.5mm SS316 marine-grade steel cables spaced at tight 2-inch intervals, these grills prevent toddlers and young children from slipping, climbing, or accidentally falling while keeping panoramic views open.",
    aiOverview: "Pigeon Guard Children Invisible Grills feature high-tensile SS316 marine steel cables wrapped in protective nylon, engineered with 5cm to 7cm spacing to prevent toddler fall risks while preserving architectural views.",
    image: "/images/hero/childrensafetygrill.jpg",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Toddler Fall Prevention", "Tight 2-Inch Wire Spacing", "SS316 Marine-Grade Steel Cables", "Transparent Panoramic View", "No Sharp Edges or Pinch Points", "Quick Emergency Cut Fire Escape Option"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel with Clear Nylon Coating" },
      { label: "Cable Gap", value: "50mm to 75mm (Child-Safe Spacing)" },
      { label: "Tensile Strength", value: "400 kg high tension core" },
      { label: "UV Resistance", value: "High (UV-Protected Nylon Sheath)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Wipe with damp microfiber cloth" },
    ],
    faqs: generateFAQsForService("Children Invisible Grills", "invisible-grills"),
  },
  "pet-invisible-grills": {
    slug: "pet-invisible-grills",
    name: "Pet Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Pet-Proof Invisible Grills Installation Andhra Pradesh | Pigeon Guard Solutions",
    description: "Bite-proof and scratch-resistant SS316 steel wire invisible grills for cats, dogs, and pets in high-rise apartments across Andhra Pradesh.",
    longDescription: "Keep your feline and canine companions safe on high-rise balconies and windows. Pigeon Guard Solutions installs pet-proof invisible grills using heavy-gauge SS316 stainless steel wires wrapped in tough nylon sheath. Unlike fabric netting, steel wire grills cannot be chewed through by dogs or shredded by cat claws, providing ultimate pet security.",
    aiOverview: "Pigeon Guard Pet Invisible Grills provide a bite-proof, scratch-resistant safety barrier for cats and dogs on balconies and windows. Utilizing high-tensile SS316 steel cables anchored in heavy-duty aluminum tracks, they ensure pet fall prevention without obstructing light.",
    image: "/images/hero/pet.jpg",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["100% Bite-Proof & Scratch-Proof", "Prevents High-Rise Pet Falls", "Fine Spacing Stops Kittens & Puppies", "SS316 Marine Stainless Steel Core", "Transparent Aesthetic Views", "Weatherproof & Non-Corrosive"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel Core" },
      { label: "Wire Coating", value: "Bite-Resistant Nylon Casing" },
      { label: "Cable Spacing", value: "50mm (Pet-Proof Gap)" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "100% Marine Grade Rustproof" },
      { label: "Maintenance", value: "Easy wipe cleaning" },
    ],
    faqs: generateFAQsForService("Pet Invisible Grills", "invisible-grills"),
  },
  "window-invisible-grills": {
    slug: "window-invisible-grills",
    name: "Window Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Aesthetic Window Invisible Grills Andhra Pradesh | Pigeon Guard Solutions",
    description: "Replace dark iron bars with modern window invisible steel grills. Admire unobstructed breezes and light.",
    longDescription: "An elegant alternative to traditional iron safety bars. Window invisible grills use vertical or horizontal SS316 steel wires. They offer security from falls and intruders without looking bulky or obstructing ventilation.",
    aiOverview: "Pigeon Guard Window Invisible Grills offer safety without dark prison-like bars. Utilizing thin-profile SS316 wires clamped in aluminum anchor tracks, they optimize lighting and air circulation.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Minimalist Appearance", "Allows Maximum Ventilation", "Zero Paint Peeling or Corrosion", "Safe Fire Escape Exit", "Stainless Steel SS316 Core", "Easy Glass Cleaning Access"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "400 kg cable break limit" },
      { label: "Durability", value: "10+ Years Lifetime" },
      { label: "UV Resistance", value: "High (Coated Sheath)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Dust with micro cloth" },
    ],
    faqs: generateFAQsForService("Window Invisible Grills", "invisible-grills"),
  },
  "staircase-invisible-grills": {
    slug: "staircase-invisible-grills",
    name: "Staircase Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Interior Staircase Handrail Invisible Grills Andhra Pradesh | Pigeon Guard Solutions",
    description: "Secure open banisters and stair handrails with vertical safety steel cables. Sleek indoor security.",
    longDescription: "Stairwells in open-concept duplex villas, malls, and schools present significant height fall hazards. Our vertical invisible grills close up these open spaces cleanly without compromising modern interior designs.",
    aiOverview: "Pigeon Guard Staircase Invisible Grills secure stair railings using sleek vertical SS316 wires. Providing high tension safety for children, they blend seamlessly into premium modern architectural interiors.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Duplex Home Safety", "Aesthetic Vertical Alignment", "Heavy-Duty Cable Tensioning", "Rust-Free Indoor Fittings", "Protects Toddlers & Pets", "Dust-Resistant Coatings"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "400 kg tension limit" },
      { label: "Durability", value: "10+ Years Indoor/Outdoor" },
      { label: "UV Resistance", value: "High (Indoor UV protection)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Damp cloth wipe" },
    ],
    faqs: generateFAQsForService("Staircase Invisible Grills", "invisible-grills"),
  },
  "commercial-invisible-grills": {
    slug: "commercial-invisible-grills",
    name: "Commercial Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Commercial Invisible Grills for Offices & Buildings Andhra Pradesh | Pigeon Guard Solutions",
    description: "Heavy-duty SS316 invisible steel grills for commercial buildings, offices, IT parks, schools, and retail facades in Andhra Pradesh.",
    longDescription: "Pigeon Guard Solutions offers commercial-grade invisible grill installations tailored for corporate offices, IT parks, educational institutions, retail centers, and hospitality venues across Andhra Pradesh. Designed to satisfy strict commercial building safety compliance while maintaining a sleek, modern architectural aesthetic, our SS316 cable grills secure large window facades, glass balconies, atrium railings, and walkways.",
    aiOverview: "Pigeon Guard Commercial Invisible Grills provide high-strength architectural cable barriers for offices, IT parks, shopping centers, and commercial complexes in Andhra Pradesh. Conforming to safety standards, they preserve modern building facade aesthetics.",
    image: "/images/hero/hero_invisible_grill.png",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Architectural Grade SS316 Cables", "B2B Custom Site Installation", "Meets Commercial Safety Compliance", "Sleek Facade Appearance", "High Tension Anti-Intrusion Option", "Durable Heavy-Duty Aluminum Tracks"],
    specsTable: [
      { label: "Material Core", value: "SS316 Marine Grade Stainless Steel" },
      { label: "Track Frame", value: "Heavy-Duty Anodized Aluminum" },
      { label: "Cable Spacing", value: "50mm to 100mm (Custom B2B Spec)" },
      { label: "UV Resistance", value: "High (Commercial Grade)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Periodic tension & anchor inspection" },
    ],
    faqs: generateFAQsForService("Commercial Invisible Grills", "invisible-grills"),
  },

  // Cloth Hangers (2 Services)
  "ceiling-cloth-hangers": {
    slug: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Pulley-operated Ceiling Cloth drying Hangers Andhra Pradesh | Pigeon Guard Solutions",
    description: "Install dual-pipe pulley ceiling cloth drying hangers. Premium space optimization for balconies.",
    longDescription: "Dry clothes effortlessly without cluttering your balcony floor space. Our ceiling-mounted pulley cloth drying systems use a heavy-duty nylon pulley cord and dual stainless steel pipes, allowing you to lower and raise laundry to ceiling height in seconds.",
    aiOverview: "Pigeon Guard Ceiling Cloth Hangers maximize balcony space using a dual-pipe pulley system. Crafted with rust-free stainless steel rods and braided nylon ropes, they lift wet laundry out of sight with ease.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Saves 100% Floor Space", "Independent Dual Pulley Rails", "Premium Stainless Steel Pipes", "Heavy Load Pulley Gears", "Clean Ceiling Aesthetic", "Easy Height Adjustability"],
    specsTable: [
      { label: "Rod Material", value: "SS304 / SS202 Stainless Steel" },
      { label: "Cord Thickness", value: "3.5mm nylon braided rope" },
      { label: "Weight Capacity", value: "25 kg per pipe rating" },
      { label: "Durability", value: "8+ Years Smooth Pulley Life" },
      { label: "UV Resistance", value: "Not Applicable" },
      { label: "Rust Resistance", value: "100% Rust-proof rods" },
      { label: "Maintenance", value: "Keep nylon pulleys lubricated" },
    ],
    faqs: generateFAQsForService("Ceiling Cloth Hangers", "cloth-hangers"),
  },
  "balcony-cloth-hangers": {
    slug: "balcony-cloth-hangers",
    name: "Balcony Cloth Hangers",
    category: "cloth-hangers",
    categoryName: "Cloth Hangers",
    title: "Wall-Mounted & Railing Balcony drying Hangers Andhra Pradesh | Pigeon Guard Solutions",
    description: "Foldable wall-mounted drying systems and railing hooks for apartment balconies. Rustproof finishes.",
    longDescription: "Maximize your balcony utilities. Our wall-mounted balcony hangers fold flat against the wall when not in use. Engineered with premium anti-corrosive coatings to withstand humidity.",
    aiOverview: "Pigeon Guard Balcony Cloth Hangers provide space-efficient drying using wall-mounted accordion grids or railing hooks. Built with rustproof coated steel, they collapse flat to keep balcony spaces clean.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80",
    supportingImages: [],
    gallery: [],
    beforeImage: "",
    afterImage: "",
    benefits: ["Collapses Flat When Empty", "Heavy-Duty Wall Anchors", "Anti-Corrosion Coated", "Ideal for Low Ceilings", "Railing Hook Custom Fit", "Durable Heavy Weight Support"],
    specsTable: [
      { label: "Material", value: "Epoxy/Chrome Coated Steel" },
      { label: "Mechanism", value: "Accordion Folding / Rigid Frame" },
      { label: "Weight Capacity", value: "30 kg total laundry load" },
      { label: "Durability", value: "8+ Years Heavy Use" },
      { label: "UV Resistance", value: "High (Epoxy anti-UV coating)" },
      { label: "Rust Resistance", value: "High (Rust-resistant coating)" },
      { label: "Maintenance", value: "Clean hinge rivets periodically" },
    ],
    faqs: generateFAQsForService("Balcony Cloth Hangers", "cloth-hangers"),
  },
};

// Dynamically override all generic placeholders with Pigeon Guard's real photos
const imageOverrides: Record<string, string> = {
  "balcony-safety-nets": "/images/materials/Balconynetwork.jpeg",
  "children-safety-nets": "/images/services/child.webp",
  "pet-safety-nets": "/images/hero/pet.jpg",
  "pigeon-safety-nets": "/images/hero/pigeonnet.jpg",
  "sports-nets": "/images/materials/BoxCricketnet.jpeg",
  "cricket-practice-nets": "/images/materials/BoxCricketnet.jpeg",
  "construction-safety-nets": "/images/hero/constructionnet.webp",
  "duct-area-safety-nets": "/images/hero/ductarea.webp",
  "monkey-safety-nets": "/images/hero/monkeysafetynet.webp",
  "anti-bird-spikes": "/images/hero/pigeonnet.jpg",
  "balcony-invisible-grills": "/images/services/shyambalconygrills.jpg",
  "children-invisible-grills": "/images/services/shyamchildreninvisiblegrills.jpg",
  "pet-invisible-grills": "/images/services/shyampetinvisiblegrills.jpg",
  "window-invisible-grills": "/images/hero/windowgrill.webp",
  "staircase-invisible-grills": "/images/services/Shayamstaircase-grills.jpg",
  "commercial-invisible-grills": "/images/hero/customgrill.jpg",
  "ceiling-cloth-hangers": "/images/hero/hero_cloth_hanger.png",
  "balcony-cloth-hangers": "/images/materials/clothhangerwork.jpeg",
};

const categoryImages = {
  "safety-nets": [
    "/images/hero/hero_safety_net.png",
    "/images/materials/Balconynetwork.jpeg",
    "/images/services/child.webp",
    "/images/team/team_net_install.png",
    "/images/hero/pigeonnet.jpg",
    "/images/materials/Balconynetwork.jpeg"
  ],
  "invisible-grills": [
    "/images/services/shyambalconygrills.jpg",
    "/images/services/shyamchildreninvisiblegrills.jpg",
    "/images/services/shyampetinvisiblegrills.jpg",
    "/images/services/Shayamstaircase-grills.jpg",
    "/images/hero/hero_invisible_grill.png",
    "/images/hero/windowgrill.webp"
  ],
  "cloth-hangers": [
    "/images/materials/clothhangerwork.jpeg",
    "/images/team/team_hanger_install.png",
    "/images/hero/hero_cloth_hanger.png",
    "/images/materials/clothhangerwork.jpeg",
    "/images/materials/clothhangerwork.jpeg",
    "/images/hero/hero_cloth_hanger.png"
  ]
};

Object.keys(servicesData).forEach((slug) => {
  const service = servicesData[slug];
  const overrideImage = imageOverrides[slug];
  
  if (overrideImage) {
    service.image = overrideImage;
    service.afterImage = overrideImage;
    service.beforeImage = overrideImage;
  }
  
  const cats = categoryImages[service.category as keyof typeof categoryImages] || [];
  const galleryImgs = overrideImage ? [overrideImage, ...cats.filter(img => img !== overrideImage)] : cats;
  
  while(galleryImgs.length < 6) {
    galleryImgs.push(cats[0] || overrideImage || "");
  }
  
  service.supportingImages = galleryImgs.slice(0, 4);
  service.gallery = galleryImgs.slice(0, 6);
});
