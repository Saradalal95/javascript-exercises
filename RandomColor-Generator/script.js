var input = document.getElementById("input");
var colors = document.getElementById("colors");
var button = document.getElementById("add");
function colorGenerator() {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}

function addColor() {
  let colorBox = document.createElement("div");
  let closeButton = document.createElement("span");
  let colorName = document.createElement("p");

  let color = colorGenerator();
  colorBox.classList.add("colorbox");
  colorName.classList.add("colorName");
  closeButton.classList.add("closeButton");
  colors.appendChild(colorBox);
  colorBox.appendChild(closeButton);
  colorBox.appendChild(colorName);

  colorName.innerHTML = color;
  colorBox.style.backgroundColor = color;
  closeButton.innerText = "X";
  closeButton.addEventListener("click", function (ev) {
    let divToBeRemoved = ev.target.parentElement;
    colors.removeChild(divToBeRemoved);
  });
}
function num() {
  let colorNum = input.value;
  for (let i = 0; i < colorNum - 1; i++) {
    input.value = "";
    addColor(colorGenerator);
  }
}
