function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

console.log(getComputerChoice());

// Function getComputerChoice Completed!

function getHumanChoice() {
    return prompt("Rock, paper, scissors.");
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
console.log(humanScore);

let computerScore = 0;
console.log(computerScore);

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It is a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lost!";
    }
}

console.log(playRound());