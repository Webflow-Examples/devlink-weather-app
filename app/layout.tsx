import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/webflow/css/global.css";

import "./globals.css";
import { AppShell } from "./AppShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Weather",
  description: "Webflow DevLink weather reference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
