const VALID_ACTIONS = ['rock', 'paper', 'scissors'];

// Returns the action the computer will take each round
function getComputerChoice() {
    return VALID_ACTIONS[(Math.floor(Math.random() * VALID_ACTIONS.length))]; 
}

let scoreAI = 0;
let scorePlayer = 0;
let round = 1;
let gameover = false;
let result;

const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const choiceCpu = document.querySelector('.choice-cpu');
const scoreCpuNode = document.querySelector('.score-cpu');
const scorePlayerNode = document.querySelector('.score-player');
const roundResult = document.querySelector('.result');

// Wrapping event listeners so that the DOM is first parsed before this part of the script executes.
document.addEventListener('DOMContentLoaded', function() {
    
    btnRock.addEventListener('click', () => {
        result = playRound(getComputerChoice(), 'rock');
        checkRoundWin(result);
        roundResult.textContent = result.toUpperCase();
        scorePlayerNode.textContent = scorePlayer;
        scoreCpuNode.textContent = scoreAI;
    });

    btnPaper.addEventListener('click', () => {
        result = playRound(getComputerChoice(), 'paper');
        checkRoundWin(result);
        roundResult.textContent = result.toUpperCase();
        scorePlayerNode.textContent = scorePlayer;
        scoreCpuNode.textContent = scoreAI;
    });

    btnScissors.addEventListener('click', () => {
        result = playRound(getComputerChoice(), 'scissors');
        checkRoundWin(result);
        roundResult.textContent = result.toUpperCase();
        scorePlayerNode.textContent = scorePlayer;
        scoreCpuNode.textContent = scoreAI;
    });
});

// Plays a round of the game, returning win, lose, or draw
function playRound (computerChoice, playerChoice) {

    console.log(`Computer's choice is: ${computerChoice}`);
    console.log(`Player's choice is: ${playerChoice}`);

    choiceCpu.textContent = computerChoice.toUpperCase();

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

function checkRoundWin(result) {
    // Updates variables based on round result
    if (result === 'win') {
        scorePlayer += 1;
        round += 1;
    }
    else if (result === 'loss') {
        scoreAI += 1;
        round += 1;
    }
    else if (result === 'draw') {
        round += 1;
    }
}

// Prompts player for a choice, validates, and returns as lowercase string
// function getPlayerChoice() {

//     let chosen = false;
//     let playerChoice;

//     while(chosen != true) {

//         playerChoice = prompt("Please enter an action - rock, paper, or scissors:");

//         if (playerChoice === null) {
//             alert('Thank you for playing.');
//             return;
//         }
//         else if (VALID_ACTIONS.includes(playerChoice.toLowerCase())) {
//             chosen = true;
//             return playerChoice.toLowerCase();
//         }
//         else {
//             alert('Not a valid action, please try again.');
//             continue;
//         }
//     }
// }

// Compares score to win limit
// TODO: Add functionality for player to choose win limit, default to 5 currently
// function checkWin(scoreAI, scorePlayer) {
//     if (scoreAI === 5 ) {
//         alert('You Lose!')
//         return true;
//     }
//     else if (scorePlayer === 5 ) {
//         alert('You Win!')
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// Game function
// function game() {
    
//     // Main game loop
//     while (!gameover) {

//         // Checks win conditions
//         gameover = checkWin(scoreAI, scorePlayer);
        
//         console.log(`Round: ${round}`);
//         console.log(`---------------`);
//         console.log(`Player's Score: ${scorePlayer}`);
//         console.log(`Computer's Score: ${scoreAI}`);
//         console.log(`---------------`);
        
//         // Plays a round
//         let result = playRound(getComputerChoice(), getPlayerChoice());
//         console.log(`Result was a: ${result}`);
//         console.log('\n');

//         // Updates variables based on round result
//         if (result === 'win') {
//             scorePlayer += 1;
//             round += 1;
//             continue;
//         }
//         else if (result === 'loss') {
//             scoreAI += 1;
//             round += 1;
//             continue;
//         }
//         else if (result === 'draw') {
//             round += 1;
//             continue;
//         }
//     }
// }

//game();
