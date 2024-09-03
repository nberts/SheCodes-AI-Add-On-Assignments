//challenge 1 - disabel button
function disableButton() {
  let buttonElement = document.querySelector("#challenge-1");
  buttonElement.setAttribute("disabled", "disabled");
}

disableButton();

//challenge 2
function greenButton() {
  let button2 = document.querySelector("#challenge-2");
  button2.style.background = "green";
}

greenButton();

//challenge 3
function redButton() {
  let button3 = document.querySelector("#challenge-3");
  button3.classList.add("danger");
}

redButton();
