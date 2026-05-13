"use client";
import React from "react";
import { onKeyDownInputHandlers } from "../helpers/formUtils";
const FormTextInput = React.forwardRef(function FormTextInput(
  { className = "", ...props },
  ref
) {
  return React.createElement("input", {
    ...props,
    className: className + " w-input",
    onKeyDown: onKeyDownInputHandlers,
    ref,
  });
});
export default FormTextInput;
