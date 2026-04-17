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
        {children}
      </body>
    </html>
  );
}
