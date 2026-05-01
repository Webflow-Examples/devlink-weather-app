"use client";
import React from "react";
import { InteractionsProvider } from "./webflow_modules/interactions";
import { createIX2Engine } from "./webflow_modules/devlink";
import type { FontsManifest } from "./webflow_modules/types";
import { useInjectFonts } from "./webflow_modules/useInjectFonts";
import fontsManifest from "./webflow_modules/fonts.manifest.json";

export type RenderLink = React.FC<{
  href: string;
  target?: "_self" | "_blank";
  preload?: "none" | "prefetch" | "prerender";
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLAnchorElement>;
}>;

export type RenderImage = React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
>;

export const DevLinkContext = React.createContext<{
  renderLink?: RenderLink;
  renderImage?: RenderImage;
}>({});

type DevLinkProviderProps = {
  renderLink?: RenderLink;
  renderImage?: RenderImage;
  children: React.ReactNode;
};

export const DevLinkProvider: React.FC<DevLinkProviderProps> = ({
  children,
  ...context
}) => {
  useInjectFonts(fontsManifest as FontsManifest);
  return (
    <DevLinkContext.Provider value={context}>
      <InteractionsProvider createEngine={createIX2Engine}>
        {children}
      </InteractionsProvider>
    </DevLinkContext.Provider>
  );
};
