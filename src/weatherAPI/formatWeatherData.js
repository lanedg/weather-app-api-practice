export async function formatWeatherData(data) {
  const formattedData = {
    address: data.resolvedAddress,
    currentTemp: data.currentConditions.temp,
    minTemp: data.days[0].tempmin,
    maxTemp: data.days[0].tempmax,
    conditions: data.days[0].conditions,
  };
  return formattedData;
}
