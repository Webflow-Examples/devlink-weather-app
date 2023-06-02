import * as React from "react";
import * as Types from "./types";

declare function LocationForm(props: {
  as?: React.ElementType;
  formBody?: Types.Devlink.Slot;
  successMessage?: React.ReactNode;
  errorMessage?: React.ReactNode;
}): React.JSX.Element;
