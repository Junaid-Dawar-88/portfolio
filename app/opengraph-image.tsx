import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/* The card shown when the site is shared on WhatsApp, LinkedIn, X, Slack… */
export const alt = "Junaid Iqbal — Freelance Web, App & E-commerce Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tags = ["E-commerce", "Web apps", "Mobile apps", "Business tools", "Next.js"];

export default async function OpengraphImage() {
  const poster = await readFile(join(process.cwd(), "public/junaid-iqbal.png"));
  const src = `data:image/png;base64,${poster.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#080b16",
          color: "#f2f4f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#33d9a6", letterSpacing: 4 }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#33d9a6" }} />
            AVAILABLE FOR FREELANCE PROJECTS
          </div>
          <div style={{ marginTop: 28, fontSize: 92, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>
            Junaid Iqbal
          </div>
          <div style={{ marginTop: 18, fontSize: 40, color: "#5b7cfa" }}>Freelance Web & App Developer</div>
          <div style={{ marginTop: 22, fontSize: 26, color: "#a3abc0", lineHeight: 1.4 }}>
            Online stores, web apps and mobile apps for small businesses — fast, reliable, on time.
          </div>
          <div style={{ marginTop: 34, display: "flex", flexWrap: "wrap", gap: 10 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 22,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid #2a3350",
                  color: "#d4d9e6",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={src} width={630} height={630} alt="" style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
