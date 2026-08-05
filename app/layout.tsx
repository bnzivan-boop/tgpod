import type { Metadata, Viewport } from "next";
import { Michroma, Archivo, JetBrains_Mono } from "next/font/google";
import { meta } from "@/lib/content";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Cursor } from "@/components/layout/Cursor";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-michroma",
  adjustFontFallback: false,
  fallback: ["Archivo", "system-ui", "sans-serif"],
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    type: "website",
    images: [{ url: "/media/og-image.jpg", width: 1500, height: 1674 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050605",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${michroma.variable} ${archivo.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
