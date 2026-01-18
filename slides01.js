const trendList = document.querySelector(".trending-list");
document.getElementById("trend-forward").onclick = () =>
  trendList.scrollBy({ left: 300, behavior: "smooth" });
document.getElementById("trend-back").onclick = () =>
  trendList.scrollBy({ left: -300, behavior: "smooth" });
