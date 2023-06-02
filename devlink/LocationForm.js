import React from "react";
import * as _Builtin from "./_Builtin";
import { FormWrapper } from "./FormWrapper";
import * as _utils from "./utils";
import _styles from "./LocationForm.module.css";

export function LocationForm({
  as: _Component = _Builtin.FormWrapper,
  formBody,
  successMessage = "Successfully added new location!",
  errorMessage = "Oops! Can't add this location.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "form-block")}>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "form")}
        name="wf-form-Location-Form"
        data-name="Location Form"
        method="get"
        id="wf-form-Location-Form"
      >
        <FormWrapper formBody={formBody} />
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage
        className={_utils.cx(_styles, "success-message")}
      >
        <_Builtin.Block className={_utils.cx(_styles, "")} tag="div">
          {successMessage}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage
        className={_utils.cx(_styles, "error-message")}
      >
        <_Builtin.Block className={_utils.cx(_styles, "text-block")} tag="div">
          {errorMessage}
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
