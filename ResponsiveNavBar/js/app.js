window.addEventListener("resize", function () {
  resizeWindow();
});

function resizeWindow() {
  if (window.innerWidth < 750) {
    document.body.classList.add("responsive");
  } else {
    document.body.classList.remove("responsive");
  }
}

let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".navList");
let spinners = document.querySelectorAll(".hamburger span");
let hamburgerActive = false;

hamburger.addEventListener("click", function () {
  navList.classList.toggle("open");
  if (!hamburgerActive) {
    spinners[0].style.transform = "rotate(45deg)";
    spinners[1].style.opacity = "0";
    spinners[2].style.transform = "rotate(-45deg)";
    spinners[2].style.marginTop = "11px";
    hamburgerActive = true;
  } else {
    spinners[0].style.transform = "rotate(0deg)";
    spinners[1].style.opacity = "1";
    spinners[2].style.transform = "rotate(0deg)";
    spinners[2].style.marginTop = "0px";
    hamburgerActive = false;
  }
});
