const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.layerX;
    const y = e.layerY;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = y + "px";
    circle.style.left = x + "px";
    this.appendChild(circle);
    circle.addEventListener("animationend", function () {
      this.remove();
    });
  });
});
