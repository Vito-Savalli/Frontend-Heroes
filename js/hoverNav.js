// HOVER EFFECT ON HEADER LINKS
const navActive = document.getElementById("header__link-active");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".header__nav-link");

navLinks.forEach(function (element) {
  element.addEventListener(
    "mouseover",
    () => (navActive.style.color = "#ecf0f0")
  );
});

header.addEventListener(
  "mouseleave",
  () => (navActive.style.color = "#31b8d3")
);
