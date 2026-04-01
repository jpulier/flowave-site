import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Flowave – AI-Native Lead Generation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Flowave
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 28,
            color: "#00d4ff",
            letterSpacing: "0.05em",
          }}
        >
          AI-Native Lead Generation
        </div>
      </div>
    ),
    { ...size }
  );
}
