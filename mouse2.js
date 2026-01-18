(() => {
  const body = document.body;
  const btn = document.getElementById("cursorBtn");
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");

  let active = false;
  let mouseX = 0,
    mouseY = 0,
    ringX = 0,
    ringY = 0;

  // 🔹 Load saved cursor state from localStorage
  const savedState = localStorage.getItem("customCursorActive");
  if (savedState === "true") {
    activateCursor(true);
  }

  // Smooth animation loop
  function animate() {
    if (active) {
      const ease = 0.15;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    }
    requestAnimationFrame(animate);
  }
  animate();

  // Track mouse position
  window.addEventListener("mousemove", (e) => {
    if (!active) return;
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Hover effects
  document.addEventListener("mouseover", (e) => {
    if (!active) return;
    if (e.target.closest("a, button, .interactive")) {
      dot.classList.add("hover");
      ring.classList.add("hover");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (!active) return;
    if (e.target.closest("a, button, .interactive")) {
      dot.classList.remove("hover");
      ring.classList.remove("hover");
    }
  });

  // Toggle button click
  btn.addEventListener("click", () => {
    if (active) {
      deactivateCursor();
    } else {
      activateCursor();
    }
  });

  // ===== Helper Functions =====
  function activateCursor(onLoad = false) {
    active = true;
    body.classList.add("custom-cursor-active");
    const icon = btn.querySelector("i");
    icon.className = "bx bx-mouse-alt";
    btn.title = "Deactivate Custom Cursor";
    localStorage.setItem("customCursorActive", "true");

    if (!onLoad) {
      console.log("🎯 Custom cursor activated.");
    }
  }

  function deactivateCursor() {
    active = false;
    body.classList.remove("custom-cursor-active");
    const icon = btn.querySelector("i");
    icon.className = "bx bx-mouse";
    btn.title = "Activate Custom Cursor";
    localStorage.setItem("customCursorActive", "false");
    console.log("🚫 Custom cursor deactivated.");
  }
})();
