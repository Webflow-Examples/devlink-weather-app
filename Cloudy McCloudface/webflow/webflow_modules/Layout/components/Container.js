"use client";
import * as React from "react";
const Container = React.forwardRef(function Container(
  { tag = "div", className = "", grid: _grid, ...props },
  ref
) {
  return React.createElement(tag, {
    className: className + " w-container",
    ref,
    ...props,
  });
});
export default Container;
