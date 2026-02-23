function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

console.log(choices);

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
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const result = getHumanChoice();
    console.log(result);
});

let humanScore = 0;
console.log(humanScore);

let computerScore = 0;
console.log(computerScore);

function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);