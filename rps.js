console.log("Hello World");

// Logic To Get Computer Choice
//
// Computer will randomly return rock, paper, or scissors
//
// Use Math.random to get Computer Choice
//
// Log the result to the console

var options = ["rock", "paper", "scissors"];
var choice = options[Math.floor(Math.random()*options.length)];

function getComputerChoice() {
    return Math.random() ;
}

console.log(options);