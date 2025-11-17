import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import "@/styles/globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

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
    default: "Shukrael Mohammed | Full-Stack Developer",
    template: "%s | Shukrael Mohammed"
  },
  description:
    "Full-stack developer portfolio showcasing modern web applications, clean UI craftsmanship, scalable backend systems, and thoughtful product engineering.",
  openGraph: {
    title: "Shukrael Mohammed | Full-Stack Developer",
    description:
      "Full-stack developer portfolio showcasing modern web applications, clean UI craftsmanship, scalable backend systems, and thoughtful product engineering.",
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
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : systemPrefersDark
          ? "dark"
          : "light";
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  } catch {}
})();
`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={`${sans.variable} ${display.variable}`} lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Script id="theme-initializer" strategy="beforeInteractive">
          {themeInitializerScript}
        </Script>
        <div className="relative">
          <ScrollProgress />
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
              backgroundSize: "44px 44px"
            }}
          />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
