import { getWeatherData } from "../weatherAPI/getWeatherData";
import { buildWeatherDataDisplay } from "../weatherDisplay/buildDataDisplay";

export function addSubmitEventListener() {
  const form = document.getElementById("weather-form");
  const formInput = document.getElementById("cityInput");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const locationString = formInput.value;
    buildPage(locationString);
    form.reset();
  });
}

async function buildPage(locationString) {
  const data = await getWeatherData(locationString);
  buildWeatherDataDisplay(data);
}
