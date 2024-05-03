"use strict";

window.addEventListener("load", loadGame);
let startButton = document.getElementById("Start");
let cells = document.getElementsByClassName("cell");
console.log(cells);
let foodInterval;

let started = false;

function loadGame() {
    startButton.addEventListener("click", startGame);
}

function startGame() {
    if (started == false) {
        started = true;
        hideButton();
        foodInterval = setInterval(createFood, 1000);
    }
}

function hideButton() {
    startButton.style.opacity = 0;
}

function dropFood() {
    for (let i=0; i < cells.length - 5; i++) {
        let food = cells[i].firstElementChild
        if (food != null) {
            console.log(i);
            cells[i+5].appendChild(food);
        }
    }
}
function createFood() {
    dropFood();
    let food = document.createElement("img");
    food.src = "burger_icon.png";
    food.alt = "burger";
    food.width = "75";
    food.height = "75";

    let row = Math.floor(Math.random() * 4);
    cells[row].appendChild(food);
}