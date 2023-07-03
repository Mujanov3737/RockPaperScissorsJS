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

// Game function
function game() {
    
    let scoreAI = 0;
    let scorePlayer = 0;
    let round = 1;
    let gameover = false;
    
    // Main game loop
    while (!gameover) {

        // Checks win condition
        if (scoreAI === 5 ) {
            alert('You Lose!')
            gameover = true;
        }
        else if (scorePlayer === 5 ) {
            alert('You Win!')
            gameover = true;
        }
        
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

game();
