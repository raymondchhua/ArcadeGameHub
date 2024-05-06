"use strict";

window.addEventListener("load", loadGame);
let startButton = document.getElementById("Start");
let cells = document.getElementsByClassName("cell");
let foodInterval;
let foodIndexes = [];
let started = false;
let currentSpot;
let faceCharacter;

function loadGame() {
    startButton.addEventListener("click", startGame);
}

function startGame() {
    if (started == false) {
        started = true;
        hideButton();
        faceCharacter = createFace();
        document.addEventListener("keydown", (event) => {
            console.log(faceCharacter)
            switch (event.code) {
                case "ArrowLeft":
                    if (currentSpot > 20) {
                        currentSpot -= 1;
                        cells[currentSpot].appendChild(faceCharacter);
                        
                    }
                    break;
                case "ArrowRight":
                    if (currentSpot < 24) {
                        currentSpot += 1;
                        cells[currentSpot].appendChild(faceCharacter);
                    }
                    break;
            }
        });
        foodInterval = setInterval(createFood, 1000);
    }
}

function createImg(type) {
    let img = document.createElement("img");
    img.width = "75";
    img.height = "75";
    switch (type) {
        case "burger":
            img.src = "burger_icon.png";
            img.alt = "burger";

            break;
        case "face":
            img.src = "face_icon.png";
            img.alt = "face"
            break;
    }
    return img;
}

function createFace() {
    let face = createImg("face");
    cells[22].appendChild(face);
    currentSpot = 22;
    return face;
}

function hideButton() {
    startButton.style.opacity = 0;
}

function dropFood() {
    if (foodIndexes.length > 0) {
        console.log(foodIndexes);
        let currentLength = foodIndexes.length
        for (let i=0; i < currentLength; i++) {
            let foodIndex = foodIndexes[i];
            let food = cells[foodIndex].firstElementChild;
            if (foodIndex < 15) {
                cells[foodIndex+5].appendChild(food);
                foodIndexes.push(foodIndex+5);
            } else {
                cells[foodIndex].removeChild(food);
            }
        }
        for (let i=0; i < currentLength; i++) {
            foodIndexes.shift();
        }
    }
}

function createFood() {
    dropFood();
    let food = createImg("burger");
    let row = Math.floor(Math.random() * 4);
    cells[row].appendChild(food);
    foodIndexes.push(row);
}