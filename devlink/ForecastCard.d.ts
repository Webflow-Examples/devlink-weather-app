import * as React from "react";
import * as Types from "./types";

declare function ForecastCard(props: {
  as?: React.ElementType;
  dayOfWeek?: React.ReactNode;
  iconImage?: Types.Asset.Image;
  temp?: React.ReactNode;
  weatherDesc?: React.ReactNode;
  high?: React.ReactNode;
  low?: React.ReactNode;
}): React.JSX.Element;
