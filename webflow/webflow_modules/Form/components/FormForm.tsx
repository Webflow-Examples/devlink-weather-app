"use client";
import React from "react";

const FormForm = React.forwardRef<
  HTMLFormElement,
  React.FormHTMLAttributes<HTMLFormElement>
>(function FormForm(props, ref) {
  return React.createElement("form", { ...props, ref });
});

export default FormForm;
