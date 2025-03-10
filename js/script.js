document.addEventListener("DOMContentLoaded", () => {
  let wordList = ["ברק שמש"];

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

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

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

  delay(1000).then(() =>
    fetch("assets/words.txt")
      .then((response) => response.text())
      .then((content) => {
        wordList = content
          .split("\n")
          .filter((word) => word.trim().length !== 0);
        shuffleWord();
      })
  );
});
