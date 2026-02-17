console.log("JS loaded");

var options = ["rock", "paper", "scissors"];
var choice = options[Math.floor(Math.random()*options.length)];

function getComputerChoice() {
    return Math.random() ;
}

console.log(choice);

// Function getComputerChoice Completed!

//

// Write the logic to getHumanChoice

// 1. The user will enter either rock, paper, or scissors through a prompt

// 2. If the result is rock, paper, OR scissors, then return the input

// 3. Otherwise, don't return anything

// Log the prompt to the console

function getHumanChoice(_play) {
    const playButton = document.querySelector("#playButton");
    const log = document.querySelector("#log");

        function play() {
            playButton.addEventListener("click", () => {
                var play = window.prompt("Rock, paper, or scissors.");

                if (play = "rock") {
                    log.innerText = "You won!";
                } else if (play = "paper") {
                    log.innerText = "It's a draw.";
                } else if (play = "scissors") {
                    log.innerText = "You lost.";
                } else {
                log.innerText = "Try again";
                }
            });
        }
}

getHumanChoice();