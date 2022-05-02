const boxes = document.querySelectorAll(".box");

const peekerOptions = {
  root: null,
  threshold: 0.3,
};

function peekerCall(entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}

const peeker = new IntersectionObserver(peekerCall, peekerOptions);

boxes.forEach((box) => {
  peeker.observe(box);
});
