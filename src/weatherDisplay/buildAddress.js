export async function buildAddress(data) {
  const container = document.getElementById("address-container");
  container.innerHTML = "";
  const address = document.createElement("h2");
  address.classList.add("address");
  address.textContent = `${data.address}`;
  container.appendChild(address);
}
