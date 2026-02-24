function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

console.log(getComputerChoice());

// Function getComputerChoice Completed!

function getHumanChoice() {
    const humanChoice = prompt("Rock, paper, scissors.");
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
    if (humanChoice === computerChoice) {
        return "It is a draw!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);