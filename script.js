"using strict";

const navButtonEl = document.querySelector(".nav-button");
const hamburgerMenuEl = document.querySelector(".hamburger-menu");

navButtonEl.addEventListener("click", () => {
  hamburgerMenuEl.classList.toggle("hamburger-menu-active");
});
