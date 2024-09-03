function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "48faoe8ab18e23t93c002654f81bbf6e";
let context =
  "be polite and provide a very short 5 word answer and just pick one";
let prompt = "What is the best country in the world to travel to?";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Processing");
axios.get(apiURL).then(showAnswer);
