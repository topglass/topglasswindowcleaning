const burgerBtn = document.querySelector(".navbar-toggler");
const expandedMenu = document.querySelector("#navbarResponsive");
const navLinks = document.querySelector(".collapse:not(.show)");
const collapse = document.querySelector(".navbar-collapse");
const nav_link = document.querySelector(".nav-link");
const cards = document.querySelector(".card")


burgerBtn.addEventListener("click", () => {
  expandedMenu.style.display =
    expandedMenu.style.display === "block" ? "" : "block";
});

navLinks.addEventListener("click", () => {
  expandedMenu.style.display =
    expandedMenu.style.display === "block" ? "" : "block";

    burgerBtn.classList.toggle('opened');
          burgerBtn.setAttribute('aria-expanded',
          burgerBtn.classList.contains('opened'));
});

