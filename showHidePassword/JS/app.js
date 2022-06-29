const Target1 = document.querySelector("span i");
const inputType = document.querySelector(".postion");
console.log(inputType);

Target1.addEventListener("click", function () {
  if (inputType.getAttribute("type") == "password") {
    Target1.classList.add("show");
    inputType.setAttribute("type", "text");
  } else {
    Target1.classList.remove("show");
    inputType.setAttribute("type", "password");
  }
});
