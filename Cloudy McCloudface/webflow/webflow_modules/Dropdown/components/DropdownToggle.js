"use client";
import * as React from "react";
import { cj, KEY_CODES } from "../../utils";
import { NavbarContext } from "../../Navbar/helpers/navbarContext";
import { DropdownContext } from "../helpers/dropdownContext";
const DropdownToggle = React.forwardRef(function DropdownToggle(
  { tag = "div", className = "", ...props },
  ref
) {
  const { isOpen, toggleOpen, hover } = React.useContext(DropdownContext);
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
  return React.createElement(tag, {
    ...props,
    "aria-haspopup": "menu",
    "aria-expanded": isOpen,
    className: cj(
      className,
      "w-dropdown-toggle",
      isNavbarOpen && "w--nav-dropdown-toggle-open"
    ),
    onClick: () => {
      if (!hover) toggleOpen();
    },
    onKeyDown: (e) => {
      if (e.key === KEY_CODES.ENTER || e.key === KEY_CODES.SPACE) {
        toggleOpen();
        e.stopPropagation();
        return e.preventDefault();
      }
    },
    role: "button",
    tabIndex: 0,
    ref,
  });
});
export default DropdownToggle;
