import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import "@/styles/globals.css";
import { CursorGlow } from "@/components/CursorGlow";
import { SiteFooter } from "@/components/Footer";
import { SiteHeader } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: {
    default: "Shukrael Mohammed | Futuristic Full-Stack Developer Portfolio",
    template: "%s | Shukrael Mohammed"
  },
  description:
    "A futuristic full-stack developer portfolio with premium motion, cinematic lighting, neon glass UI, and polished product storytelling.",
  openGraph: {
    title: "Shukrael Mohammed | Futuristic Full-Stack Developer Portfolio",
    description:
      "A futuristic full-stack developer portfolio with premium motion, cinematic lighting, neon glass UI, and polished product storytelling.",
    type: "website"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

const themeInitializerScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("theme");
    const theme = storedTheme === "light" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  } catch {}
})();
`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={`${sans.variable} ${display.variable}`} lang="en" suppressHydrationWarning>
      <body className="bg-[var(--background)] font-sans antialiased text-[var(--foreground)]">
        <Script id="theme-initializer" strategy="beforeInteractive">
          {themeInitializerScript}
        </Script>
        <div className="relative isolate min-h-screen">
          <ScrollProgress />
          <CursorGlow />
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at top, var(--glow-a), transparent 34%), radial-gradient(circle at 80% 18%, var(--glow-b), transparent 28%), radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
              backgroundSize: "100% 100%, 100% 100%, 44px 44px"
            }}
          />
          <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
