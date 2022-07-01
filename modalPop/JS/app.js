const clicked = document.getElementById("clicked");
const contentWrapper = document.querySelector(".content-wrapper");
const close = document.querySelector(".close");

clicked.addEventListener("click", function () {
  contentWrapper.classList.add("active");
});
close.addEventListener("click", function () {
  contentWrapper.classList.remove("active");
});
contentWrapper.addEventListener("click", function (e) {
  if (e.target == this) {
    contentWrapper.classList.remove("active");
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key == "Backspace") {
    contentWrapper.classList.remove("active");
  }
});
