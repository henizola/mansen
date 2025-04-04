window.addEventListener("scroll", function () {
  const logoImage = document.getElementById("logoImage");
  const navLinks = document.getElementById("navLinks");
  const scrolledLogoImage = document.getElementById("scrolledLogoImage");
  const scrollPosition = window.scrollY;
  const navToggle = document.querySelector(".nav-toggle-label");

  if (scrollPosition > 120) {
    logoImage.classList.add("hidden");
    scrolledLogoImage.classList.add("slide-out");
    scrolledLogoImage.classList.remove("hidden");
    navToggle.classList.add("opacity-0");
    navToggle.classList.remove("opacity-1");
  } else {
    navToggle.classList.add("opacity-1");
    navToggle.classList.remove("opacity-0");
    logoImage.classList.remove("hidden");
    scrolledLogoImage.classList.add("hidden");
    scrolledLogoImage.classList.remove("slide-out");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("change", () => {
    if (navToggle.checked) {
      navLinks.style.opacity = 1;
    } else {
      navLinks.style.opacity = 0;
      navToggle.classList.add("opacity-1");
      navToggle.classList.remove("opacity-0");
    }
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
