import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iitbSportDisplay = localFont({
  src: "./fonts/IITBSport-Display.woff2",
  variable: "--font-iitb-display",
  weight: "800",
});

const iitbSportHeading = localFont({
  src: "./fonts/IITBSport-Heading.woff2",
  variable: "--font-iitb-heading",
  weight: "600",
});

const iitbSportText = localFont({
  src: "./fonts/IITBSport-Text.woff2",
  variable: "--font-iitb-display-text", // renamed to avoid conflict if any
  weight: "400",
});

const iitbSportMono = localFont({
  src: "./fonts/IITBSport-Mono.woff2",
  variable: "--font-iitb-mono",
  weight: "700",
});

const iitbSportCaption = localFont({
  src: "./fonts/IITBSport-Caption.woff2",
  variable: "--font-iitb-caption",
  weight: "300",
});

export const metadata: Metadata = {
  title: "IITB Sports | Athletes Only",
  description: "IIT Bombay Sports — Powering 10,000+ students across 40+ disciplines since 1958.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`
      ${iitbSportDisplay.variable} 
      ${iitbSportHeading.variable} 
      ${iitbSportText.variable} 
      ${iitbSportMono.variable} 
      ${iitbSportCaption.variable}
    `}>
      <body className="antialiased">
        {/* Global Noise + Grain Texture Layer */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }} />
        {children}
      </body>
    </html>
  );
}
