const leftSide = document.querySelector(".split.left");
const rightSide = document.querySelector(".split.right");
const container = document.querySelector(".container");

leftSide.addEventListener("mouseenter", () => {
  container.classList.add("expand-left");
});
leftSide.addEventListener("mouseleave", () => {
  container.classList.remove("expand-left");
});

rightSide.addEventListener("mouseenter", () => {
  container.classList.add("expand-right");
});
rightSide.addEventListener("mouseleave", () => {
  container.classList.remove("expand-right");
});
