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

function getHumanChoice() {
    return prompt("Rock, paper, or scissors");
}

console.log(prompt);