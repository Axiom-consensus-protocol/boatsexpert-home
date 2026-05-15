import type { Metadata } from "next";
import { InStockShop, type StockBoatItem } from "@/components/stock/InStockShop";

export const metadata: Metadata = {
  title: "Boats in Stock | BoatsExpert",
  description:
    "Showroom-ready boats in Otopeni: see, reserve, rig and prepare delivery with the BoatsExpert workshop.",
  alternates: {
    canonical: "/in-stock",
  },
  openGraph: {
    title: "Boats in Stock | BoatsExpert",
    description:
      "Showroom-ready boats in Otopeni: see, reserve, rig and prepare delivery with the BoatsExpert workshop.",
    url: "/in-stock",
    siteName: "BoatsExpert",
    type: "website",
  },
};

type IconName =
  | "anchor"
  | "cart"
  | "filter"
  | "search"
  | "shield"
  | "truck"
  | "wallet"
  | "wrench";

type StockBoat = StockBoatItem;

const stockBoats: StockBoat[] = [
  {
    title: "BENETEAU Antares 6 OB",
    brand: "Beneteau",
    category: "Cruising",
    price: "EUR 44,600",
    tax: "VAT included",
    image: "/assets/stock/beneteau-antares-6-ob.jpg",
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
    title: "Beneteau Antares 7 Comfort Trim Level",
    brand: "Beneteau",
    category: "Cruising",
    price: "EUR 54,002",
    tax: "VAT included",
    image: "/assets/stock/beneteau-antares-7-comfort.jpg",
    href: "/contact",
    sku: "14493",
    status: "Comfort trim",
    badges: ["Beneteau", "Trim level"],
    specs: [
      ["7 class", "Hull"],
      ["Comfort", "Pack"],
      ["Otopeni", "Desk"],
    ],
    note: "Higher comfort configuration for family cruising and protected cockpit use.",
  },
  {
    title: "Beneteau Antares 7 Essential Trim Level",
    brand: "Beneteau",
    category: "Cruising",
    price: "EUR 50,554",
    tax: "VAT included",
    image: "/assets/stock/beneteau-antares-7-essential.jpg",
    href: "/contact",
    sku: "14585",
    status: "Essential trim",
    badges: ["Beneteau", "Essential"],
    specs: [
      ["7 class", "Hull"],
      ["Essential", "Pack"],
      ["Quote", "Ready"],
    ],
    note: "Antares 7 base trim with the same dealer flow: pricing, reserve, paperwork and rigging.",
  },
  {
    title: "Finval 470 Evo DC",
    brand: "Finval",
    category: "Aluminium fishing",
    price: "EUR 22,713",
    tax: "VAT included",
    image: "/assets/stock/finval-470-evo-dc.jpg",
    href: "/boat",
    sku: "UA-BLT47D37H424",
    status: "Dealer pick",
    badges: ["Exclusive", "Garmin-ready"],
    specs: [
      ["4.65 m", "Length"],
      ["40-70 hp", "Engine"],
      ["19 cm", "Draft"],
    ],
    note: "The key shallow-water Finval from stock: welded aluminium, dual console and electronics path.",
  },
  {
    title: "Finval 555 FishPro 2021 year with Mercury 200hp and trailer",
    brand: "Finval",
    category: "Fishing package",
    price: "EUR 48,000",
    tax: "VAT not included",
    image: "/assets/stock/finval-555-fishpro.jpg",
    href: "/contact",
    sku: "finval_555_fishpro_2021",
    status: "Motor + trailer",
    badges: ["Package", "Mercury 200hp"],
    specs: [
      ["5.55 m", "Length"],
      ["200 hp", "Motor"],
      ["Trailer", "Included"],
    ],
    note: "A ready fishing package with motor and trailer, best handled through the sales desk before checkout.",
  },
  {
    title: "FINVAL 475 Evo RC JS (2025)",
    brand: "Finval",
    category: "Aluminium fishing",
    price: "EUR 25,440",
    tax: "VAT included",
    image: "/assets/stock/finval-475-evo-rc-js.jpg",
    href: "/contact",
    sku: "UA-BLT50911A525",
    status: "2025 stock",
    badges: ["New season", "Aluminium"],
    specs: [
      ["4.75 m", "Length"],
      ["RC JS", "Layout"],
      ["2025", "Year"],
    ],
    note: "Current-season Finval hull for anglers who need a precise layout before electronics and motor matching.",
  },
  {
    title: "FurSeal 425 SC Vinyl",
    brand: "FurSeal",
    category: "Aluminium",
    price: "EUR 11,547",
    oldPrice: "EUR 13,814",
    tax: "Sale price",
    image: "/assets/stock/furseal-425-sc-vinyl.jpg",
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
    title: "LANDX X6",
    brand: "LANDX",
    category: "Premium aluminium",
    price: "EUR 80,990",
    oldPrice: "EUR 86,488",
    tax: "Sale price",
    image: "/assets/stock/landx-x6.png",
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
    title: "NorthSilver 585 Fish",
    brand: "NorthSilver",
    category: "Fishing",
    price: "EUR 36,677",
    tax: "VAT included",
    image: "/assets/stock/northsilver-585-fish.jpg",
    href: "/contact",
    sku: "RU-ZSPA0Y95H222",
    status: "In stock",
    badges: ["Fishing", "NorthSilver"],
    specs: [
      ["5.85 m", "Length"],
      ["Fish", "Layout"],
      ["Otopeni", "Stock"],
    ],
    note: "Fishing-focused NorthSilver hull from the original first page of stock results.",
  },
  {
    title: "NorthSilver 585 Fish + Yamaha 150hp",
    brand: "NorthSilver",
    category: "Fishing package",
    price: "EUR 59,500",
    oldPrice: "EUR 65,804",
    tax: "Sale price",
    image: "/assets/stock/northsilver-585-yamaha.png",
    href: "/contact",
    sku: "RU-ZSPA0Y93F222",
    status: "Sale package",
    badges: ["Sale", "Yamaha 150hp"],
    specs: [
      ["5.85 m", "Length"],
      ["150 hp", "Yamaha"],
      ["Package", "Ready"],
    ],
    note: "The second-page discounted package: hull, Yamaha motor and dealer preparation logic.",
  },
  {
    title: "REVAL GRADE CG47",
    brand: "Reval Grade",
    category: "Aluminium",
    price: "EUR 21,803",
    tax: "VAT included",
    image: "/assets/stock/reval-grade-cg47.jpg",
    href: "/contact",
    sku: "EE-VIC47094F323",
    status: "Ready to quote",
    badges: ["Aluminium", "CG47"],
    specs: [
      ["4.70 m", "Class"],
      ["Grade", "Series"],
      ["Quote", "Ready"],
    ],
    note: "Compact Reval aluminium boat kept in the stock department for quick quote and fit-out.",
  },
  {
    title: "RIB GALA ATLANTIS A390Q",
    brand: "GALA",
    category: "RIB",
    price: "EUR 8,613",
    tax: "VAT included",
    image: "/assets/stock/gala-atlantis-a390q.jpg",
    href: "/contact",
    sku: "UA-GALA8935L425",
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
    title: "RIB GALA VIKING V650 FISHING",
    brand: "GALA",
    category: "RIB fishing",
    price: "EUR 30,966",
    tax: "VAT included",
    image: "/assets/stock/gala-viking-v650-fishing.jpg",
    href: "/contact",
    sku: "UA-GALA8934L425",
    status: "Fishing RIB",
    badges: ["RIB", "Fishing"],
    specs: [
      ["6.50 m", "Length"],
      ["Viking", "Line"],
      ["Fishing", "Use"],
    ],
    note: "Fishing-ready GALA RIB for larger water, bigger crew and stronger use-case planning.",
  },
];

const trustItems: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "anchor", title: "Ready hulls", text: "13 boats from the original stock department." },
  { icon: "cart", title: "Shop flow", text: "Price, reserve, add-to-cart style actions and sales desk follow-up." },
  { icon: "wrench", title: "Workshop", text: "Motor, electronics, trailer and handover checked in Otopeni." },
  { icon: "wallet", title: "Financing", text: "Financing options and transparent sales process kept from the original copy." },
  { icon: "truck", title: "Delivery", text: "Romania plus wider European delivery planning." },
  { icon: "shield", title: "Support", text: "Guidance before purchase and full-service support after handover." },
];

const systemLinks = [
  "Batteries for electric motors and boat",
  "Marine accessories",
  "Electric motors for boat",
  "Marine audio",
  "Marine lights",
  "Outboard motors for boat",
  "Quatix smartwatches",
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
      <style data-in-stock-page-style dangerouslySetInnerHTML={{ __html: stockPageCss }} />

      <main className="stock-page">
        <section className="stock-hero">
          <div className="container">
            <div className="stock-crumbs">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/catalog">Boats Catalog</a>
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
                  Built from the original BoatsExpert stock category: 13 real products,
                  prices, sale states, add-to-cart actions, dealer categories, financing,
                  delivery and workshop support.
                </p>
                <div className="stock-hero-actions">
                  <a href="#stock-shop" className="stock-btn stock-btn-primary">
                    Shop 13 boats
                  </a>
                  <a href="/contact" className="stock-btn">
                    Ask sales desk
                  </a>
                </div>
              </div>

              <a className="stock-hero-card" href={heroBoat.href}>
                <img src={heroBoat.image} alt={heroBoat.title} />
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
              <div className="stock-ey">Motorboats for fishing and relaxing with delivery all over Europe</div>
              <h2>
                A stock boat should be <em>easy to choose and safe to buy.</em>
              </h2>
              <p>
                The original category text is the backbone here: boats ready to hit
                the water, available in different sizes and styles, including fishing
                boats, aluminium boats, fiberglass boats and cruising boats.
              </p>
              <p>
                Fishing boats are presented for anglers with rod holders, livewells
                and storage. Aluminium boats stay lightweight and durable for shallow
                water. Fiberglass boats carry the smooth ride and modern design angle,
                while cruising boats focus on comfort for longer journeys.
              </p>
              <p>
                The buying flow is not only product cards: financing options,
                full-service support, transparent sales process and expert guidance are
                part of the section, so the buyer can move from browsing to a real handover.
              </p>
            </div>
            <div className="stock-editorial-panel">
              <span>Dealer support map</span>
              <strong>Selection, reserve, fit-out, delivery.</strong>
              <div className="stock-flow">
                <div><Icon name="search" /><b>Choose</b><small>Stock, price, category</small></div>
                <div><Icon name="cart" /><b>Reserve</b><small>Cart or sales desk</small></div>
                <div><Icon name="wrench" /><b>Prepare</b><small>Motor, sonar, trailer</small></div>
                <div><Icon name="truck" /><b>Deliver</b><small>RO and Europe</small></div>
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
              <a href="/shop">Open shop</a>
            </div>
            <div className="stock-system-grid">
              {systemLinks.map((item) => (
                <a href="/shop" key={item}>
                  <Icon name={item.includes("motor") ? "anchor" : item.includes("Batteries") ? "wallet" : "wrench"} />
                  <span>{item}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const stockPageCss = `
  .stock-page{
    --stock-bg:#FFFCF6;
    --stock-ink:#0A2540;
    --stock-muted:rgba(10,37,64,.62);
    --stock-line:rgba(10,37,64,.14);
    --stock-soft:#F2EEE4;
    --stock-card:#FFFFFF;
    --stock-navy:#071A2C;
    color:var(--stock-ink);
    background:var(--stock-bg);
  }
  .stock-page .container{
    max-width:var(--maxw-wide);
    padding-left:var(--pad-wide);
    padding-right:var(--pad-wide);
  }
  .stock-hero{
    position:relative;
    padding:54px 0 58px;
    background:
      linear-gradient(90deg, rgba(2,9,18,.88), rgba(2,9,18,.62)),
      url("/assets/stock/beneteau-antares-6-ob.jpg") center/cover;
    color:#F4EFE6;
    overflow:hidden;
  }
  .stock-hero::after{
    content:'';
    position:absolute;
    inset:auto 0 0;
    height:1px;
    background:rgba(198,139,61,.65);
  }
  .stock-crumbs{
    position:relative;
    z-index:1;
    display:flex;
    align-items:center;
    gap:10px;
    margin-bottom:38px;
    font-family:var(--mono);
    font-size:10px;
    letter-spacing:.16em;
    text-transform:uppercase;
    color:rgba(244,239,230,.62);
  }
  .stock-crumbs a,
  .stock-crumbs b{
    color:inherit;
    font-weight:500;
  }
  .stock-crumbs b{
    color:#D6A056;
  }
  .stock-hero-grid{
    position:relative;
    z-index:1;
    display:grid;
    grid-template-columns:minmax(0,1fr) 390px 220px;
    gap:22px;
    align-items:stretch;
  }
  .stock-hero-copy{
    align-self:center;
    max-width:850px;
  }
  .stock-ey{
    margin-bottom:16px;
    display:inline-flex;
    align-items:center;
    gap:12px;
    color:#C68B3D;
    font-family:var(--mono);
    font-size:10.5px;
    letter-spacing:.2em;
    line-height:1.35;
    text-transform:uppercase;
  }
  .stock-ey::before{
    content:'';
    width:30px;
    height:1px;
    background:currentColor;
  }
  .stock-hero h1{
    max-width:830px;
    margin:0;
    font-family:var(--display);
    font-weight:400;
    font-size:86px;
    line-height:.9;
    letter-spacing:-.03em;
    color:#F4EFE6;
  }
  .stock-hero h1 em{
    color:#D6A056;
  }
  .stock-hero p{
    max-width:690px;
    margin:22px 0 0;
    font-family:var(--serif);
    font-size:18px;
    line-height:1.55;
    color:rgba(244,239,230,.76);
  }
  .stock-hero-actions{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:30px;
  }
  .stock-btn{
    min-height:48px;
    padding:0 18px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    border:1px solid rgba(244,239,230,.22);
    color:#F4EFE6;
    background:rgba(244,239,230,.06);
    font-family:var(--mono);
    font-size:10px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .stock-btn-primary{
    background:#C68B3D;
    border-color:#C68B3D;
    color:#FFFCF6;
  }
  .stock-hero-card{
    min-height:510px;
    display:flex;
    flex-direction:column;
    border:1px solid rgba(244,239,230,.18);
    background:rgba(7,26,44,.84);
    color:#F4EFE6;
    overflow:hidden;
    box-shadow:0 38px 92px -70px #000;
  }
  .stock-hero-card img{
    width:100%;
    min-height:260px;
    object-fit:cover;
    background:#102B43;
  }
  .stock-hero-card-body{
    flex:1;
    padding:22px;
    display:flex;
    flex-direction:column;
    gap:12px;
  }
  .stock-hero-card-body span{
    color:#D6A056;
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.18em;
    text-transform:uppercase;
  }
  .stock-hero-card-body strong{
    font-family:var(--display);
    font-size:36px;
    line-height:.98;
    font-weight:400;
  }
  .stock-hero-card-body p{
    margin:0;
    font-size:14.5px;
  }
  .stock-hero-card-body div{
    margin-top:auto;
    padding-top:14px;
    border-top:1px solid rgba(244,239,230,.16);
    display:grid;
    gap:4px;
  }
  .stock-hero-card-body b{
    font-family:var(--display);
    font-size:30px;
    font-weight:400;
    color:#D6A056;
  }
  .stock-hero-card-body small{
    color:rgba(244,239,230,.62);
    font-family:var(--mono);
    font-size:9px;
    letter-spacing:.14em;
    text-transform:uppercase;
  }
  .stock-hero-ledger{
    display:grid;
    gap:12px;
  }
  .stock-hero-ledger div{
    min-height:150px;
    padding:20px;
    display:grid;
    align-content:space-between;
    border:1px solid rgba(244,239,230,.16);
    background:rgba(7,26,44,.76);
  }
  .stock-hero-ledger strong{
    font-family:var(--display);
    font-size:64px;
    line-height:.86;
    font-weight:400;
    color:#D6A056;
  }
  .stock-hero-ledger span{
    color:rgba(244,239,230,.66);
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .stock-trust{
    padding:0 0 34px;
    margin-top:-1px;
    background:var(--stock-navy);
  }
  .stock-trust-grid{
    display:grid;
    grid-template-columns:repeat(6,minmax(0,1fr));
    border:1px solid rgba(244,239,230,.14);
    background:rgba(244,239,230,.05);
  }
  .stock-trust-item{
    min-height:170px;
    padding:22px 20px;
    display:flex;
    flex-direction:column;
    gap:10px;
    border-right:1px solid rgba(244,239,230,.12);
    color:#F4EFE6;
  }
  .stock-trust-item:last-child{
    border-right:0;
  }
  .stock-icon{
    width:38px;
    height:38px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    color:#D6A056;
    border:1px solid rgba(214,160,86,.45);
    background:rgba(214,160,86,.08);
  }
  .stock-icon svg{
    width:20px;
    height:20px;
  }
  .stock-trust-item strong{
    font-family:var(--display);
    font-size:24px;
    line-height:1;
    font-weight:400;
  }
  .stock-trust-item p{
    margin:0;
    color:rgba(244,239,230,.66);
    font-family:var(--serif);
    font-size:14px;
    line-height:1.45;
  }
  .stock-shop{
    padding:54px 0 76px;
    background:
      radial-gradient(ellipse at 80% 0%, rgba(198,139,61,.12), transparent 36%),
      linear-gradient(180deg, #FFFCF6 0%, #F2EEE4 100%);
  }
  .stock-shop .container{
    display:grid;
    grid-template-columns:300px minmax(0,1fr);
    gap:28px;
    align-items:start;
  }
  .stock-sidebar{
    position:sticky;
    top:122px;
    display:grid;
    gap:16px;
  }
  .stock-side-card{
    padding:20px;
    border:1px solid var(--stock-line);
    background:rgba(255,255,255,.78);
    box-shadow:0 26px 72px -64px rgba(10,37,64,.6);
  }
  .stock-side-title{
    margin-bottom:16px;
    display:flex;
    align-items:center;
    gap:10px;
    color:var(--stock-ink);
    font-family:var(--mono);
    font-size:10px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .stock-side-title svg{
    width:18px;
    height:18px;
    color:#C68B3D;
  }
  .stock-search label{
    display:grid;
    gap:8px;
  }
  .stock-search label span{
    color:var(--stock-muted);
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.14em;
    text-transform:uppercase;
  }
  .stock-search input,
  .stock-toolbar select{
    width:100%;
    height:44px;
    border:1px solid var(--stock-line);
    background:#fff;
    color:var(--stock-ink);
    padding:0 12px;
    font-family:var(--sans);
    font-size:14px;
  }
  .stock-search button{
    width:100%;
    height:44px;
    margin-top:12px;
    border:0;
    background:#0A2540;
    color:#F4EFE6;
    font-family:var(--mono);
    font-size:10px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .stock-category-list{
    display:grid;
    gap:1px;
    background:var(--stock-line);
    border:1px solid var(--stock-line);
  }
  .stock-category-list a{
    min-height:42px;
    padding:0 12px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:#fff;
    color:var(--stock-ink);
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.12em;
    text-transform:uppercase;
  }
  .stock-category-list a.active{
    background:#0A2540;
    color:#F4EFE6;
  }
  .stock-category-list b{
    color:#C68B3D;
    font-weight:500;
  }
  .stock-filter-list{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
  }
  .stock-filter-list button{
    min-height:38px;
    padding:0 10px;
    display:inline-flex;
    align-items:center;
    gap:8px;
    border:1px solid var(--stock-line);
    background:#fff;
    color:var(--stock-ink);
    font-family:var(--mono);
    font-size:9px;
    letter-spacing:.12em;
    text-transform:uppercase;
    cursor:pointer;
  }
  .stock-filter-list button b{
    color:#C68B3D;
    font-weight:500;
  }
  .stock-filter-list button.active{
    background:#0A2540;
    color:#F4EFE6;
    border-color:#0A2540;
  }
  .stock-filter-list button.active b{
    color:#D6A056;
  }
  .stock-help{
    background:#0A2540;
    color:#F4EFE6;
  }
  .stock-help span{
    color:#D6A056;
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.18em;
    text-transform:uppercase;
  }
  .stock-help strong{
    display:block;
    margin-top:12px;
    font-family:var(--display);
    font-size:30px;
    line-height:1;
    font-weight:400;
  }
  .stock-help p{
    color:rgba(244,239,230,.7);
    font-family:var(--serif);
    line-height:1.45;
  }
  .stock-help a{
    display:inline-flex;
    min-height:42px;
    padding:0 14px;
    align-items:center;
    background:#C68B3D;
    color:#FFFCF6;
    font-family:var(--mono);
    font-size:10px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .stock-results{
    min-width:0;
  }
  .stock-toolbar{
    min-height:72px;
    margin-bottom:18px;
    padding:14px 16px;
    display:flex;
    justify-content:space-between;
    gap:18px;
    align-items:center;
    border:1px solid var(--stock-line);
    background:rgba(255,255,255,.78);
  }
  .stock-toolbar div{
    display:grid;
    gap:4px;
  }
  .stock-toolbar span{
    color:#C68B3D;
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .stock-toolbar strong{
    font-family:var(--display);
    font-size:31px;
    line-height:1;
    font-weight:400;
  }
  .stock-toolbar label{
    width:min(100%,260px);
    display:grid;
    gap:7px;
  }
  .stock-product-grid{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:18px;
  }
  .stock-product{
    display:flex;
    flex-direction:column;
    min-height:660px;
    border:1px solid var(--stock-line);
    background:var(--stock-card);
    box-shadow:0 28px 78px -66px rgba(10,37,64,.62);
    overflow:hidden;
    transition:transform .2s, border-color .2s, box-shadow .2s;
  }
  .stock-product:hover{
    transform:translateY(-4px);
    border-color:rgba(198,139,61,.54);
    box-shadow:0 34px 86px -62px rgba(10,37,64,.74);
  }
  .stock-product-photo{
    position:relative;
    min-height:246px;
    display:block;
    background:#071A2C;
    overflow:hidden;
  }
  .stock-product-photo img{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
    transition:transform .45s ease;
  }
  .stock-product:hover .stock-product-photo img{
    transform:scale(1.035);
  }
  .stock-product-photo::after{
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(180deg, rgba(2,9,18,.05), rgba(2,9,18,.58));
    z-index:1;
  }
  .stock-status,
  .stock-sale{
    position:absolute;
    z-index:2;
    padding:7px 10px;
    background:rgba(244,239,230,.94);
    color:#946421;
    border:1px solid rgba(244,239,230,.7);
    font-family:var(--mono);
    font-size:8.5px;
    letter-spacing:.15em;
    text-transform:uppercase;
  }
  .stock-status{
    left:14px;
    bottom:14px;
  }
  .stock-sale{
    top:14px;
    right:14px;
    background:#C68B3D;
    color:#FFFCF6;
    border-color:#C68B3D;
  }
  .stock-product-body{
    flex:1;
    padding:20px 20px 18px;
    display:flex;
    flex-direction:column;
    gap:12px;
  }
  .stock-product-tags{
    display:flex;
    flex-wrap:wrap;
    gap:6px;
  }
  .stock-product-tags span{
    padding:5px 7px;
    border:1px solid var(--stock-line);
    color:#946421;
    background:#FFFCF6;
    font-family:var(--mono);
    font-size:8px;
    letter-spacing:.14em;
    text-transform:uppercase;
  }
  .stock-brand{
    color:#C68B3D;
    font-family:var(--mono);
    font-size:9px;
    letter-spacing:.18em;
    line-height:1.35;
    text-transform:uppercase;
  }
  .stock-product h2{
    margin:0;
    font-family:var(--display);
    font-weight:400;
    font-size:34px;
    line-height:.98;
    letter-spacing:-.018em;
  }
  .stock-product p{
    margin:0;
    color:var(--stock-muted);
    font-family:var(--serif);
    font-size:14.5px;
    line-height:1.45;
  }
  .stock-product-specs{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:1px;
    border:1px solid var(--stock-line);
    background:var(--stock-line);
  }
  .stock-product-specs span{
    min-height:58px;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:#F8FAFC;
    color:var(--stock-muted);
    font-family:var(--mono);
    font-size:8.5px;
    letter-spacing:.12em;
    text-transform:uppercase;
  }
  .stock-product-specs b{
    margin-bottom:4px;
    color:var(--stock-ink);
    font-family:var(--display);
    font-size:20px;
    line-height:1;
    font-weight:400;
    text-transform:none;
  }
  .stock-product-price{
    margin-top:auto;
    padding-top:14px;
    border-top:1px solid var(--stock-line);
    display:grid;
    gap:4px;
  }
  .stock-product-price del{
    color:rgba(10,37,64,.42);
    font-family:var(--mono);
    font-size:11px;
    letter-spacing:.08em;
  }
  .stock-product-price strong{
    color:var(--stock-ink);
    font-family:var(--display);
    font-size:34px;
    line-height:1;
    font-weight:400;
  }
  .stock-product-price small{
    color:var(--stock-muted);
    font-family:var(--mono);
    font-size:9px;
    letter-spacing:.14em;
    text-transform:uppercase;
  }
  .stock-product-actions{
    display:grid;
    grid-template-columns:1fr auto;
    gap:10px;
  }
  .stock-product-actions a{
    min-height:44px;
    padding:0 13px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    border:1px solid var(--stock-line);
    color:var(--stock-ink);
    background:#FFFCF6;
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.15em;
    text-transform:uppercase;
  }
  .stock-product-actions .stock-add{
    justify-content:flex-start;
    gap:9px;
    background:#0A2540;
    color:#F4EFE6;
    border-color:#0A2540;
  }
  .stock-add svg{
    width:17px;
    height:17px;
  }
  .stock-pagination{
    margin-top:22px;
    display:flex;
    justify-content:flex-end;
    gap:8px;
  }
  .stock-pagination span{
    min-width:38px;
    height:38px;
    padding:0 12px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    border:1px solid var(--stock-line);
    background:#fff;
    color:var(--stock-ink);
    font-family:var(--mono);
    font-size:10px;
    letter-spacing:.12em;
    text-transform:uppercase;
  }
  .stock-pagination .active{
    background:#0A2540;
    color:#F4EFE6;
  }
  .stock-empty{
    grid-column:1 / -1;
    min-height:180px;
    padding:28px;
    display:grid;
    align-content:center;
    gap:8px;
    border:1px solid var(--stock-line);
    background:#fff;
    color:var(--stock-muted);
  }
  .stock-empty b{
    color:var(--stock-ink);
    font-family:var(--display);
    font-size:34px;
    line-height:1;
    font-weight:400;
  }
  .stock-empty span{
    font-family:var(--serif);
    font-size:15px;
    line-height:1.45;
  }
  .stock-editorial{
    padding:78px 0;
    background:#071A2C;
    color:#F4EFE6;
    border-top:1px solid rgba(214,160,86,.45);
  }
  .stock-editorial .container{
    display:grid;
    grid-template-columns:minmax(0,1fr) 430px;
    gap:42px;
    align-items:start;
  }
  .stock-editorial h2,
  .stock-systems h2{
    max-width:960px;
    margin:0;
    font-family:var(--display);
    font-weight:400;
    font-size:64px;
    line-height:.94;
    letter-spacing:-.026em;
  }
  .stock-editorial h2 em,
  .stock-systems h2 em{
    color:#D6A056;
  }
  .stock-editorial p{
    max-width:820px;
    color:rgba(244,239,230,.72);
    font-family:var(--serif);
    font-size:17px;
    line-height:1.58;
  }
  .stock-editorial-panel{
    padding:26px;
    border:1px solid rgba(244,239,230,.16);
    background:rgba(244,239,230,.05);
  }
  .stock-editorial-panel > span{
    color:#D6A056;
    font-family:var(--mono);
    font-size:9.5px;
    letter-spacing:.18em;
    text-transform:uppercase;
  }
  .stock-editorial-panel > strong{
    display:block;
    margin-top:14px;
    font-family:var(--display);
    font-size:38px;
    line-height:1;
    font-weight:400;
  }
  .stock-flow{
    margin-top:24px;
    display:grid;
    gap:1px;
    border:1px solid rgba(244,239,230,.14);
    background:rgba(244,239,230,.14);
  }
  .stock-flow div{
    min-height:84px;
    padding:16px;
    display:grid;
    grid-template-columns:30px 1fr;
    column-gap:12px;
    align-items:center;
    background:#0B2238;
  }
  .stock-flow svg{
    width:24px;
    height:24px;
    color:#D6A056;
    grid-row:span 2;
  }
  .stock-flow b{
    font-family:var(--display);
    font-size:24px;
    line-height:1;
    font-weight:400;
  }
  .stock-flow small{
    color:rgba(244,239,230,.62);
    font-family:var(--mono);
    font-size:9px;
    letter-spacing:.12em;
    text-transform:uppercase;
  }
  .stock-systems{
    padding:72px 0 84px;
    background:#FFFCF6;
  }
  .stock-systems-head{
    margin-bottom:28px;
    display:flex;
    justify-content:space-between;
    align-items:end;
    gap:24px;
  }
  .stock-systems-head h2{
    color:var(--stock-ink);
  }
  .stock-systems-head h2 em{
    color:#946421;
  }
  .stock-systems-head a{
    min-height:44px;
    padding:0 16px;
    display:inline-flex;
    align-items:center;
    border:1px solid var(--stock-line);
    color:var(--stock-ink);
    background:#fff;
    font-family:var(--mono);
    font-size:10px;
    letter-spacing:.16em;
    text-transform:uppercase;
  }
  .stock-system-grid{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:12px;
  }
  .stock-system-grid a{
    min-height:110px;
    padding:18px;
    display:flex;
    align-items:center;
    gap:14px;
    border:1px solid var(--stock-line);
    background:#fff;
    color:var(--stock-ink);
    box-shadow:0 24px 70px -64px rgba(10,37,64,.58);
  }
  .stock-system-grid svg{
    width:26px;
    height:26px;
    color:#C68B3D;
    flex:0 0 auto;
  }
  .stock-system-grid span{
    font-family:var(--display);
    font-size:26px;
    line-height:1;
  }

  html[data-theme="night"] .stock-page{
    --stock-bg:#061827;
    --stock-ink:#F4EFE6;
    --stock-muted:rgba(232,221,201,.68);
    --stock-line:rgba(244,239,230,.15);
    --stock-soft:#071A2C;
    --stock-card:#0B2238;
    background:#061827;
  }
  html[data-theme="night"] .stock-shop{
    background:
      radial-gradient(ellipse at 80% 0%, rgba(214,160,86,.09), transparent 36%),
      linear-gradient(180deg, #071A2C 0%, #061827 100%);
  }
  html[data-theme="night"] .stock-side-card,
  html[data-theme="night"] .stock-toolbar,
  html[data-theme="night"] .stock-product,
  html[data-theme="night"] .stock-systems,
  html[data-theme="night"] .stock-system-grid a{
    background:#0B2238;
    border-color:rgba(244,239,230,.15);
    color:#F4EFE6;
  }
  html[data-theme="night"] .stock-search input,
  html[data-theme="night"] .stock-toolbar select,
  html[data-theme="night"] .stock-category-list a,
  html[data-theme="night"] .stock-filter-list button,
  html[data-theme="night"] .stock-product-tags span,
  html[data-theme="night"] .stock-product-actions a,
  html[data-theme="night"] .stock-pagination span,
  html[data-theme="night"] .stock-empty{
    background:#071A2C;
    border-color:rgba(244,239,230,.15);
    color:#F4EFE6;
  }
  html[data-theme="night"] .stock-category-list,
  html[data-theme="night"] .stock-product-specs{
    background:rgba(244,239,230,.14);
    border-color:rgba(244,239,230,.14);
  }
  html[data-theme="night"] .stock-category-list a.active,
  html[data-theme="night"] .stock-filter-list button.active,
  html[data-theme="night"] .stock-search button,
  html[data-theme="night"] .stock-product-actions .stock-add,
  html[data-theme="night"] .stock-pagination .active{
    background:#C68B3D;
    border-color:#C68B3D;
    color:#FFFCF6;
  }
  html[data-theme="night"] .stock-product-specs span{
    background:rgba(244,239,230,.055);
    color:rgba(232,221,201,.62);
  }
  html[data-theme="night"] .stock-product-specs b,
  html[data-theme="night"] .stock-product-price strong,
  html[data-theme="night"] .stock-toolbar strong,
  html[data-theme="night"] .stock-empty b,
  html[data-theme="night"] .stock-systems-head h2{
    color:#F4EFE6;
  }
  html[data-theme="night"] .stock-product-tags span{
    color:#D6A056;
  }
  html[data-theme="night"] .stock-systems-head h2 em{
    color:#D6A056;
  }

  @media (max-width: 1280px){
    .stock-hero-grid{
      grid-template-columns:minmax(0,1fr) 360px;
    }
    .stock-hero-ledger{
      grid-column:1 / -1;
      grid-template-columns:repeat(3,minmax(0,1fr));
    }
    .stock-trust-grid{
      grid-template-columns:repeat(3,minmax(0,1fr));
    }
    .stock-trust-item:nth-child(3n){
      border-right:0;
    }
    .stock-product-grid{
      grid-template-columns:repeat(2,minmax(0,1fr));
    }
  }
  @media (max-width: 980px){
    .stock-hero-grid,
    .stock-shop .container,
    .stock-editorial .container{
      grid-template-columns:1fr;
    }
    .stock-sidebar{
      position:static;
      grid-template-columns:repeat(2,minmax(0,1fr));
    }
    .stock-help{
      grid-column:1 / -1;
    }
    .stock-hero h1{
      font-size:62px;
    }
    .stock-editorial h2,
    .stock-systems h2{
      font-size:48px;
    }
    .stock-system-grid{
      grid-template-columns:repeat(2,minmax(0,1fr));
    }
  }
  @media (max-width: 640px){
    .stock-hero{
      padding:34px 0 42px;
    }
    .stock-crumbs{
      flex-wrap:wrap;
      margin-bottom:26px;
      font-size:8.5px;
    }
    .stock-hero h1{
      font-size:46px;
      line-height:.94;
    }
    .stock-hero p{
      font-size:15.5px;
    }
    .stock-hero-actions,
    .stock-toolbar,
    .stock-systems-head{
      display:grid;
      align-items:start;
    }
    .stock-btn,
    .stock-toolbar label,
    .stock-systems-head a{
      width:100%;
    }
    .stock-hero-card{
      min-height:0;
    }
    .stock-hero-ledger,
    .stock-trust-grid,
    .stock-product-grid,
    .stock-system-grid{
      grid-template-columns:1fr;
    }
    .stock-sidebar{
      position:sticky;
      top:74px;
      z-index:46;
      max-height:46vh;
      display:grid;
      grid-template-columns:1fr;
      gap:0;
      overflow:auto;
      overscroll-behavior:contain;
      border:1px solid var(--stock-line);
      background:rgba(255,252,246,.96);
      box-shadow:0 20px 54px -42px rgba(10,37,64,.72);
      backdrop-filter:blur(16px) saturate(135%);
      -webkit-backdrop-filter:blur(16px) saturate(135%);
    }
    .stock-sidebar .stock-side-card{
      border:0;
      border-bottom:1px solid var(--stock-line);
      box-shadow:none;
      background:transparent;
    }
    .stock-sidebar .stock-help{
      display:none;
    }
    .stock-filter-list{
      flex-wrap:nowrap;
      overflow-x:auto;
      padding-bottom:1px;
      scrollbar-width:none;
    }
    .stock-filter-list::-webkit-scrollbar{
      display:none;
    }
    .stock-filter-list button{
      flex:0 0 auto;
      border-radius:999px;
      white-space:nowrap;
    }
    .stock-trust-item{
      min-height:0;
      border-right:0;
      border-bottom:1px solid rgba(244,239,230,.12);
    }
    .stock-product{
      min-height:0;
    }
    .stock-product-photo{
      min-height:230px;
    }
    .stock-product-specs{
      grid-template-columns:1fr;
    }
    .stock-product-actions{
      grid-template-columns:1fr;
    }
    .stock-editorial h2,
    .stock-systems h2{
      font-size:38px;
    }
  }
`;
