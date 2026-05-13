"use client";
import * as React from "react";
import { DevLinkContext } from "../../../DevLinkProvider";
const Link = React.forwardRef(function Link(
  {
    options = { href: "#" },
    className = "",
    button = false,
    children,
    block = "",
    ...props
  },
  ref
) {
  const { renderLink: UserLink } = React.useContext(DevLinkContext);
  if (button) className += " w-button";
  if (block === "inline") className += " w-inline-block";
  if (UserLink) {
    return React.createElement(
      UserLink,
      { className: className, ...options, ...props, ref: ref },
      children
    );
  }
  const { href, target, preload = "none" } = options;
  const shouldRenderResource =
    preload !== "none" && typeof href === "string" && !href.startsWith("#");
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "a",
      { href: href, target: target, className: className, ...props, ref: ref },
      children
    ),
    shouldRenderResource &&
      React.createElement("link", { rel: preload, href: href })
  );
});
export default Link;
