window.onload = function () {
  AddButtonListener("#envelope", EnvelopeClick);
};
// Please work??
function NoClick() {
  button = document.querySelector("#no");
  button.style.display = "none";
  let titleText = document.querySelector("#question-text");
  TypeOn(titleText, "Lets try that again");
}
function GenerateText() {
  let html = "";
  html += "<h1>Hi Love!</h1>";
  html += "<p>I know this is the lamest way someone can do valentines but</p>";
  html += "<br>";
  html += "<h1>I love you so much</h1>";
  html += "<p>will you be my valentine?</p>";
  html +=
    "<div class='button-wrapper'><button id='yes' class='button yes'>Yes</button> <button class='button no' id='no'>no</button ></div>";
  return html;
}
function YesClick() {
  let envelope = document.querySelector("#envelope");
  let paper = envelope.querySelector("#letter");
  let titleText = document.querySelector("#question-text");
  TypeOn(titleText, "Yay <3!");
  paper.innerHTML =
    "<p style='color: var(--pink5);'>I'll see you for our reservation on the 14th at 8:45!</p><p style='color: hotpink;'>Love, Josh</p>";
}
function EnvelopeClick() {
  let envelope = document.querySelector("#envelope");
  let paper = envelope.querySelector("#letter");
  let titleText = document.querySelector("#question-text");
  titleText.style.color = "hotpink";
  TypeOn(titleText, "To Edilyn");
  envelope.style.transform = "translateY(100vh)";
  paper.style.width = "90vw";
  paper.style.height = "60vh";
  paper.style.transform = " translateY(-130vh)";
  paper.style.padding = "20px";
  paper.innerHTML = GenerateText();

  let pTags = paper.querySelectorAll("p");
  for (let i = 0; i < pTags.length; i++) {
    pTags[i].style.color = "var(--pink5)";
  }
  AddButtonListener("#no", NoClick);
  AddButtonListener("#yes", YesClick);
  paper.style.cursor = "auto";
  envelope.removeEventListener("click", EnvelopeClick);
}

// Helper Functions
function AddButtonListener(id, func) {
  let targetButton = document.querySelector(id);
  if (targetButton) {
    targetButton.addEventListener("click", func);
  } else {
    console.log(id, "not found for ", targetButton);
  }
}
async function TypeOn(idOfElement, textToWrite) {
  idOfElement.innerHTML = "";
  await sleep(500);
  for (let i = 0; i < textToWrite.length; i++) {
    idOfElement.innerHTML = idOfElement.innerHTML + textToWrite[i];
    await sleep(50);
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
