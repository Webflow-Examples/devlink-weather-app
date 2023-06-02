import React from "react";
import * as _Builtin from "./_Builtin";
import { Input } from "./Input";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./FormWrapper.module.css";

export function FormWrapper({ as: _Component = _Builtin.Block, formBody }) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-2")} tag="div">
      {formBody ?? (
        <>
          <Input />
          <Button />
        </>
      )}
    </_Component>
  );
}
