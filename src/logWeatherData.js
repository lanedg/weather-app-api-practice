import { getWeatherData } from "./getWeatherData";

export async function logWeatherData(locationString) {
  const data = await getWeatherData(locationString);
  if (data) {
    console.log(data);
  }
}
