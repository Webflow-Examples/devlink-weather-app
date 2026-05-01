"use client";
import * as React from "react";

type BlockProps = React.PropsWithChildren<{ tag?: React.ElementType }> &
  React.HTMLAttributes<HTMLOrSVGElement>;

const Block = React.forwardRef<HTMLElement, BlockProps>(function Block(
  { tag = "div", ...props },
  ref
) {
  return React.createElement(tag, {
    ...props,
    ref,
  });
});

export default Block;
