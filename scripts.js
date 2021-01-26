const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  const imageId = card.getAttribute("id");
  const title = card.querySelector(".title").innerText;
  const autor = card.querySelector("p").innerText;

  card.addEventListener("click", function () {
    modalOverlay.classList.add("active");
    modalOverlay.querySelector("img").src = `assets/${imageId}.png`;
    modalOverlay.querySelector(".modal-title").textContent = title;
    modalOverlay.querySelector(".modal-autor").textContent = autor;
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});
