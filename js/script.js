const typeDisplayElement = document.getElementById("typeDisplay");
const typeInputElement = document.getElementById("typeInput");
const timer = document.getElementById("timer");

typeInputElement.addEventListener("input", () => {

  const sentence = typeDisplayElement.querySelectorAll("span");
  const arrayValue = typeInputElement.value.split("");
  let correct = true;
  sentence.forEach((characterSpan, index) => {
    if (arrayValue[index] == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (characterSpan.innerText == arrayValue[index]) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    }
  });

  if (correct) {
    RenderNextSentence();
  }
});


function GetRandomSentenceToNishida() {
    randomIndex = Math.floor(Math.random() * badLangages.length);
    return badLangages[randomIndex]
}

async function RenderNextSentence() {
  const sentence = GetRandomSentenceToNishida();

  typeDisplayElement.innerText = "";
  sentence.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    typeDisplayElement.appendChild(characterSpan);
  });

  typeInputElement.value = null;
}

RenderNextSentence();