import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/webflow/css/global.css";

import "./globals.css";
import { DevLinkFontTags } from "@/webflow/webflow_modules/DevLinkFontTags";
import { DevLinkProvider } from "@/webflow/DevLinkProvider";
import { Layout } from "@/webflow/Layout";
import { SideNav } from "@/webflow/SideNav";
import { TopNav } from "@/webflow/TopNav";

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
      <head>
        <DevLinkFontTags/>
      </head>
      <body className={inter.className}>
        <DevLinkProvider>
          <Layout
            sidebar={<SideNav />}
            topnav={<TopNav />}
            main={children}
          />
        </DevLinkProvider>
      </body>
    </html>
  );
}
