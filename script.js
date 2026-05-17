const whatsappConfig = {
  number: "6282373841093",
  display: "0823-7384-1093",
};

const phoneDisplay = document.querySelector("#phoneDisplay");
const orderForm = document.querySelector("#orderForm");
const customerName = document.querySelector("#customerName");
const productChoice = document.querySelector("#productChoice");
const pickupPoint = document.querySelector("#pickupPoint");

function buildWhatsAppUrl() {
  const name = customerName.value.trim();
  const product = productChoice.value;
  const pickup = pickupPoint.value;
  const greeting = name ? `Halo UMBIKLIK, saya ${name}.` : "Halo UMBIKLIK.";
  const message = `${greeting} Saya ingin pesan ${product} dengan opsi ${pickup}.`;

  return `https://wa.me/${whatsappConfig.number}?text=${encodeURIComponent(message)}`;
}

phoneDisplay.textContent = whatsappConfig.display;
phoneDisplay.href = `https://wa.me/${whatsappConfig.number}`;

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  window.open(buildWhatsAppUrl(), "_blank", "noopener");
});
