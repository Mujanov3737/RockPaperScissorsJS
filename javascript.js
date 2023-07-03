const VALID_ACTIONS = ['rock', 'paper', 'scissors'];

// Returns the action the computer will take each round
function getComputerChoice() {
    return VALID_ACTIONS[(Math.floor(Math.random() * VALID_ACTIONS.length))]; 
}

console.log(getComputerChoice());