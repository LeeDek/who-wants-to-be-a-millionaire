let audioPlayed = false; // Flag to track if audio has played

function playSound() {
  console.log("Trying to play audio...");
  const audio = new Audio("./ts/dist/intro.mp3");
  audio
    .play()
    .then(() => console.log("Audio played successfully!"))
    .catch((error) => console.error("Error playing audio:", error));
}

const playButton = document.getElementById("play");
playButton.addEventListener("click", playSound);
