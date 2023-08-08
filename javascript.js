const VALID_ACTIONS = ['rock', 'paper', 'scissors'];

// Returns the action the computer will take each round
function getComputerChoice() {
    return VALID_ACTIONS[(Math.floor(Math.random() * VALID_ACTIONS.length))]; 
}

// Prompts player for a choice, validates, and returns as lowercase string
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

// Plays a round of the game, returning win, lose, or draw
function playRound (computerChoice, playerChoice) {

    console.log(`Computer's choice is: ${computerChoice}`);
    console.log(`Player's choice is: ${playerChoice}`);

    if (playerChoice === computerChoice) {
        return 'draw';
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

// Compares score to win limit
// TODO: Add functionality for player to choose win limit, default to 5 currently
function checkWin(scoreAI, scorePlayer) {
    if (scoreAI === 5 ) {
        alert('You Lose!')
        return true;
    }
    else if (scorePlayer === 5 ) {
        alert('You Win!')
        return true;
    }
    else {
        return false;
    }
}

// Game function
function game() {
    
    let scoreAI = 0;
    let scorePlayer = 0;
    let round = 1;
    let gameover = false;
    
    // Main game loop
    while (!gameover) {

        // Checks win conditions
        gameover = checkWin(scoreAI, scorePlayer);
        
        console.log(`Round: ${round}`);
        console.log(`---------------`);
        console.log(`Player's Score: ${scorePlayer}`);
        console.log(`Computer's Score: ${scoreAI}`);
        console.log(`---------------`);
        
        // Plays a round
        let result = playRound(getComputerChoice(), getPlayerChoice());
        console.log(`Result was a: ${result}`);
        console.log('\n');

        // Updates variables based on round result
        if (result === 'win') {
            scorePlayer += 1;
            round += 1;
            continue;
        }
        else if (result === 'loss') {
            scoreAI += 1;
            round += 1;
            continue;
        }
        else if (result === 'draw') {
            round += 1;
            continue;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const btnRock = document.querySelector('.btn-rock');
    const btnPaper = document.querySelector('.btn-paper');
    const btnScissors = document.querySelector('.btn-scissors');

    btnRock.addEventListener('click', () => {
        alert("Rock was chosen");
    });

    btnPaper.addEventListener('click', () => {
        alert("Paper was chosen");
    });

    btnScissors.addEventListener('click', () => {
        alert("Scissors was chosen");
    });
});

//game();
