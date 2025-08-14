import "./styles.css";
import { format } from "date-fns";
import { getWeatherData } from "./weatherAPI/getWeatherData";
import { addSubmitEventListener } from "./eventListeners.js/formEventListener";

// async function logData() {
//   const data = await getWeatherData("New York, NY");
// }

// logData();

addSubmitEventListener();
