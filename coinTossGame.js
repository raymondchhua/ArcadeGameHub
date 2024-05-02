let resultText = document.getElementById("resultText");
let resultImg = document.getElementById("resultImg");
let flipButton = document.getElementById("button");

startGame();

function startGame() {
    flipButton.addEventListener("click", displayResult);
}
function displayResult() {
    if (Math.floor(Math.random() * 2) > 0) {
        resultImg.src = "face_icon.png";
        resultText.textContent = "Heads";
        resultText.style.color = "white";
        
    } else {
        resultImg.src = "face_icon_inverted.png";
        resultText.textContent = "Tails";
        resultText.style.color = "black";
        
    }
}