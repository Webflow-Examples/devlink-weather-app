"use client";
import React from "react";
import { onKeyDownInputHandlers } from "../helpers/formUtils";
const FormButton = React.forwardRef(function FormButton(
  { className = "", value, ...props },
  ref
) {
  return React.createElement("input", {
    ...props,
    ref,
    type: "submit",
    value: value ?? "",
    className: className + " w-button",
    onKeyDown: onKeyDownInputHandlers,
  });
});
export default FormButton;
