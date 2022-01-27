var burger = document.querySelector(".burger");
var navList = document.querySelector(".nav-list");
var navBar = document.querySelector(".navbar");
var rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  rightNav.classList.toggle("v-class");
  navList.classList.toggle("v-class");
  navBar.classList.toggle("h-nav");
});

// popup Section Started from Here
window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".popup").style.display = "block";
  }, 500);
});

var close = document.querySelector("#close");
close.addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
