import * as React from "react";
import * as Types from "./types";

declare function CurrentForecast(props: {
  as?: React.ElementType;
  currentTemp?: React.ReactNode;
  feelsLikeTemp?: React.ReactNode;
  humidity?: React.ReactNode;
  precipitation?: React.ReactNode;
  aqi?: React.ReactNode;
  sunset?: React.ReactNode;
}): React.JSX.Element;
