// Mobile menu toggle
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
