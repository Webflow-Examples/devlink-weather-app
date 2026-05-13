"use client";
import * as React from "react";
const Block = React.forwardRef(function Block({ tag = "div", ...props }, ref) {
  return React.createElement(tag, {
    ...props,
    ref,
  });
});
export default Block;
