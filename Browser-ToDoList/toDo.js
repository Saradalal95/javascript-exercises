let input = document.querySelector("input");
let button = document.querySelector("button");
let section = document.querySelector("section");
button.addEventListener("click", function (event) {
  event.preventDefault();
  let text = input.value;
  let paragraph = document.createElement("P");
  paragraph.classList.add("paragraph");
  let spanCloseButton = document.createElement("SPAN");
  spanCloseButton.classList.add("close");
  spanCloseButton.innerText = "X";
  paragraph.innerText = text;
  paragraph.appendChild(spanCloseButton);
  section.appendChild(paragraph);
  input.value = "";
  spanCloseButton.addEventListener("click", function (ev) {
    let paragraphToBeRemoved = ev.target.parentElement;
    section.removeChild(paragraphToBeRemoved);
  });
});
let clearAllButton = document.getElementById("clearall");
clearAllButton.addEventListener("click", function () {
  section.innerHTML = "";
});
