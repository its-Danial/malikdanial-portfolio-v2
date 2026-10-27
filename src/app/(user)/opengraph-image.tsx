import { ImageResponse } from "next/og";

import { fetchMyInfo } from "@/sanity/lib/queries";
import { COLORS } from "@/utils/constants";

export const alt = "Malik Danial — portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const { firstName, jobTitle, tagline } = await fetchMyInfo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          backgroundColor: COLORS.background,
          backgroundImage: `radial-gradient(900px at 15% 20%, ${COLORS.glow}59, transparent 70%)`,
          color: COLORS.foreground,
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          {firstName}
        </div>
        <div style={{ marginTop: 16, fontSize: 44, color: COLORS.foreground }}>
          {jobTitle}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 32,
            color: COLORS.mutedForeground,
            maxWidth: 800,
          }}
        >
          {tagline}
        </div>
        <div style={{ marginTop: 64, fontSize: 28, color: COLORS.accent }}>
          malikdanial.xyz
        </div>
      </div>
    ),
    size,
  );
}
