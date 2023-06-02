import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Input.module.css";

export function Input({ as: _Component = _Builtin.FormTextInput }) {
  return (
    <_Component
      className={_utils.cx(_styles, "text-field")}
      autoFocus={false}
      maxLength={256}
      name="Location-5"
      data-name="Location 5"
      placeholder="Seattle, WA"
      type="text"
      disabled={false}
      required={true}
      id="Location-5"
    />
  );
}
