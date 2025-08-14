import { getWeatherData } from "../weatherAPI/getWeatherData";

export function addSubmitEventListener() {
  const form = document.getElementById("weather-form");
  const formInput = document.getElementById("cityInput");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const locationString = formInput.value;
    const data = getWeatherData(locationString);
    console.log(data);
    form.reset();
  });
}
