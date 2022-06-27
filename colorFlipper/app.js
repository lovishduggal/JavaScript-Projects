const colors = ["red","orange"," yellow","blue","indigo"," violet","green"];
const colName = document.querySelector(".colorName");
const bgChange = document.getElementById("box");
const cta = document.getElementById("btn");

cta.addEventListener("click", function () {
  var value = indexValue();
console.log(value);
  bgChange.style.backgroundColor = colors[value];
  colName.innerHTML = colors[value];

});
function indexValue() {
  return Math.floor(Math.random() * colors.length);
}
console.log (colName.innerText);