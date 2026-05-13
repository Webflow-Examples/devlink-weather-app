"use client";
import * as React from "react";
export const DropdownContext = React.createContext({
  root: { current: null },
  isOpen: false,
  toggleOpen: () => undefined,
  setFocusedLink: () => undefined,
  hover: false,
});
