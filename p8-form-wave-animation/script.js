const inputs = document.querySelectorAll(".form-control input");

console.log(inputs);

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    const label = input.labels[0];
    label.classList.add("active");
  });

  input.addEventListener("focusout", () => {
    if (input.value) return;
    const label = input.labels[0];
    label.classList.remove("active");
  });
});
