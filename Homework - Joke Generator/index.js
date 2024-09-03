let apiKey = "48faoe8ab18e23t93c002654f81bbf6e";
let context =
  "be polite and provide jokes for the user that are short and appropriate. Please provide no other communication other than the joke itself";
let prompt = "Please tell me a joke";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
let jokeElement = document.querySelector("#joke");

function tellJoke() {
  jokeElement.innerHTML = "Hold on a second, writing comedy gold here...";
  axios.get(apiURL).then(printJoke);
}

function printJoke(response) {
  jokeElement.innerHTML = response.data.answer;
}

let jokeButton = document.querySelector("button");
jokeButton.addEventListener("click", tellJoke);
