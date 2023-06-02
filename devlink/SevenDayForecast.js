import React from "react";
import * as _Builtin from "./_Builtin";
import { ForecastCard } from "./ForecastCard";
import * as _utils from "./utils";
import _styles from "./SevenDayForecast.module.css";

export function SevenDayForecast({
  as: _Component = _Builtin.Block,
  forecastCardHigh4 = "H: 72°",
  forecastCardWeatherDesc2 = "Rain",
  forecastCardHigh = "H: 72°",
  forecastCardLow = "L: 55°",
  forecastCardWeatherDesc = "Partly cloudy",
  forecastCardLow2 = "L: 55°",
  forecastCardHigh2 = "H: 72°",
  forecastCardHigh3 = "H: 72°",
  forecastCardLow3 = "L: 55°",
  forecastCardLow4 = "L: 55°",
}) {
  return (
    <_Component className={_utils.cx(_styles, "block")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "title")} tag="div">
        {"7-Day Forecast"}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "grid-06")} tag="div">
        <ForecastCard />
      </_Builtin.Block>
    </_Component>
  );
}
