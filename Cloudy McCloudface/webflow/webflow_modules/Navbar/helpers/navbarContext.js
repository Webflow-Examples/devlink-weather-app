"use client";
import * as React from "react";
const BREAKPOINTS = {
  medium: 991,
  small: 767,
  tiny: 479,
};
export { BREAKPOINTS };
export const NavbarContext = React.createContext({
  animDirect: 1,
  animOver: false,
  animation: "animation",
  collapse: "medium",
  docHeight: false,
  duration: 400,
  easing2: "ease",
  easing: "ease",
  getBodyHeight: () => undefined,
  getOverlayHeight: () => {
    return undefined;
  },
  isOpen: false,
  noScroll: false,
  toggleOpen: () => undefined,
  navbarMounted: false,
  menu: { current: null },
  root: { current: null },
  setFocusedLink: () => undefined,
});
