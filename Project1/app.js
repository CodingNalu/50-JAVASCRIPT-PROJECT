const openButton = document.querySelector(".open");
//grab a model container
const modelContainer = document.querySelector(".model-container");
const closeBtn = document.querySelector(".model-btn");
openButton.addEventListener("click", function () {
  modelContainer.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  modelContainer.classList.remove("show");
});
