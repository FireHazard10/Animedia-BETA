const pics = document.querySelector(".pics");
const trendz = document.querySelectorAll(".trendz");
const backButton = document.getElementById("backward");
const forButton = document.getElementById("forward");

let cardIndex = 0;
const visibleCards = 5;
const cardWidth = 215; // 200 + 15 margin

function updateCardSlider(index) {
  const offset = -index * cardWidth;
  pics.style.transform = `translateX(${offset}px)`;
}

backButton.addEventListener("click", () => {
  cardIndex = Math.max(cardIndex - 1, 0);
  updateCardSlider(cardIndex);
});

forButton.addEventListener("click", () => {
  const maxIndex = Math.max(trendz.length - visibleCards, 0);
  cardIndex = Math.min(cardIndex + 1, maxIndex);
  updateCardSlider(cardIndex);
});

updateCardSlider(cardIndex);
