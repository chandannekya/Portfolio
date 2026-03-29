import type { Metadata } from "next";
import { Press_Start_2P, Share_Tech_Mono, Inter } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chandan Nekya | Protocol 2.0 // Full-Stack System Architect",
  description:
    "Portfolio of Chandan Nekya. Building resilient systems and shipping high-impact products. Expertise in AI Agent infrastructure, microservices, and modern frontend architecture.",
  keywords: ["Chandan Nekya", "Full-Stack Engineer", "AI Agent Platform", "Microservices Architect", "Next.js 15", "Distributed Systems"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pressStart.variable} ${shareTechMono.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased select-none selection:bg-steel/30 selection:text-white">
        {/* Persistent Premium Overlays */}
        <div className="grain-overlay" />
        <div className="scanline-overlay" />
        
        {children}
      </body>
    </html>
  );
}
