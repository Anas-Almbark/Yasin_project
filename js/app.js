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
  if (window.scrollY > 60) {
    nav.classList.add("scroll-down");
    mainLogo.src = "./images/logo.png";
  } else if (window.scrollY < 100 && document.body.clientWidth <= 1280) {
    mainLogo.src = "./images/logo.png";
  } else {
    nav.classList.remove("scroll-down");
    mainLogo.src = "./images/logo2.png";
  }
  window.scrollY >= about.offsetTop - 570 // For About
    ? (about.style.top = `${-150}px`)
    : (about.style.top = `${0}px`);
};
// For Open List Nav
listIcon.addEventListener("click", () => {
  listIcon.classList.toggle("fa-xmark");
  nav.classList.toggle("open-nav");
});
document.querySelectorAll(".header nav ul li").forEach((li) => {
  // when click on any li => close nav bar
  li.onclick = () => {
    if (nav.classList.contains("open-nav")) {
      nav.classList.toggle("open-nav");
      listIcon.classList.toggle("fa-xmark");
    }
  };
});

// for slider
let allImagesSlider = [
  "../images/my_work/00.jpg",
  "../images/my_work/01.jpg",
  "../images/my_work/02.jpg",
  "../images/my_work/03.jpg",
  "../images/my_work/04.jpg",
  "../images/my_work/05.jpg",
  "../images/my_work/06.jpg",
  "../images/my_work/07.jpg",
  "../images/my_work/08.jpg",
  "../images/my_work/09.jpg",
  "../images/my_work/10.jpg",
  "../images/my_work/11.jpg",
  "../images/my_work/12.jpg",
  "../images/my_work/13.jpg",
  "../images/my_work/14.jpg",
  "../images/my_work/15.jpg",
  "../images/my_work/16.jpg",
  "../images/my_work/17.jpg",
  "../images/my_work/18.jpg",
  "../images/my_work/19.jpg",
  "../images/my_work/20.jpg",
  "../images/my_work/21.jpg",
  "../images/my_work/22.jpg",
  "../images/my_work/23.jpg",
  "../images/my_work/24.jpg",
  "../images/my_work/25.jpg",
  "../images/my_work/26.jpg",
  "../images/my_work/27.jpg",
  "../images/my_work/28.jpg",
  "../images/my_work/29.jpg",
];
let swiper1 = document.querySelector(".mySwiper");
let swiper2 = document.querySelector(".mySwiper2");
for (let i = 0; i < allImagesSlider.length; i++) fetchImg(i);
function fetchImg(i) {
  let swiperSlide = document.createElement("swiper-slide");
  let swiperSlideImg = document.createElement("img");
  swiperSlideImg.src = allImagesSlider[i];
  swiperSlide.appendChild(swiperSlideImg);
  swiper2.appendChild(swiperSlide);
  swiper1.appendChild(swiperSlide.cloneNode(true));
}
