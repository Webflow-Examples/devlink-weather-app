"use client";
import * as React from "react";

export const DropdownContext = React.createContext<{
  root: React.RefObject<HTMLElement | null>;
  isOpen: boolean;
  toggleOpen: () => void;
  setFocusedLink: React.Dispatch<React.SetStateAction<number>>;
  hover: boolean;
}>({
  root: { current: null },
  isOpen: false,
  toggleOpen: () => undefined,
  setFocusedLink: () => undefined,
  hover: false,
});
