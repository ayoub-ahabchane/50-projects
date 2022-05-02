const menuToggles = document.querySelectorAll(".circle button");
const articleContainer = document.querySelector(".container");
const circle = document.querySelector(".circle");
const nav = document.querySelector("nav");

menuToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    articleContainer.classList.toggle("rotated");
  });
});
