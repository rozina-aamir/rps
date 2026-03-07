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
    playGame();
});

let humanScore = 0;
console.log("Your score is:", humanScore);

let computerScore = 0;
console.log("The computer\'s score is:", computerScore);

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return `It is a draw! You both chose ${humanChoice}`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")
        ) {
        humanScore++;
        console.log(`Your score is: ${humanScore}`);
        return `You win! ${humanChoice} beats ${computerChoice}`;

        } else {
            computerScore++;
            console.log(`The computer\'s score is: ${computerScore}`);
            return `You lost! ${computerChoice} beats ${humanChoice}`;
        }
    }

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    console.log(result);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    console.log(result);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    console.log(result);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    console.log(result);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    result = playRound(humanSelection, computerSelection);
    console.log(result);

    console.log("Final Scores:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);
}