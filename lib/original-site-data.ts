export type OriginalCard = {
  title: string;
  kicker?: string;
  text: string;
  href?: string;
  meta?: string;
};

export type OriginalSection = {
  title: string;
  text: string[];
  items?: string[];
};

export function legacySlugToTitle(slug: string) {
  return slug
    .replace(/-ro$/i, "")
    .replace(/_/g, "-")
    .split("-")
    .filter(Boolean)
    .map((part) => {
      const upper = part.toUpperCase();
      if (["dc", "sc", "rib", "gps", "hd", "hc", "pro", "xl"].includes(part)) return upper;
      if (/^\d/.test(part)) return upper;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

export function normalizeLegacySlug(slug: string) {
  const map: Record<string, string> = {
    "aluminium-boats-ro": "aluminium-boats",
    "barci-rib": "rib-boats",
    "beneteau-ro": "beneteau",
    "big-foot": "big-foot",
    "cruising-boats-ro": "cruising-boats",
    "expert-tuning-barci-de-pescuit": "expert-tuning-of-angler-boats",
    "fiberglass-boats-ro": "fiberglass-boats",
    "finval-ro": "finval",
    "fishing-boats-ro": "fishing-boats",
    "gala-atlantis-ro": "gala-atlantis",
    "gala-challenger-ro": "gala-challenger",
    "gala-freestyle-ro": "gala-freestyle",
    "gala-ro": "gala-atlantis",
    "gala-sprinter-ro": "gala-sprinter",
    "gala-viking-ro": "gala-viking",
    "galaxy-pro-rib-ro": "galaxy-pro-rib",
    "landx-ro": "landx",
    "montaj-motor-outboard": "outboard-engine-installation",
    "northsilver-expedition-ro": "northsilver-expedition",
    "northsilver-fish-ro": "northsilver-fish",
    "northsilver-pro-ro": "northsilver-pro",
    "peridocuri-ro": "boat-trailer",
    "respo-peridocuri": "respo-trailers",
    "reval-grade-ro": "reval-grade",
    "tuning-service": "tuning-service",
  };

  return map[slug] || slug.replace(/-ro$/i, "");
}

export const originalServicePages: Record<string, {
  title: string;
  eyebrow: string;
  lead: string;
  source: string;
  cards: OriginalCard[];
  sections: OriginalSection[];
}> = {
  "registration-driving": {
    title: "Registration & Driving Courses",
    eyebrow: "Original service page",
    lead: "A desk-led route for registration paperwork, registration support, insurance referrals and skipper-course guidance, so the customer can move from purchase to legal use without chasing offices.",
    source: "https://marine.axiomprotocol.org/services/registration-driving/",
    cards: [
      { title: "registration paperwork", text: "Registration files, required documents and next steps are prepared as one service flow." },
      { title: "Driving courses", text: "Skipper licence and training guidance is connected to the sales and service desk." },
      { title: "Insurance referrals", text: "The original service path includes referrals and practical handover support." },
    ],
    sections: [
      {
        title: "What this service covers",
        text: [
          "Boat registration, required documents, licence guidance and post-purchase administration are handled as a practical workflow.",
          "The goal is simple: the customer leaves with a clear legal route, not only a boat invoice.",
        ],
        items: ["Registration support", "Skipper-course guidance", "Insurance referrals", "Dealer document trail"],
      },
    ],
  },
  "tuning-service": {
    title: "Tuning & Service",
    eyebrow: "Original service page",
    lead: "Workshop service for maintenance, tuning, electrical fit-out, winterising and practical support around boats that already work on Demo water.",
    source: "https://marine.axiomprotocol.org/services/tuning-service/",
    cards: [
      { title: "Boat service", text: "Hull, motor and equipment checks are handled by the same demo workshop." },
      { title: "Electrical fit-out", text: "Power, chargers, electronics and accessories are matched to the hull and use case." },
      { title: "Season prep", text: "Winterising and re-launch checks keep the boat ready between seasons." },
    ],
    sections: [
      {
        title: "Workshop scope",
        text: [
          "The original service area positions tuning and service as an ongoing ownership desk, not a one-time sale.",
          "It covers practical work around engines, wiring, equipment, accessories and seasonal care.",
        ],
        items: ["Tuning", "Service", "Electrical work", "Winterising", "Pickup coordination"],
      },
    ],
  },
  "expert-tuning-of-angler-boats": {
    title: "Expert Tuning of Angler Boats",
    eyebrow: "Original service page",
    lead: "Fishing boat tuning focused on casting decks, livewells, trolling motor prep, sonar positions, rod storage and the details that matter to serious anglers.",
    source: "https://marine.axiomprotocol.org/services/expert-tuning-of-angler-boats/",
    cards: [
      { title: "Fishing layout", text: "Decks, livewells, storage and working space are planned around real angling use." },
      { title: "Trolling prep", text: "Bow motors, battery capacity and controls are matched before installation." },
      { title: "Sonar planning", text: "Displays, transducers and cable routes are arranged as part of the fit-out." },
    ],
    sections: [
      {
        title: "Angler boat build logic",
        text: [
          "The original page makes this a specialist service for fishing platforms, not generic accessory installation.",
          "The service connects hull layout, electronics, power, livewell and storage choices into one build plan.",
        ],
        items: ["Casting platforms", "Livewells", "Rod storage", "Trolling motor prep", "Sonar and display layout"],
      },
    ],
  },
  "outboard-engine-installation": {
    title: "Outboard Engine Installation",
    eyebrow: "Original service page",
    lead: "Outboard installation for Yamaha, Mercury, Honda and Tohatsu, including rigging, steering, prop advice and calibration through the demo workshop.",
    source: "https://marine.axiomprotocol.org/services/outboard-engine-installation/",
    cards: [
      { title: "Engine fitting", text: "Outboards are mounted, rigged and checked as workshop work, not just boxed retail." },
      { title: "Steering and controls", text: "Hydraulic steering, controls and cable paths are sized for the boat." },
      { title: "Prop and setup", text: "Propeller advice and practical calibration support are part of the handover." },
    ],
    sections: [
      {
        title: "Install path",
        text: [
          "The original service positions outboard installation as a complete setup: engine, steering, rigging, prop, electronics interface and test plan.",
          "It belongs close to both the boat catalog and the equipment shop, because purchase decisions change the installation.",
        ],
        items: ["Yamaha", "Mercury", "Honda", "Tohatsu", "Hydraulic steering", "Prop matching"],
      },
    ],
  },
};

export const originalBlogPosts: OriginalCard[] = [
  {
    title: "Galaxy Professional RIBs",
    kicker: "RIBs",
    text: "Original English article covering the Galaxy professional RIB line and its commercial-use positioning.",
    href: "https://marine.axiomprotocol.org/2024/02/03/galaxy-professional-ribs/",
    meta: "2024-02-03",
  },
  {
    title: "Fishing and Outdoor Expo 2024 Arad",
    kicker: "Main News",
    text: "Event/news post connected to Axiom Marine presence at the Fishing and Outdoor Expo in Arad.",
    href: "https://marine.axiomprotocol.org/2024/02/23/fishing-and-outdoor-expo-2024-arad/",
    meta: "2024-02-23",
  },
  {
    title: "The Bucharest International Boat Show",
    kicker: "Main News",
    text: "Original event post for the Bucharest International Boat Show.",
    href: "https://marine.axiomprotocol.org/2024/04/08/the-bucharest-international-boat-show/",
    meta: "2024-04-08",
  },
  {
    title: "Pana 50% reducere la echipamentele Garmin",
    kicker: "RO promo",
    text: "Demo Garmin promotion post from the original blog archive.",
    href: "https://marine.axiomprotocol.org/ro/2023/06/20/pana-50-reducere-la-echipamentele-garmin/",
    meta: "2023-06-20",
  },
  {
    title: "15% reducere pe barci FurSeal",
    kicker: "RO promo",
    text: "Demo FurSeal boat promotion from the original archive.",
    href: "https://marine.axiomprotocol.org/ro/2023/07/21/15-reducere-pe-barci-furseal/",
    meta: "2023-07-21",
  },
  {
    title: "Salonul Nautic International Bucuresti",
    kicker: "RO event",
    text: "Demo archive of the Bucharest boat show event post.",
    href: "https://marine.axiomprotocol.org/ro/2024/04/08/salonul-nautic-international-bucuresti/",
    meta: "2024-04-08",
  },
];

export const originalBlogCategories = [
  "Main News",
  "RIBs",
  "Tuning Reviews",
  "Toate",
];

export const originalProductCategoryGroups = [
  {
    title: "Batteries",
    items: ["Green Cell batteries", "OPTIMA batteries", "REBELCELL batteries", "REBELCELL chargers", "Ultimatron batteries"],
  },
  {
    title: "Boats and motors",
    items: ["Boats in stock", "Outboard motors", "Honda", "Yamaha", "Power-lift JackPlate", "Electric motors", "Garmin Motors", "Minn Kota", "Motor Guide"],
  },
  {
    title: "Electronics and navigation",
    items: ["Navigation equipment", "Sonars", "Garmin sonars", "Humminbird", "Special Offers GARMIN", "Quatix smartwatches"],
  },
  {
    title: "Deck, mounts and accessories",
    items: ["Marine accessories", "Marinac", "Osculati", "T-H Marine", "Mounts", "BoatBuckle", "KED Mounts", "RAM MOUNTS", "Smart Vision", "Stronger"],
  },
  {
    title: "Light, audio and steering",
    items: ["Marine audio", "Marine lights", "Osculati lights", "RIGID INDUSTRIES", "Hydraulic Steering System"],
  },
];

export const originalProductTags = [
  "echomap",
  "garmin",
  "gpsmap",
  "livescope",
  "quatix",
  "smartwatches",
  "sonars",
  "trolling motor",
  "ultra",
  "worldwide",
];

export const originalBodyTypes = [
  "Aluminium boats",
  "Boat trailer",
  "Cruising boats",
  "Fiberglass boats",
  "Fishing boats",
  "RIB boats",
];

export const originalBrands = [
  "Beneteau",
  "Big Foot",
  "Finval",
  "GALA Atlantis",
  "GALA Challenger",
  "GALA Freestyle",
  "GALA Sprinter",
  "GALA Viking",
  "GALAXY Pro RIB",
  "LANDX",
  "NorthSilver Expedition",
  "NorthSilver Fish",
  "NorthSilver Pro",
  "RESPO Trailers",
  "Reval Grade",
];

export const returnPolicySections: OriginalSection[] = [
  {
    title: "Delivery",
    text: ["Orders are processed through the shop and large products such as boats or trailers require coordinated delivery instead of standard parcel logic."],
    items: ["Delivery time", "Order processing", "Delivery costs", "Large-product delivery", "Additional charges", "Delay handling"],
  },
  {
    title: "Returns",
    text: ["The return policy separates standard products from items that cannot be returned after custom work, special installation or use-specific preparation."],
    items: ["Return conditions", "Products excluded from return", "Return procedure", "Return shipping costs"],
  },
  {
    title: "Refunds and problems",
    text: ["Refund handling and incorrectly delivered or defective products are treated as separate support cases."],
    items: ["Refunds", "Defective products", "Incorrectly delivered products"],
  },
];

export const privacyPolicySections: OriginalSection[] = [
  {
    title: "Data controller and collected data",
    text: ["The privacy policy explains who Axiom Marine is, what customer data is collected and how that data is collected through orders, forms, inquiries and newsletter flows."],
    items: ["Who we are", "What data we collect", "How we collect data"],
  },
  {
    title: "Use and legal basis",
    text: ["The policy covers why data is used, the legal basis for processing, order handling, payments, customer service and product inquiries."],
    items: ["Why data is used", "Legal basis", "Orders and payments", "Customer service", "Product inquiries"],
  },
  {
    title: "Marketing, cookies and sharing",
    text: ["Newsletter communication, cookies, third-party services, external links and data sharing are documented as part of the original privacy page."],
    items: ["Newsletter", "Cookies", "Third-party services", "External links", "International transfers"],
  },
  {
    title: "Retention and rights",
    text: ["The original policy also covers retention time, user rights, data security, children's privacy, updates to the policy and contact routes."],
    items: ["Retention", "User rights", "Data security", "Children's privacy", "Policy changes", "Contact"],
  },
];
