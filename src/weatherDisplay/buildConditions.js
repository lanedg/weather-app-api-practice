export async function buildConditions(data) {
  const container = document.getElementById("conditions-container");
  container.innerHTML = "";
  const conditions = document.createElement("h3");
  conditions.classList.add("conditions");
  container.appendChild(conditions);
  const description = document.createElement("span");
  description.classList.add("description");
  description.textContent = "Conditions Today: ";
  const text = document.createTextNode(`${data.conditions}`);
  conditions.appendChild(description);
  conditions.appendChild(text);
}
