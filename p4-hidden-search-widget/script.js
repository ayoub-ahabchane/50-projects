const searchForm = document.querySelector(".search");
const searchBar = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", () => {
  searchForm.classList.add("expanded");
  searchBar.focus();
});
