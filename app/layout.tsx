import type { Metadata, Viewport } from "next";
import { SITE_URL, site } from "./lib/site";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header/header";

/* Display — characterful grotesque, used only for names and section titles */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080b16" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
  ],
};

/* Structured data, so search engines know this site is a person's portfolio. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: site.name,
      jobTitle: "Full Stack Developer",
      url: SITE_URL,
      image: `${SITE_URL}${site.image}`,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Peshawar", addressCountry: "PK" },
      sameAs: [site.github, site.linkedin],
      knowsAbout: site.skills,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
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
        className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-jade focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--on-jade)]"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
