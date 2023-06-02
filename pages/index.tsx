import { CurrentForecast, SevenDayForecast } from "../devlink";

export default function Home() {
  return (
    <>
      <SevenDayForecast />
      <CurrentForecast />
    </>
  );
}
