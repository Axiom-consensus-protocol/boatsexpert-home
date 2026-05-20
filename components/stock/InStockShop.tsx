"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type StockBoatItem = {
  title: string;
  brand: string;
  category: string;
  price: string;
  oldPrice?: string;
  tax: string;
  image: string;
  href: string;
  sku: string;
  status: string;
  badges: string[];
  specs: Array<[string, string]>;
  note: string;
};

type StockFilter = "all" | "sale" | `brand:${string}` | `category:${string}`;
type StockIconName = "cart" | "filter" | "search";
type StockSort = "default" | "price-low" | "price-high" | "sale";

function StockIcon({ name }: { name: StockIconName }) {
  const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "cart") {
    return (
      <svg {...base}>
        <path d="M3 4h2l2.5 12h10.8l2-8H6" />
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
      </svg>
    );
  }

  if (name === "filter") {
    return (
      <svg {...base}>
        <path d="M4 6h16" />
        <path d="M7 12h10" />
        <path d="M10 18h4" />
      </svg>
    );
  }

  return (
    <svg {...base}>
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l4 4" />
    </svg>
  );
}

function priceNumber(value: string) {
  return (
    Number.parseFloat(
      value
        .replace(/[^\d.,]/g, "")
        .replace(/,(?=\d{3}\b)/g, "")
        .replace(",", "."),
    ) || 0
  );
}

export function InStockShop({ boats }: { boats: StockBoatItem[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<StockFilter>("all");
  const [sort, setSort] = useState<StockSort>("default");

  const filterOptions = useMemo(() => {
    const count = (predicate: (boat: StockBoatItem) => boolean) => boats.filter(predicate).length;
    const options: Array<{ key: StockFilter; label: string; count: number }> = [
      { key: "all", label: "All boats", count: boats.length },
      { key: "sale", label: "Sale", count: count((boat) => Boolean(boat.oldPrice)) },
      {
        key: "brand:Cruise Series",
        label: "Cruise Series",
        count: count((boat) => boat.brand === "Cruise Series"),
      },
      {
        key: "brand:Pro Angler",
        label: "Pro Angler",
        count: count((boat) => boat.brand === "Pro Angler"),
      },
      {
        key: "brand:Atlas RIB",
        label: "Atlas RIB",
        count: count((boat) => boat.brand === "Atlas RIB"),
      },
      {
        key: "brand:Silver Hull",
        label: "Silver Hull",
        count: count((boat) => boat.brand === "Silver Hull"),
      },
      {
        key: "category:Aluminium",
        label: "Aluminium",
        count: count((boat) => /aluminium/i.test(boat.category)),
      },
      {
        key: "category:Cruising",
        label: "Cruising",
        count: count((boat) => /cruising/i.test(boat.category)),
      },
      {
        key: "category:Fishing",
        label: "Fishing",
        count: count((boat) => /fish/i.test(boat.category + " " + boat.title)),
      },
      {
        key: "category:RIB",
        label: "RIB",
        count: count((boat) => /rib/i.test(boat.category + " " + boat.title)),
      },
    ];

    return options.filter((item) => item.count > 0 || item.key === "all");
  }, [boats]);

  const filteredBoats = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const visible = boats.filter((boat) => {
      const haystack = [
        boat.title,
        boat.brand,
        boat.category,
        boat.status,
        boat.price,
        boat.tax,
        boat.note,
        boat.badges.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      if (normalizedQuery && !haystack.includes(normalizedQuery)) return false;
      if (filter === "sale") return Boolean(boat.oldPrice);
      if (filter.startsWith("brand:")) return boat.brand === filter.slice(6);
      if (filter.startsWith("category:")) return haystack.includes(filter.slice(9).toLowerCase());
      return true;
    });

    return [...visible].sort((a, b) => {
      if (sort === "price-low") return priceNumber(a.price) - priceNumber(b.price);
      if (sort === "price-high") return priceNumber(b.price) - priceNumber(a.price);
      if (sort === "sale") return Number(Boolean(b.oldPrice)) - Number(Boolean(a.oldPrice));
      return boats.indexOf(a) - boats.indexOf(b);
    });
  }, [boats, filter, query, sort]);

  const activeLabel = filterOptions.find((item) => item.key === filter)?.label || "All boats";

  return (
    <section className="stock-shop" id="stock-shop">
      <div className="container">
        <aside className="stock-sidebar" aria-label="Stock filters">
          <div className="stock-side-card stock-search">
            <div className="stock-side-title">
              <StockIcon name="search" />
              <span>Search stock</span>
            </div>
            <label>
              <span>Search...</span>
              <input
                type="search"
                placeholder="Pro Angler, Cruise Series, RIB..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setFilter("all");
                setSort("default");
              }}
            >
              Reset filters
            </button>
          </div>

          <div className="stock-side-card stock-filter-card">
            <div className="stock-side-title">
              <StockIcon name="filter" />
              <span>Sticky stock filters</span>
            </div>
            <div className="stock-filter-list" aria-label="Filter boats in stock">
              {filterOptions.map((item) => (
                <button
                  className={item.key === filter ? "active" : ""}
                  type="button"
                  key={item.key}
                  aria-pressed={item.key === filter}
                  onClick={() => setFilter(item.key)}
                >
                  <span>{item.label}</span>
                  <b>{item.count}</b>
                </button>
              ))}
            </div>
          </div>

          <div className="stock-side-card stock-help">
            <span>Source category</span>
            <strong>13 Axiom Marine stock products.</strong>
            <p>
              Filters are generated from the visible stock cards: brand, sale state, category and
              search terms all update the product grid.
            </p>
            <Link href="/contact">Contact sales</Link>
          </div>
        </aside>

        <div className="stock-results">
          <div className="stock-toolbar">
            <div>
              <span>
                Showing {filteredBoats.length ? `1-${filteredBoats.length}` : "0"} of {boats.length}{" "}
                results
              </span>
              <strong>{activeLabel}</strong>
            </div>
            <label>
              <span>Sort by</span>
              <select value={sort} onChange={(event) => setSort(event.target.value as StockSort)}>
                <option value="default">Default sorting</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
                <option value="sale">Sale first</option>
              </select>
            </label>
          </div>

          <div className="stock-product-grid">
            {filteredBoats.map((boat) => (
              <article className="stock-product" key={boat.sku}>
                <a className="stock-product-photo" href={boat.href}>
                  <Image
                    src={boat.image}
                    alt={boat.title}
                    width={654}
                    height={525}
                    sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="stock-status">{boat.status}</span>
                  {boat.oldPrice ? <span className="stock-sale">Sale</span> : null}
                </a>
                <div className="stock-product-body">
                  <div className="stock-product-tags">
                    {boat.badges.map((badge) => (
                      <span key={`${boat.sku}-${badge}`}>{badge}</span>
                    ))}
                  </div>
                  <span className="stock-brand">
                    {boat.brand} - {boat.category}
                  </span>
                  <h2>{boat.title}</h2>
                  <p>{boat.note}</p>
                  <div className="stock-product-specs">
                    {boat.specs.map(([value, label]) => (
                      <span key={`${boat.sku}-${label}`}>
                        <b>{value}</b>
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="stock-product-price">
                    {boat.oldPrice ? <del>{boat.oldPrice}</del> : null}
                    <strong>{boat.price}</strong>
                    <small>{boat.tax}</small>
                  </div>
                  <div className="stock-product-actions">
                    <Link href="/cart" className="stock-add">
                      <StockIcon name="cart" />
                      Add to cart
                    </Link>
                    <a href={boat.href}>Details</a>
                  </div>
                </div>
              </article>
            ))}
            {filteredBoats.length === 0 ? (
              <div className="stock-empty">
                <b>No stock boat matches this filter.</b>
                <span>
                  Clear search or choose another brand/category from the sticky filter bar.
                </span>
              </div>
            ) : null}
          </div>

          <div className="stock-pagination" aria-label="Stock pages">
            <span className="active">1</span>
            <span>2</span>
            <span>Next</span>
          </div>
        </div>
      </div>
    </section>
  );
}
