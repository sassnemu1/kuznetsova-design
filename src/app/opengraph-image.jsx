import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#15151a",
          backgroundImage:
            "radial-gradient(circle at 75% 25%, rgba(56,100,219,0.35), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 18,
          }}
        >
          <span style={{ fontSize: 96, color: "#f2f2ee", fontFamily: "serif" }}>
            Kuznetsova
          </span>
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 800,
            color: "#3864db",
            letterSpacing: -2,
            marginTop: 4,
          }}
        >
          DESIGN.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "rgba(242,242,238,0.6)",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Brand Identity · Web Development · 3D
        </div>
      </div>
    ),
    { ...size }
  );
}
