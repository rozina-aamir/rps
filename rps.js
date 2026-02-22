console.log("JS loaded");

var options = ["rock", "paper", "scissors"];
var choice = options[Math.floor(Math.random()*options.length)];

function getComputerChoice() {
    return Math.random() ;
}

console.log(choice);

// Function getComputerChoice Completed!

function getHumanChoice() {
    const humanChoice = prompt("Rock, paper, scissors.");

    if (humanChoice === "rock") {
        return "You win!";
    } else if (humanChoice === "paper") {
        return "It is a draw.";
    } else if (humanChoice === "scissors") {
        return "You lost!";
    } else {
        return "Please try again";
    }
    console.log("Function is running");
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const result = getHumanChoice();
    console.log(result);
});

console.log(button);
