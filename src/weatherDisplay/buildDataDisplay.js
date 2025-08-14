import { buildAddress } from "./buildAddress";
import { buildConditions } from "./buildConditions";

export async function buildWeatherDataDisplay(data) {
  buildAddress(data);
  buildConditions(data);
}
