"use client";
import * as React from "react";
import { cj, KEY_CODES } from "../../utils";
import { NavbarContext } from "../helpers/navbarContext";
const NavbarButton = React.forwardRef(function NavbarButton(
  { tag = "div", className = "", ...props },
  ref
) {
  const { isOpen, toggleOpen } = React.useContext(NavbarContext);
  return React.createElement(tag, {
    ...props,
    "aria-label": "menu",
    "aria-expanded": isOpen ? "true" : "false",
    "aria-haspopup": "menu",
    "aria-controls": "w-nav-overlay",
    role: "button",
    tabIndex: 0,
    className: cj(className, "w-nav-button", isOpen && "w--open"),
    onClick: toggleOpen,
    onKeyDown: (e) => {
      if (e.key === KEY_CODES.ENTER || e.key === KEY_CODES.SPACE) {
        e.preventDefault();
        toggleOpen();
      }
    },
    ref,
  });
});
export default NavbarButton;
