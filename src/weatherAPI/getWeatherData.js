import { format } from "date-fns";
import { formatWeatherData } from "./formatWeatherData";

export async function getWeatherData(locationString) {
  const today = new Date();
  const ymd = format(today, "yyyy-MM-dd");
  const time = "T" + format(today, "HH:mm:ss");
  const fullDate = ymd + time;
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationString}/${fullDate}?key=UC9UHUAFNPYB476QPEQCW43WA`
    );
    const data = await response.json();
    console.log(data);
    const formattedData = formatWeatherData(data);
    console.log(formattedData);
    return formattedData;
  } catch (e) {
    console.error(e);
  }
}
