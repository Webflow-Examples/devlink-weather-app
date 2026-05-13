"use client";
import React from "react";
const FormForm = React.forwardRef(function FormForm(props, ref) {
  return React.createElement("form", { ...props, ref });
});
export default FormForm;
