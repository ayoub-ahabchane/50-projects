const carousel = document.querySelector(".carousel");
const container = document.querySelector(".image-container");
const imgs = container.querySelectorAll("img");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let coords = 0;
let index = 0;

nextBtn.addEventListener("click", () => {
  unsetInterval();
  slide("left");
});

prevBtn.addEventListener("click", () => {
  unsetInterval();
  slide("right");
});

function slide(direction) {
  if (direction === "left") {
    if (index === imgs.length - 1) {
      index = 0;
      coords = 0;
      container.style.transform = `translateX(0px)`;
    } else {
      index++;
      coords -= 500;
      container.style.transform = `translateX(${coords}px)`;
    }
  }

  if (direction === "right") {
    if (index === 0) {
      index = 4;
      coords = -500 * index;
      container.style.transform = `translateX(${coords}px)`;
    } else {
      index--;
      coords += 500;
      container.style.transform = `translateX(${coords}px)`;
    }
  }
}

let interval = setInterval(() => {
  slide("left");
}, 3000);

function unsetInterval() {
  clearInterval(interval);
}

carousel.addEventListener("mouseenter", () => clearInterval(interval));

carousel.addEventListener("mouseleave", () => {
  interval = setInterval(() => {
    slide("left");
  }, 3000);
});
