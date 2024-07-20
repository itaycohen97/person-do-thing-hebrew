document.addEventListener("DOMContentLoaded", () => {
  let wordList = ["משקפיים", "חריף", "קרח"];

  const targetWordSpan = document.getElementById("target-word-span");
  const newWordButton = document.getElementById("new-word-button");
  const howToPlayButton = document.getElementById("how-to-play-button");
  const howToPlayInstructions = document.getElementById(
    "how-to-play-instructions"
  );

  const shuffleWord = () => {
    targetWordSpan.innerText =
      wordList[Math.floor(Math.random() * wordList.length)];
  };

  newWordButton.addEventListener("click", () => {
    shuffleWord();
  });

  howToPlayButton.addEventListener("click", () => {
    console.log("clickity");

    document
      .querySelector(".right-triangle")
      .classList.toggle("right-triangle--open");

    howToPlayInstructions.classList.toggle("hidden");
  });

  fetch("assets/words.txt")
    .then((response) => response.text())
    .then((content) => {
      wordList = content.split("\n").filter((word) => word.trim().length !== 0);
      shuffleWord();
    });
});
