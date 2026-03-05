import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import "@/styles/globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: {
    default: "Aarav Mehta | Senior Software Engineer",
    template: "%s | Aarav Mehta"
  },
  description:
    "Elite software engineer portfolio built with Next.js, showcasing modern product engineering, UI craftsmanship, and scalable architecture.",
  openGraph: {
    title: "Aarav Mehta | Senior Software Engineer",
    description:
      "Elite software engineer portfolio built with Next.js, showcasing modern product engineering, UI craftsmanship, and scalable architecture.",
    type: "website"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={`${sans.variable} ${display.variable}`} lang="en">
      <body className="font-sans antialiased">
        <div className="relative">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-dot-grid [background-size:24px_24px] opacity-[0.2]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
