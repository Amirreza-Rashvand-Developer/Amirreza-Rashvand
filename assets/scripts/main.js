const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav__close");

navMenu.addEventListener("click", function () {
    navMenu.classList.toggle("nav-menu--open");
    navClose.classList.toggle("nav__close--open")
})