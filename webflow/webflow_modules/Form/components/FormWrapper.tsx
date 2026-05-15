"use client";
import React from "react";
import { Props } from "../../types";
import FormForm from "./FormForm";
import FormSuccessMessage from "./FormSuccessMessage";
import FormErrorMessage from "./FormErrorMessage";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

type FormState = "normal" | "success" | "error";

type FormWrapperProps = Props<"div"> & {
  state?: FormState;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
};

const FormWrapper = React.forwardRef<HTMLElement, FormWrapperProps>(
  function FormWrapper(
    {
      className = "",
      state: initialState = "normal",
      onSubmit,
      children,
      ...props
    }: FormWrapperProps,
    ref
  ) {
    const [state, setState] = React.useState(initialState);
    const childrenArray = React.Children.toArray(children);

    const formFormChild = childrenArray.find(
      (c): c is React.ReactElement =>
        React.isValidElement(c) && c.type === FormForm
    );
    const formName: string =
      (formFormChild?.props as { ["data-name"]?: string } | undefined)?.[
        "data-name"
      ] ?? "Form";

    return React.createElement(
      "div",
      {
        className: className + " w-form",
        ...props,
        ref,
      },
      React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        if (child.type === FormForm) {
          const style: React.CSSProperties = {};
          if (state === "success") {
            style.display = "none";
          }
          const formChild = child as React.ReactElement<
            React.FormHTMLAttributes<HTMLFormElement>
          >;
          return React.cloneElement(formChild, {
            ...formChild.props,
            style,
            onSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
              try {
                e.preventDefault();
                if (window.grecaptcha && !window.grecaptcha?.getResponse()) {
                  alert(`Please confirm you're not a robot.`);
                  return;
                }
                if (onSubmit) {
                  await onSubmit(e);
                }
                setState("success");
              } catch (err) {
                setState("error");
                throw err;
              }
            },
            "aria-label": formName,
          });
        }

        if (child.type === FormSuccessMessage) {
          const style: React.CSSProperties = {};
          if (state === "success") {
            style.display = "block";
          }
          if (state === "error") {
            style.display = "none";
          }
          const successChild = child as React.ReactElement<Props<"div">>;
          return React.cloneElement(successChild, {
            ...successChild.props,
            style,
            tabIndex: -1,
            role: "region",
            "aria-label": `${formName} success`,
          });
        }

        if (child.type === FormErrorMessage) {
          const style: React.CSSProperties = {};
          if (state === "success") {
            style.display = "none";
          }
          if (state === "error") {
            style.display = "block";
          }
          const errorChild = child as React.ReactElement<Props<"div">>;
          return React.cloneElement(errorChild, {
            ...errorChild.props,
            tabIndex: -1,
            role: "region",
            "aria-label": `${formName} failure`,
            style,
          });
        }

        return child;
      })
    );
  }
);

export default FormWrapper;
