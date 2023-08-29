// For header Logo
let header = document.querySelector(".header");
if (document.body.clientWidth <= 500) {
  header.classList.add("mobile");
} else {
  header.classList.remove("mobile");
}

let mainLogo = document.querySelector(".main-logo");
document.body.clientWidth <= 1280
  ? (mainLogo.src = "./images/logo.png")
  : (mainLogo.src = "./images/logo2.png");
// For Open List Nav
let listIcon = document.querySelector(".list-icon i");
let nav = document.querySelector(".nav");
listIcon.addEventListener("click", () => {
  listIcon.classList.toggle("fa-xmark");
  nav.classList.toggle("open-nav");
});
