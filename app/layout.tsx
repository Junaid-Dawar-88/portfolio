import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "./header/header";
import { profile } from "./lib/data";

/* Display — geometric and wide, used for names and section titles */
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

/* Editorial accent — one italic word per heading, never body copy */
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

/* Body */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Utility — eyebrows, labels, data */
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://junaid-dawar-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: `${profile.name} — ${profile.role}`,
  description:
    "Full stack developer in Peshawar, Pakistan. Multi-tenant SaaS, tRPC APIs and Prisma schemas on Next.js, React and PostgreSQL.",
  keywords: [
    "Junaid Iqbal",
    "full stack developer",
    "Next.js developer",
    "React developer",
    "tRPC",
    "Prisma",
    "PostgreSQL",
    "Peshawar",
    "Pakistan",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "Multi-tenant SaaS, tRPC APIs and Prisma schemas on Next.js, React and PostgreSQL.",
    url: SITE,
    siteName: profile.name,
    type: "website",
    images: [{ url: profile.photo, width: 640, height: 640, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Multi-tenant SaaS, tRPC APIs and Prisma schemas on Next.js, React and PostgreSQL.",
    images: [profile.photo],
  },
  alternates: { canonical: SITE },
};

/* Declared up front so the browser themes its own chrome — scrollbars,
   form controls, the initial canvas — before the first paint. */
export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08070c" },
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${instrument.variable} ${inter.variable} ${jetbrains.variable} grain antialiased`}
      >
        {/* Applies the stored theme before first paint so there's no flash.
            Dark is the default, so only light needs a class. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme:light)').matches)){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-iris focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-(--on-accent)"
        >
          Skip to content
        </a>

        <Header />
        {children}
      </body>
    </html>
  );
}
