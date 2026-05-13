"use client";
import * as React from "react";
import { cj } from "../../utils";
import Link from "../../Basic/components/Link";
const NavbarBrand = React.forwardRef(function NavbarBrand(
  { className = "", ...props },
  ref
) {
  return React.createElement(Link, {
    ...props,
    className: cj(className, "w-nav-brand"),
    ref: ref,
  });
});
export default NavbarBrand;
