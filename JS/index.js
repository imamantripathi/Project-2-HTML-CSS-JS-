var burger = document.querySelector(".burger");
var navList = document.querySelector(".nav-list");
var navBar = document.querySelector(".navbar");
var rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  rightNav.classList.toggle("v-class");
  navList.classList.toggle("v-class");
  navBar.classList.toggle("h-nav");
});
