document.querySelectorAll(".badge").forEach((b) => {
  b.addEventListener("click", () => b.classList.toggle("actixe"));
});

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}
