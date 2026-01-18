function includeHTML() {
  // Load header
  fetch("easyheader.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  // Load rec
  fetch("easyrec.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("rec").innerHTML = data;
    });

  // Load follow
  fetch("easyfollow.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("follow").innerHTML = data;
    });

  // Load follow-long
  fetch("easyfollowlong.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("followlong").innerHTML = data;
    });

  // Load genre
  fetch("easygenre.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("genre").innerHTML = data;
    });

  // Load section
  fetch("easysec.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("rand").innerHTML = data;
    });

  // Load Card
  fetch("easycards.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("gates").innerHTML = data;
    });

  // Load Mx
  fetch("easycardmx.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("maxim").innerHTML = data;
    });

  // Load footer
  fetch("easyfooter.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

// Run on page load
window.onload = includeHTML;
