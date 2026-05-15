"use client";
import React from "react";
import { onKeyDownInputHandlers } from "../helpers/formUtils";

type FormInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "form"
> & {
  inputType?: string;
  customClassName?: string;
  form?: string | { type?: string; name?: string };
};

export type { FormInputProps };

const FormTextInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  function FormTextInput({ className = "", ...props }, ref) {
    return React.createElement("input", {
      ...props,
      className: className + " w-input",
      onKeyDown: onKeyDownInputHandlers,
      ref,
    });
  }
);

export default FormTextInput;
