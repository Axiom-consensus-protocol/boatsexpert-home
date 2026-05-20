import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Axiom Marine",
    short_name: "Axiom Marine",
    description:
      "Demo dealer site: marine catalog, in-stock boats, equipment shop and workshop service under one roof.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EFE6",
    theme_color: "#0A2540",
    icons: [
      {
        src: "/assets/logo/logo-brass.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
