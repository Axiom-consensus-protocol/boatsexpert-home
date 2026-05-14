import path from "node:path";
import type { NextConfig } from "next";

const LEGACY_REDIRECTS: { from: string; to: string }[] = [
  { from: "/index.html", to: "/" },
  { from: "/Boat.html", to: "/boat" },
  { from: "/boat.html", to: "/boat" },
  { from: "/Catalog.html", to: "/catalog" },
  { from: "/catalog.html", to: "/catalog" },
  { from: "/Product.html", to: "/product" },
  { from: "/product.html", to: "/product" },
  { from: "/Shop.html", to: "/shop" },
  { from: "/shop.html", to: "/shop" },
  { from: "/cart.html", to: "/cart" },
  { from: "/contact.html", to: "/contact" },
  { from: "/services.html", to: "/services" },
  { from: "/contact-us", to: "/contact" },
  { from: "/cart-2", to: "/cart" },
  { from: "/checkout-2", to: "/checkout" },
  { from: "/my-account-2", to: "/my-account" },
  { from: "/cart-3", to: "/cart" },
  { from: "/checkout-3", to: "/checkout" },
  { from: "/my-account-3", to: "/my-account" },
  { from: "/shop-ro", to: "/shop" },
  { from: "/blog-ro", to: "/blog" },
  { from: "/ro", to: "/" },
  { from: "/ro/contact-us", to: "/contact" },
  { from: "/ro/shop-ro", to: "/shop" },
  { from: "/ro/cart-3", to: "/cart" },
  { from: "/ro/checkout-3", to: "/checkout" },
  { from: "/ro/my-account-3", to: "/my-account" },
  { from: "/ro/blog-ro", to: "/blog" },
  { from: "/ro/politica-de-retur", to: "/return-policy" },
  { from: "/ro/politica-de-confidentialitate", to: "/privacy-policy" },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Pin Turbopack's workspace root explicitly. Without this, Turbopack walks up
  // the tree past /home/user/Desktop/Boatexpert/v3 looking for a manifest and
  // mis-infers the project root, breaking compilation.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  async redirects() {
    return LEGACY_REDIRECTS.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
