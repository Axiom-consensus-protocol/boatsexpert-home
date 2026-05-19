import { ImageResponse } from "next/og";

export const alt = "Axiom Marine - official dealer of boats and marine equipment for SMB";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const cardSections = ["Boats Catalog", "Boats in Stock", "Shop Online", "Service"];

export default function OpenGraphImage() {
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 74% 18%, rgba(214,160,86,.34), transparent 30%), radial-gradient(circle at 24% 68%, rgba(8,168,215,.18), transparent 34%), linear-gradient(135deg, #020912 0%, #061827 48%, #0A2540 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -120,
            bottom: 58,
            width: 820,
            height: 180,
            borderTop: "2px solid rgba(244,239,230,.24)",
            transform: "skewX(-18deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 92,
            bottom: 96,
            width: 560,
            height: 78,
            borderBottom: "7px solid #D6A056",
            borderLeft: "2px solid rgba(244,239,230,.42)",
            transform: "skewX(-21deg)",
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
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 94,
                  height: 94,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(244,239,230,.35)",
                  background: "rgba(244,239,230,.07)",
                  color: "#F4EFE6",
                  fontSize: 35,
                  fontWeight: 800,
                  letterSpacing: -1,
                }}
              >
                BE
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#FFFFFF", fontSize: 42, fontWeight: 800, lineHeight: 1 }}>
                  Axiom Marine
                </div>
                <div
                  style={{
                    marginTop: 8,
                    color: "#D6A056",
                    fontSize: 15,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                  }}
                >
                  Official dealer
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div
                style={{
                  color: "#D6A056",
                  fontSize: 18,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                }}
              >
                Demo location
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
                Boats, equipment, tuning and service under one roof
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 790, marginTop: 4 }}>
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
              Axiom Marine
            </div>
            <div
              style={{
                marginTop: 22,
                color: "#F4EFE6",
                fontSize: 41,
                lineHeight: 1.08,
                fontWeight: 700,
                maxWidth: 740,
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
              marine.axiomprotocol.org
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
