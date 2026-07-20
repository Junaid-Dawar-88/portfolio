import type { Metadata } from "next";
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
  title: "Junaid Iqbal — Full Stack Developer",
  description:
    "Full stack developer in Peshawar, Pakistan. Building fast, type-safe web, desktop, and mobile applications with Next.js, Node.js, Prisma, and PostgreSQL.",
  openGraph: {
    title: "Junaid Iqbal — Full Stack Developer",
    description:
      "Building fast, type-safe web, desktop, and mobile applications.",
    type: "website",
  },
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
        <Header />
        {children}
      </body>
    </html>
  );
}
