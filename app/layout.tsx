import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandan Nekya — Full-Stack Engineer",
  description:
    "Portfolio of Chandan Nekya, a full-stack engineer focused on scalable systems, AI agents, and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
