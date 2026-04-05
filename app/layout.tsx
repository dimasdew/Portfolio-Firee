import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firee — Decentralized Marketplace",
  description: "The era of decentralized marketplace. Buy and sell with blockchain transparency.",
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
