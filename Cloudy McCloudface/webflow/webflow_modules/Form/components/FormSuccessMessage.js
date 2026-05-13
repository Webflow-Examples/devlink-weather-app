"use client";
import React from "react";
const FormSuccessMessage = React.forwardRef(function FormSuccessMessage(
  { className = "", ...props },
  ref
) {
  return React.createElement("div", {
    className: className + " w-form-done",
    ...props,
    ref,
  });
});
export default FormSuccessMessage;
