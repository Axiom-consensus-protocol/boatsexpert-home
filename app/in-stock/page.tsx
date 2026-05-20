import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InStockShop, type StockBoatItem } from "@/components/stock/InStockShop";
import { defaultOgImage } from "@/lib/og";
import "./in-stock.css";

export const metadata: Metadata = {
  title: "Boats in Stock | Axiom Marine",
  description:
    "Showroom-ready boats in demo: see, reserve, rig and prepare delivery with the Axiom Marine workshop.",
  alternates: {
    canonical: "/in-stock",
  },
  openGraph: {
    title: "Boats in Stock | Axiom Marine",
    description:
      "Showroom-ready boats in demo: see, reserve, rig and prepare delivery with the Axiom Marine workshop.",
    url: "/in-stock",
    siteName: "Axiom Marine",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boats in Stock | Axiom Marine",
    description:
      "Showroom-ready boats in demo: see, reserve, rig and prepare delivery with the Axiom Marine workshop.",
    images: [defaultOgImage.url],
  },
};

type IconName = "anchor" | "cart" | "filter" | "search" | "shield" | "truck" | "wallet" | "wrench";

type StockBoat = StockBoatItem;

const stockBoats: StockBoat[] = [
  {
    title: "Cruise Series 6 OB",
    brand: "Cruise Series",
    category: "Cruising",
    price: "EUR 44,600",
    tax: "VAT included",
    image: "/assets/stock/cruise-6-ob.jpg",
    href: "/contact",
    sku: "21722",
    status: "Showroom ready",
    badges: ["Cabin boat", "Ready now"],
    specs: [
      ["6.50 m", "Length"],
      ["Outboard", "Engine"],
      ["Comfort", "Use"],
    ],
    note: "Compact weekend cruiser from the original stock category, ready for viewing and handover planning.",
  },
  {
    title: "Cruise Series 7 Trim Level",
    brand: "Cruise Series",
    category: "Cruising",
    price: "EUR 54,002",
    tax: "VAT included",
    image: "/assets/stock/cruise-7-comfort.jpg",
    href: "/contact",
    sku: "14493",
    status: "Comfort trim",
    badges: ["Cruise Series", "Trim level"],
    specs: [
      ["7 class", "Hull"],
      ["Comfort", "Pack"],
      ["demo", "Desk"],
    ],
    note: "Higher comfort configuration for family cruising and protected cockpit use.",
  },
  {
    title: "Cruise Series 7 Essential Trim Level",
    brand: "Cruise Series",
    category: "Cruising",
    price: "EUR 50,554",
    tax: "VAT included",
    image: "/assets/stock/cruise-7-essential.jpg",
    href: "/contact",
    sku: "14585",
    status: "Essential trim",
    badges: ["Cruise Series", "Essential"],
    specs: [
      ["7 class", "Hull"],
      ["Essential", "Pack"],
      ["Quote", "Ready"],
    ],
    note: "Antares 7 base trim with the same dealer flow: pricing, reserve, paperwork and rigging.",
  },
  {
    title: "Pro Angler 470 Evo DC",
    brand: "Pro Angler",
    category: "Aluminium fishing",
    price: "EUR 22,713",
    tax: "VAT included",
    image: "/assets/stock/pro-angler-470-dc.jpg",
    href: "/boat",
    sku: "UA-BLT47D37H424",
    status: "Dealer pick",
    badges: ["Exclusive", "Marine Nav-ready"],
    specs: [
      ["4.65 m", "Length"],
      ["40-70 hp", "Engine"],
      ["19 cm", "Draft"],
    ],
    note: "The key shallow-water Pro Angler from stock: welded aluminium, dual console and electronics path.",
  },
  {
    title: "Pro Angler 555 FishPro 2021 year with Outboard M 200hp and trailer",
    brand: "Pro Angler",
    category: "Fishing package",
    price: "EUR 48,000",
    tax: "VAT not included",
    image: "/assets/stock/pro-angler-555.jpg",
    href: "/contact",
    sku: "pro-angler-555-fishpro-2021",
    status: "Motor + trailer",
    badges: ["Package", "Outboard M 200hp"],
    specs: [
      ["5.55 m", "Length"],
      ["200 hp", "Motor"],
      ["Trailer", "Included"],
    ],
    note: "A ready fishing package with motor and trailer, best handled through the sales desk before checkout.",
  },
  {
    title: "Pro Angler 475 Evo RC JS (2025)",
    brand: "Pro Angler",
    category: "Aluminium fishing",
    price: "EUR 25,440",
    tax: "VAT included",
    image: "/assets/stock/pro-angler-475-rc.jpg",
    href: "/contact",
    sku: "UA-BLT50911A525",
    status: "2025 stock",
    badges: ["New season", "Aluminium"],
    specs: [
      ["4.75 m", "Length"],
      ["RC JS", "Layout"],
      ["2025", "Year"],
    ],
    note: "Current-season Pro Angler hull for anglers who need a precise layout before electronics and motor matching.",
  },
  {
    title: "Inflatable 425 SC",
    brand: "Inflatable Marine",
    category: "Aluminium",
    price: "EUR 11,547",
    oldPrice: "EUR 13,814",
    tax: "Sale price",
    image: "/assets/stock/inflatable-425-sc.jpg",
    href: "/contact",
    sku: "UA-FRS00106K222",
    status: "Sale",
    badges: ["Sale", "Small boat"],
    specs: [
      ["4.25 m", "Length"],
      ["SC", "Console"],
      ["Vinyl", "Finish"],
    ],
    note: "Sale-positioned compact boat for fast purchase decisions and simple fit-out.",
  },
  {
    title: "Trailer X X6",
    brand: "Trailer X",
    category: "Premium aluminium",
    price: "EUR 80,990",
    oldPrice: "EUR 86,488",
    tax: "Sale price",
    image: "/assets/stock/trailer-x6.png",
    href: "/contact",
    sku: "EE-VICX6107C424",
    status: "Sale",
    badges: ["Sale", "Premium"],
    specs: [
      ["X6", "Model"],
      ["Aluminium", "Hull"],
      ["Dealer", "Support"],
    ],
    note: "Premium aluminium stock item with a visible discount and dealer support path.",
  },
  {
    title: "Silver Hull 585 Fish",
    brand: "Silver Hull",
    category: "Fishing",
    price: "EUR 36,677",
    tax: "VAT included",
    image: "/assets/stock/silver-585-fish.jpg",
    href: "/contact",
    sku: "RU-ZSPA0Y95H222",
    status: "In stock",
    badges: ["Fishing", "Silver Hull"],
    specs: [
      ["5.85 m", "Length"],
      ["Fish", "Layout"],
      ["demo", "Stock"],
    ],
    note: "Fishing-focused Silver Hull hull from the original first page of stock results.",
  },
  {
    title: "Silver Hull 585 Fish + Outboard Y 150hp",
    brand: "Silver Hull",
    category: "Fishing package",
    price: "EUR 59,500",
    oldPrice: "EUR 65,804",
    tax: "Sale price",
    image: "/assets/stock/silver-585-rig.png",
    href: "/contact",
    sku: "RU-ZSPA0Y93F222",
    status: "Sale package",
    badges: ["Sale", "Outboard Y 150hp"],
    specs: [
      ["5.85 m", "Length"],
      ["150 hp", "Outboard Y"],
      ["Package", "Ready"],
    ],
    note: "The second-page discounted package: hull, Outboard Y motor and dealer preparation logic.",
  },
  {
    title: "Reef Line CG47",
    brand: "Reef Line",
    category: "Aluminium",
    price: "EUR 21,803",
    tax: "VAT included",
    image: "/assets/stock/reef-cg47.jpg",
    href: "/contact",
    sku: "EE-VIC47094F323",
    status: "Ready to quote",
    badges: ["Aluminium", "CG47"],
    specs: [
      ["4.70 m", "Class"],
      ["Grade", "Series"],
      ["Quote", "Ready"],
    ],
    note: "Compact Reef Line aluminium boat kept in the stock department for quick quote and fit-out.",
  },
  {
    title: "RIB Atlas RIB ATLANTIS A390Q",
    brand: "Atlas RIB",
    category: "RIB",
    price: "EUR 8,613",
    tax: "VAT included",
    image: "/assets/stock/atlas-a390q.jpg",
    href: "/contact",
    sku: "UA-ATR8935L425",
    status: "RIB stock",
    badges: ["RIB", "Compact"],
    specs: [
      ["3.90 m", "Length"],
      ["Atlantis", "Line"],
      ["A390Q", "Model"],
    ],
    note: "Compact RIB option for customers who need something fast, stable and trailer-friendly.",
  },
  {
    title: "RIB Atlas RIB VIKING V650 FISHING",
    brand: "Atlas RIB",
    category: "RIB fishing",
    price: "EUR 30,966",
    tax: "VAT included",
    image: "/assets/stock/atlas-v650.jpg",
    href: "/contact",
    sku: "UA-ATR8934L425",
    status: "Fishing RIB",
    badges: ["RIB", "Fishing"],
    specs: [
      ["6.50 m", "Length"],
      ["Viking", "Line"],
      ["Fishing", "Use"],
    ],
    note: "Fishing-ready Atlas RIB for larger water, bigger crew and stronger use-case planning.",
  },
];

const trustItems: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "anchor", title: "Ready hulls", text: "13 boats from the original stock department." },
  {
    icon: "cart",
    title: "Shop flow",
    text: "Price, reserve, add-to-cart style actions and sales desk follow-up.",
  },
  {
    icon: "wrench",
    title: "Workshop",
    text: "Motor, electronics, trailer and handover checked in demo.",
  },
  {
    icon: "wallet",
    title: "Financing",
    text: "Financing options and transparent sales process kept from the original copy.",
  },
  { icon: "truck", title: "Delivery", text: "Demo region plus wider European delivery planning." },
  {
    icon: "shield",
    title: "Support",
    text: "Guidance before purchase and full-service support after handover.",
  },
];

const systemLinks = [
  "Batteries for electric motors and boat",
  "Marine accessories",
  "Electric motors for boat",
  "Marine audio",
  "Marine lights",
  "Outboard motors for boat",
  "Marine smartwatches",
  "Mounts for boat",
  "Sonars for boat",
];

function Icon({ name }: { name: IconName }) {
  const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "anchor":
      return (
        <svg {...base}>
          <path d="M12 3v14" />
          <path d="M8 7h8" />
          <path d="M6 12H4a8 8 0 0 0 16 0h-2" />
          <path d="M9 17l3 4 3-4" />
        </svg>
      );
    case "cart":
      return (
        <svg {...base}>
          <path d="M3 4h2l2.5 12h10.8l2-8H6" />
          <circle cx="9" cy="20" r="1.4" />
          <circle cx="18" cy="20" r="1.4" />
        </svg>
      );
    case "filter":
      return (
        <svg {...base}>
          <path d="M4 6h16" />
          <path d="M7 12h10" />
          <path d="M10 18h4" />
        </svg>
      );
    case "search":
      return (
        <svg {...base}>
          <circle cx="11" cy="11" r="6" />
          <path d="M16 16l4 4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...base}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "truck":
      return (
        <svg {...base}>
          <path d="M3 7h11v9H3z" />
          <path d="M14 10h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="1.5" />
          <circle cx="18" cy="18" r="1.5" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...base}>
          <path d="M4 7h15a2 2 0 0 1 2 2v9H4a2 2 0 0 1-2-2V5a2 2 0 0 0 2 2z" />
          <path d="M16 13h5" />
          <path d="M6 7l10-3" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...base}>
          <path d="M14.7 6.3a4 4 0 0 0 5 5L11 20l-4-4 8.7-8.7z" />
          <path d="M7 16l-3 3" />
        </svg>
      );
  }
}

export default function InStockPage() {
  const heroBoat = stockBoats[3];
  const saleCount = stockBoats.filter((boat) => boat.oldPrice).length;

  return (
    <>
      <main className="stock-page">
        <section className="stock-hero">
          <div className="container">
            <div className="stock-crumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/catalog">Boats Catalog</Link>
              <span>/</span>
              <b>Boats in Stock</b>
            </div>

            <div className="stock-hero-grid">
              <div className="stock-hero-copy">
                <div className="stock-ey">Original shop department - boats in stock</div>
                <h1>
                  Boats in stock, <em>ready to hit the water.</em>
                </h1>
                <p>
                  Built from the original Axiom Marine stock category: 13 real products, prices,
                  sale states, add-to-cart actions, dealer categories, financing, delivery and
                  workshop support.
                </p>
                <div className="stock-hero-actions">
                  <a href="#stock-shop" className="stock-btn stock-btn-primary">
                    Shop 13 boats
                  </a>
                  <Link href="/contact" className="stock-btn">
                    Ask sales desk
                  </Link>
                </div>
              </div>

              <a className="stock-hero-card" href={heroBoat.href}>
                <Image
                  src={heroBoat.image}
                  alt={heroBoat.title}
                  width={900}
                  height={620}
                  priority
                  sizes="(max-width: 900px) 100vw, 420px"
                />
                <div className="stock-hero-card-body">
                  <span>{heroBoat.status}</span>
                  <strong>{heroBoat.title}</strong>
                  <p>{heroBoat.note}</p>
                  <div>
                    <b>{heroBoat.price}</b>
                    <small>{heroBoat.tax}</small>
                  </div>
                </div>
              </a>

              <div className="stock-hero-ledger">
                <div>
                  <strong>13</strong>
                  <span>boats in stock</span>
                </div>
                <div>
                  <strong>{saleCount}</strong>
                  <span>sale offers</span>
                </div>
                <div>
                  <strong>2</strong>
                  <span>result pages on original</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InStockShop boats={stockBoats} />

        <section className="stock-trust">
          <div className="container">
            <div className="stock-trust-grid">
              {trustItems.map((item) => (
                <div className="stock-trust-item" key={item.title}>
                  <span className="stock-icon">
                    <Icon name={item.icon} />
                  </span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stock-editorial">
          <div className="container">
            <div className="stock-editorial-copy">
              <div className="stock-ey">
                Motorboats for fishing and relaxing with delivery all over Europe
              </div>
              <h2>
                A stock boat should be <em>easy to choose and safe to buy.</em>
              </h2>
              <p>
                The original category text is the backbone here: boats ready to hit the water,
                available in different sizes and styles, including fishing boats, aluminium boats,
                fiberglass boats and cruising boats.
              </p>
              <p>
                Fishing boats are presented for anglers with rod holders, livewells and storage.
                Aluminium boats stay lightweight and durable for shallow water. Fiberglass boats
                carry the smooth ride and modern design angle, while cruising boats focus on comfort
                for longer journeys.
              </p>
              <p>
                The buying flow is not only product cards: financing options, full-service support,
                transparent sales process and expert guidance are part of the section, so the buyer
                can move from browsing to a real handover.
              </p>
            </div>
            <div className="stock-editorial-panel">
              <span>Dealer support map</span>
              <strong>Selection, reserve, fit-out, delivery.</strong>
              <div className="stock-flow">
                <div>
                  <Icon name="search" />
                  <b>Choose</b>
                  <small>Stock, price, category</small>
                </div>
                <div>
                  <Icon name="cart" />
                  <b>Reserve</b>
                  <small>Cart or sales desk</small>
                </div>
                <div>
                  <Icon name="wrench" />
                  <b>Prepare</b>
                  <small>Motor, sonar, trailer</small>
                </div>
                <div>
                  <Icon name="truck" />
                  <b>Deliver</b>
                  <small>RO and Europe</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stock-systems">
          <div className="container">
            <div className="stock-systems-head">
              <div>
                <div className="stock-ey">Do not forget the connected shop systems</div>
                <h2>
                  The stock boat needs <em>equipment around it.</em>
                </h2>
              </div>
              <Link href="/shop">Open shop</Link>
            </div>
            <div className="stock-system-grid">
              {systemLinks.map((item) => (
                <Link href="/shop" key={item}>
                  <Icon
                    name={
                      item.includes("motor")
                        ? "anchor"
                        : item.includes("Batteries")
                          ? "wallet"
                          : "wrench"
                    }
                  />
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
