const toggles = document.querySelectorAll(".faqs .faq__toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () =>
    toggle.parentNode.classList.toggle("active")
  );
});
