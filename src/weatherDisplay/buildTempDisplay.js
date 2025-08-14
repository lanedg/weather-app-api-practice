export async function buildTempDisplay(data) {
  const tempDisplay = document.getElementById("temp-display");
  tempDisplay.innerHTML = "";
  const minTemp = await buildMinTemp(data);
  tempDisplay.appendChild(minTemp);
  const maxTemp = await buildMaxTemp(data);
  tempDisplay.appendChild(maxTemp);
}

async function buildMinTemp(data) {
  const container = buildTempContainer();
  const minTemp = document.createElement("p");
  minTemp.classList.add("temp");
  const description = document.createElement("span");
  description.classList.add("description");
  description.textContent = "Minimum Temperature Today: ";
  minTemp.appendChild(description);
  const text = document.createTextNode(`${data.minTemp}`);
  minTemp.appendChild(text);
  container.appendChild(minTemp);
  return container;
}

async function buildMaxTemp(data) {
  const container = buildTempContainer();
  const maxTemp = document.createElement("p");
  maxTemp.classList.add("temp");
  const description = document.createElement("span");
  description.classList.add("description");
  description.textContent = "Maximum Temperature Today: ";
  maxTemp.appendChild(description);
  const text = document.createTextNode(`${data.maxTemp}`);
  maxTemp.appendChild(text);
  container.appendChild(maxTemp);
  return container;
}

function buildTempContainer() {
  const container = document.createElement("div");
  container.classList.add("temp-container");
  return container;
}
