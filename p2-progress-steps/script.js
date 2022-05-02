const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
const progressBar = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");

let activeCircleCount = 1;

btnNext.addEventListener("click", progress);
btnPrev.addEventListener("click", regress);

function progress() {
  activeCircleCount++;
  btnPrev.disabled = false;
  if (activeCircleCount === circles.length) {
    btnNext.disabled = true;
  }
  update();
}

function regress() {
  activeCircleCount--;
  btnNext.disabled = false;
  if (activeCircleCount === 1) {
    btnPrev.disabled = true;
  }
  update();
}

function update() {
  circles.forEach((circle, index) => {
    if (index < activeCircleCount) circle.classList.add("active");
    else circle.classList.remove("active");
  });
  const activeCircles = document.querySelectorAll(".circle.active");
  const progressValue = `${
    (100 / (circles.length - 1)) * (activeCircles.length - 1)
  }%`;
  progressBar.style.width = progressValue;
}
