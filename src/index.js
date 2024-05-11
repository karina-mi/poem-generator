
function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions")

  let apiKey = "78f3071a140683cd3aot3e0bc84c340d"
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`
  let context = "You are a romantic Poem export and love to write short poems. Your mission is to generate a 8 line poem in basic HTML and separate each line with a <br/>.Make sure to follow the user instructions. Do not include a title. Sign the poem with " +
    "'🌸 🌸 🌸' inside a <strong> element at the end of the poem "
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

  let poemElement = document.querySelector("#poem")
  poemElement.classList.remove("hidden")
  poemElement.innerHTML = `<span class="blink">⏳ </span>Generating a poem about ${instructionsInput.value}`

  axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);