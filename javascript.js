const VALID_ACTIONS = ['rock', 'paper', 'scissors'];

// Returns the action the computer will take each round
function getComputerChoice() {
    return VALID_ACTIONS[(Math.floor(Math.random() * VALID_ACTIONS.length))]; 
}

function getPlayerChoice() {

    let chosen = false;
    let playerChoice;

    while(chosen != true) {

        playerChoice = prompt("Please enter an action - rock, paper, or scissors:");

        if (playerChoice === null) {
            alert('Thank you for playing.');
            return;
        }
        else if (VALID_ACTIONS.includes(playerChoice.toLowerCase())) {
            chosen = true;
            return playerChoice.toLowerCase();
        }
        else {
            alert('Not a valid action, please try again.');
            continue;
        }
    }
}

function playRound (computerChoice, playerChoice) {

    console.log(`Computer's choice is: ${computerChoice}`);
    console.log(`Player's choice is: ${playerChoice}`);

    if (playerChoice === computerChoice) {
        return 'tie';
    }
    else if (playerChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'loss';
        }
        else {
            return 'win';
        }
    }
    else if (playerChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'loss';
        }
        else {
            return 'win';
        }
    }
    else if (playerChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'loss';
        }
        else {
            return 'win';
        }
    }
}

let result = playRound(getComputerChoice(), getPlayerChoice());
console.log(result);