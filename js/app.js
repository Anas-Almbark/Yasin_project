// Select Elements
let listIcon = document.querySelector(".list-icon i");
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let mainLogo = document.querySelector(".main-logo");
let about = document.querySelector(".about");
// For Background Header
document.body.clientWidth <= 500
  ? header.classList.add("mobile")
  : header.classList.remove("mobile");
// For Nav Logo
document.body.clientWidth <= 1280
  ? (mainLogo.src = "./images/logo.png")
  : (mainLogo.src = "./images/logo2.png");

window.onscroll = function () {
  // For Fixed Nav When Window Scroll 200
  if (window.scrollY > 100) {
    nav.classList.add("scroll-down");
    mainLogo.src = "./images/logo.png";
  } else {
    mainLogo.src = "./images/logo2.png";
    nav.classList.remove("scroll-down");
  }
  window.scrollY >= about.offsetTop - 550 // For About
    ? (about.style.top = `${-150}px`)
    : (about.style.top = `${0}px`);
};
// For Open List Nav
listIcon.addEventListener("click", () => {
  listIcon.classList.toggle("fa-xmark");
  nav.classList.toggle("open-nav");
});
