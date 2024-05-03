"use strict";

window.addEventListener("load", startGame);

let resultText = document.getElementById("resultText");
let resultImg = document.getElementById("img");
let flipButton = document.getElementById("flip");
let degrees = 0;
let spinInterval;
let invertInterval;
let lastResult = null;
let clicked = false;

function startGame() {
    flipButton.addEventListener("click", playAnimation);
}

function playAnimation() {
    if (clicked != true) {
        clicked = true;
        if (lastResult != null) {
            resetResult();
        }
        spinInterval = setInterval(rotateImg, 5);
        invertInterval = setInterval(changeImg, 225);
        setTimeout(stopAnimation, 2225);
    }   
}

function stopAnimation() {
    clearInterval(spinInterval);
    clearInterval(invertInterval);
    resetImgRotation();
    displayResult();
    clicked = false;
}

function rotateImg() {
    if (degrees >= 360) {
        degrees == 0;
    }
    degrees += 5;
    resultImg.style.transform = "rotate(" +degrees+"deg)";
}
function resetImgRotation() {
    degrees = 0
    resultImg.style.transform = "rotate(" +degrees+"deg)";
}

function changeImg() {
    if (lastResult == "Heads") {
        lastResult = "Tails"
        resultImg.src = "face_icon_inverted.png";
    } else {
        lastResult = "Heads"
        resultImg.src = "face_icon.png";
    }
}

function resetResult() {
    resultText.textContent = "";
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
    lastResult = resultText.textContent;
    console.log(resultImg.src)
}