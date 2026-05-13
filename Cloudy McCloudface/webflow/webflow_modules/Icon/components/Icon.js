"use client";
import * as React from "react";
const Icon = React.forwardRef(function Icon(
  { widget, className = "", ...props },
  ref
) {
  return React.createElement("div", {
    className: className + ` w-icon-${widget.icon}`,
    ...props,
    ref,
  });
});
export default Icon;
