"use client";

import { DevLinkProvider } from "@/webflow/DevLinkProvider";
import { Layout } from "@/webflow/Layout";
import { SideNav } from "@/webflow/SideNav";
import { TopNav } from "@/webflow/TopNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <DevLinkProvider>
      <Layout
        sidebar={<SideNav />}
        topnav={<TopNav />}
        main={children}
      />
    </DevLinkProvider>
  );
}
