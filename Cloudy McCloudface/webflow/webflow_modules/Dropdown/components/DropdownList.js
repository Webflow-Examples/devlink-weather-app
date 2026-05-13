"use client";
import * as React from "react";
import { cj } from "../../utils";
import { NavbarContext } from "../../Navbar/helpers/navbarContext";
import { DropdownContext } from "../helpers/dropdownContext";
const DropdownList = React.forwardRef(function DropdownList(
  { tag = "nav", className = "", ...props },
  ref
) {
  const { isOpen } = React.useContext(DropdownContext);
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
  return React.createElement(tag, {
    ...props,
    className: cj(
      className,
      "w-dropdown-list",
      isOpen && "w--open",
      isNavbarOpen && "w--nav-dropdown-list-open"
    ),
    ref,
  });
});
export default DropdownList;
