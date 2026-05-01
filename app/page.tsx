import { CurrentForecast } from "@/webflow/CurrentForecast";
import { SevenDayForecast } from "@/webflow/SevenDayForecast";

export default function Home() {
  return (
    <>
      <SevenDayForecast />
      <CurrentForecast />
    </>
  );
}
