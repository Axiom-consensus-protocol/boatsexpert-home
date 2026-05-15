import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Boats Expert - official dealer of boats and marine equipment in Romania";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const publicPath = (...parts: string[]) => join(process.cwd(), "public", ...parts);
const asset = async (mime: string, ...parts: string[]) => {
  const data = await readFile(publicPath(...parts));
  return `data:${mime};base64,${data.toString("base64")}`;
};

const heroPromise = asset("image/jpeg", "assets", "boats", "hero-DSC07340-1.jpg");
const logoPromise = asset("image/svg+xml", "assets", "logo", "logo-white.svg");
const cardSections = ["Boats Catalog", "Boats in Stock", "Shop Online", "Service"];

export default async function OpenGraphImage() {
  const [hero, logo] = await Promise.all([heroPromise, logoPromise]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#061827",
          color: "#F4EFE6",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <img
          src={hero}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.46,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(6,24,39,.99) 0%, rgba(6,24,39,.9) 46%, rgba(6,24,39,.28) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 420,
            height: 630,
            background: "linear-gradient(180deg, rgba(198,139,61,.34), rgba(198,139,61,0))",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 64,
            top: 58,
            width: 318,
            height: 512,
            border: "1px solid rgba(244,239,230,.26)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 96,
            top: 92,
            width: 254,
            height: 438,
            border: "1px solid rgba(198,139,61,.75)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            padding: "52px 70px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img src={logo} alt="Boats Expert" style={{ width: 182, height: 112, objectFit: "contain" }} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div
                style={{
                  color: "#D6A056",
                  fontSize: 18,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                }}
              >
                Otopeni, Romania
              </div>
              <div
                style={{
                  marginTop: 10,
                  width: 430,
                  color: "rgba(244,239,230,.74)",
                  fontSize: 25,
                  lineHeight: 1.12,
                  textAlign: "right",
                }}
              >
                Official dealer of boats and marine equipment in Romania
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 760, marginTop: 4 }}>
            <div
              style={{
                display: "flex",
                width: 124,
                height: 7,
                background: "#C68B3D",
                marginBottom: 28,
              }}
            />
            <div
              style={{
                color: "#FFFFFF",
                fontSize: 112,
                lineHeight: 0.9,
                fontWeight: 800,
                letterSpacing: 0,
              }}
            >
              Boats Expert
            </div>
            <div
              style={{
                marginTop: 22,
                color: "#F4EFE6",
                fontSize: 41,
                lineHeight: 1.08,
                fontWeight: 700,
                maxWidth: 700,
              }}
            >
              Official dealer of boats and marine equipment
            </div>
            <div
              style={{
                marginTop: 22,
                color: "#D6A056",
                fontSize: 26,
                lineHeight: 1.18,
                letterSpacing: 2,
                textTransform: "uppercase",
                maxWidth: 680,
              }}
            >
              The adventure on water begins here
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: 10,
            }}
          >
            <div style={{ display: "flex", gap: 12 }}>
              {cardSections.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 42,
                    padding: "0 18px",
                    border: "1px solid rgba(244,239,230,.24)",
                    background: "rgba(6,24,39,.72)",
                    color: "#F4EFE6",
                    fontSize: 18,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                color: "#D6A056",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              boatsexpert.com
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
