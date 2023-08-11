const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem1 = document.querySelector(".nav-item-1");
const navItem2 = document.querySelector(".nav-item-2");
const navItem3 = document.querySelector(".nav-item-3");
const navItem4 = document.querySelector(".nav-item-4");
const navItem5 = document.querySelector(".nav-item-5");

hamburger.addEventListener("click", mobileMenu);
navItem1.addEventListener("click", mobileMenu);
navItem2.addEventListener("click", mobileMenu);
navItem3.addEventListener("click", mobileMenu);
navItem4.addEventListener("click", mobileMenu);
navItem5.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-6rem";
  }
  prevScrollpos = currentScrollPos;
};
