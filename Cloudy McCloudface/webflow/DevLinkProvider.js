"use client";
import React from "react";
import { InteractionsProvider } from "./webflow_modules/interactions";
import { createIX2Engine } from "./webflow_modules/devlink";
import { useInjectFonts } from "./webflow_modules/useInjectFonts";
import fontsManifest from "./webflow_modules/fonts.manifest.json";
export const DevLinkContext = React.createContext({});
export const DevLinkProvider = ({ children, ...context }) => {
  useInjectFonts(fontsManifest);
  return React.createElement(
    DevLinkContext.Provider,
    { value: context },
    React.createElement(
      InteractionsProvider,
      { createEngine: createIX2Engine },
      children
    )
  );
};
