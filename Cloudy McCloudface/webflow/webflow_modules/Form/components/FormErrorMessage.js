"use client";
import React from "react";
const FormErrorMessage = React.forwardRef(function FormErrorMessage(
  { className = "", ...props },
  ref
) {
  return React.createElement("div", {
    className: className + " w-form-fail",
    ...props,
    ref,
  });
});
export default FormErrorMessage;
