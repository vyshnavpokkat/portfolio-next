import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";
export const alt = `${portfolio.name} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f7f6f2",
        color: "#252620",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
      }}
    >
      <div
        style={{ fontSize: 23, letterSpacing: 4, marginBottom: 40 }}
      >{`${portfolio.name.toUpperCase()} / SOFTWARE ENGINEER`}</div>
      <div style={{ fontFamily: "serif", fontSize: 78 }}>Thoughtful code.</div>
      <div
        style={{
          fontFamily: "serif",
          fontSize: 78,
          color: "#343d79",
          fontStyle: "italic",
        }}
      >
        Human experiences.
      </div>
      <div
        style={{ fontSize: 22, marginTop: 48 }}
      >{`Frontend development · ${portfolio.location}`}</div>
    </div>,
    size,
  );
}
