import { format } from "date-fns";

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
    return data;
  } catch (e) {
    console.error(e);
  }
}
