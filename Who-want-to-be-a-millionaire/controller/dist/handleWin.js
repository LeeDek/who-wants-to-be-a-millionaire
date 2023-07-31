function displayMessage(message) {
    var messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = message;
    }
}
function handleWin() {
    try {
        if (stage === questionsArray.length - 1) {
            var messageElement = document.getElementById("message");
            if (messageElement) {
                messageElement.textContent = "You Just Won a Million Dollars!";
            }
            // Optionally, you can reset the game and show a "Play Again" button
            stage = 0;
            var playButton = document.getElementById("play");
            if (playButton) {
                playButton.style.display = "block";
            }
        }
        else {
            displayMessage("Correct answer! Proceeding to the next question");
            setTimeout(function () {
                loadNextQuestion();
            }, 1500);
        }
    }
    catch (error) {
        console.error(error);
    }
}
