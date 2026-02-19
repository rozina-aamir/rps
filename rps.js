console.log("JS loaded");

var options = ["rock", "paper", "scissors"];
var choice = options[Math.floor(Math.random()*options.length)];

function getComputerChoice() {
    return Math.random() ;
}

console.log(choice);

// Function getComputerChoice Completed!

function getHumanChoice() {
    return prompt("Rock, paper, scissors.");
}

playButton.addEventListener("click", () => {
    const humanChoice = getHumanChoice();
    console.log(humanChoice);
});

if getHumanChoice() = "rock" {
    return "You win!";
} else if getHumanChoice() = "paper" {
    return "It is a draw.";
} else if getHumanChoice() = "scissors" {
    return "You lost!";
} else {
    return "Please try again";
}