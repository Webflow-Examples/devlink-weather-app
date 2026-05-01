"use client";
import React from "react";
import { Props } from "../../types";

const FormErrorMessage = React.forwardRef(function FormErrorMessage(
  { className = "", ...props }: Props<"div">,
  ref
) {
  return React.createElement("div", {
    className: className + " w-form-fail",
    ...props,
    ref,
  });
});

export default FormErrorMessage;
