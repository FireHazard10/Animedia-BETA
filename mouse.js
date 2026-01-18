(function () {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const body = document.body;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX,
    ringY = mouseY;

  // If device is touch-based, disable custom cursor
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouch) {
    body.classList.add("no-cursor");
    body.style.cursor = ""; // restore system cursor where applicable
    return;
  }

  // Update mouse coords on move
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // immediate position for the dot
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Smooth follow for the ring using requestAnimationFrame
  function animate() {
    // ease factor: smaller = smoother/slower
    const ease = 0.15;
    ringX += (mouseX - ringX) * ease;
    ringY += (mouseY - ringY) * ease;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Add hover class when hovering interactive items
  const interactiveSelector =
    'a, button, input[type="button"], input[type="submit"], .interactive';
  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      dot.classList.add("hover");
      ring.classList.add("hover");
    }
  });
  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      // only remove when leaving an interactive element
      dot.classList.remove("hover");
      ring.classList.remove("hover");
    }
  });

  // Keep native cursor for text inputs for accessibility
  document.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches("input, textarea")) {
        body.style.cursor = "text";
      }
    },
    true
  );

  document.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches("input, textarea")) {
        body.style.cursor = "none";
      }
    },
    true
  );

  // Optional: toggle cursor visibility on window blur (e.g., alt-tab)
  window.addEventListener("blur", () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
  });
  window.addEventListener("focus", () => {
    dot.style.opacity = "";
    ring.style.opacity = "";
  });
})();
