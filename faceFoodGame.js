"use strict";

window.addEventListener("load", loadGame);
let startButton = document.getElementById("Start");
let foodInterval;

function loadGame() {
    startButton.addEventListener("click", startGame);
}

function startGame() {
    foodInterval = setInterval(createImg, 1000)
}

function createImg() {
    let food = new Image;
}
