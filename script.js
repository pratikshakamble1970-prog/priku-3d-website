document.getElementById("year").textContent = new Date().getFullYear();

// Reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Subtle pointer tilt on the animated hero illustration (desktop only).
const art = document.querySelector(".hero-art");
const laptop = document.querySelector(".laptop");
if (art && laptop && window.matchMedia("(pointer:fine)").matches) {
  art.addEventListener("pointermove", (event) => {
    const rect = art.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    laptop.style.transform = `rotateY(${-13 + x * 10}deg) rotateX(${4 - y * 8}deg)`;
  });
  art.addEventListener("pointerleave", () => {
    laptop.style.transform = "";
  });
}
