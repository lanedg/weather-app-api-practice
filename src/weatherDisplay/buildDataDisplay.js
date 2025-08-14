import { buildAddress } from "./buildAddress";
import { buildConditions } from "./buildConditions";
import { buildTempDisplay } from "./buildTempDisplay";

export async function buildWeatherDataDisplay(data) {
  buildAddress(data);
  buildConditions(data);
  buildTempDisplay(data);
}
