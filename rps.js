function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function getComputerChoice Completed!

function getHumanChoice() {
    const input = prompt("Rock, paper, scissors.");
    return input.trim().toLowerCase();
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("Human:", humanSelection);
    console.log("Computer:", computerSelection);

    const result = playRound(humanSelection, computerSelection);
    console.log(result);
});

let humanScore = 0;
console.log("Your score is:", humanScore);

let computerScore = 0;
console.log("The computer\'s score is:", computerScore);

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It is a draw! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `You lost! ${computerChoice} beats ${humanChoice}`;
    }
}