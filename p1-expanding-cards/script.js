const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    resetClasses();
    panel.classList.toggle("active");
  });
  panel.addEventListener("transitionend", () => {
    console.log("animation ended");
  });
});

function resetClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
