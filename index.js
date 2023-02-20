"use strict";

let toggleIcon = document.querySelector(".toggle-icon");
let mobileNav = document.querySelector(".main-nav");

toggleIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("filter");
  document.querySelector("body").style.position = "static";
  if (!mobileNav.classList.contains("hidden")) {
    toggleIcon.innerHTML =
      '<img class="hamburger-icon" src="assets/images/icon-menu-close.svg"/>';
    document.querySelector("body").style.position = "fixed";
  } else {
    toggleIcon.innerHTML =
      '<img class="hamburger-icon" src="assets/images/icon-menu.svg"/>';
  }
});
