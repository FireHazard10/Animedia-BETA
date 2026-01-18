function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

function scrollWeek(distance) {
  document
    .getElementById("weekDays")
    .scrollBy({ left: distance, behavior: "smooth" });
}
