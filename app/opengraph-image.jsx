import { ImageResponse } from "next/og";

// Dimensions as required by og:image spec
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Erick Xavier — Full-Stack Engineer · AI/ML · Cybersecurity";

/**
 * /opengraph-image
 *
 * Generated at build time via Next.js Edge Runtime.
 * Referenced in layout.js metadata.openGraph.images and metadata.twitter.images.
 */
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0D0F14",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow blobs — purely decorative */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(108,99,255,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "200px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,170,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Code bracket accent */}
        <div
          style={{
            display: "flex",
            color: "#6C63FF",
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "24px",
            letterSpacing: "0.05em",
          }}
        >
          {"</>"}
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: 800,
            color: "#F0F2F8",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Erick Xavier
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "28px",
            color: "#7A8099",
            fontFamily: "monospace",
            marginBottom: "40px",
          }}
        >
          Full-Stack Engineer · AI/ML · Cybersecurity
        </div>

        {/* Divider */}
        <div
          style={{
            width: "64px",
            height: "3px",
            background: "#6C63FF",
            marginBottom: "32px",
            borderRadius: "2px",
          }}
        />

        {/* Status badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            background: "rgba(108,99,255,0.12)",
            border: "1px solid rgba(108,99,255,0.35)",
            borderRadius: "999px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00D4AA",
            }}
          />
          <span style={{ color: "#00D4AA", fontSize: "16px", fontFamily: "monospace" }}>
            CTO @ IEDC Amrita · MCA AI &amp; Data Science
          </span>
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "18px",
            color: "#1E2330",
            fontFamily: "monospace",
          }}
        >
          erickxavier.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
