import * as React from "react";
import * as Types from "./types";

declare function Layout(props: {
  as?: React.ElementType;
  sidebar?: Types.Devlink.Slot;
  topnav?: Types.Devlink.Slot;
  main?: Types.Devlink.Slot;
}): React.JSX.Element;
