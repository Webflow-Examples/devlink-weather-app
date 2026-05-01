"use client";
import React from "react";
import { Props } from "../../types";

const FormSuccessMessage = React.forwardRef(function FormSuccessMessage(
  { className = "", ...props }: Props<"div">,
  ref
) {
  return React.createElement("div", {
    className: className + " w-form-done",
    ...props,
    ref,
  });
});

export default FormSuccessMessage;
