const VALID_ACTIONS = ['rock', 'paper', 'scissors'];
const WINNING_COMBOS = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

const WIN = 'win';
const LOSS = 'loss';
const DRAW = 'draw';

// Returns the action the computer will take each round
function getComputerChoice() {
    return VALID_ACTIONS[(Math.floor(Math.random() * VALID_ACTIONS.length))]; 
}

let aiScore  = 0;
let playerScore = 0;
let round = 1;
let result;

const aiChoiceElement = document.querySelector('.choice-cpu');
const aiScoreElement  = document.querySelector('.score-cpu');
const playerScoreElement = document.querySelector('.score-player');
const roundResultElement  = document.querySelector('.result');

// Wrapping event listeners so that the DOM is first parsed before this part of the script executes.
document.addEventListener('DOMContentLoaded', () => {
    VALID_ACTIONS.forEach(action => {
        document.querySelector(`.btn-${action}`).addEventListener('click', () => {
            playAndDisplayRound(action);
        });
    });
});

// Handles logic for updating the view and checking the win result
function playAndDisplayRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(computerChoice, playerChoice);

    checkRoundWin(result);
    roundResultElement.textContent = result.toUpperCase();
    playerScoreElement.textContent = playerScore;
    aiScoreElement.textContent = aiScore;
}

// Plays a round of the game, returning win, lose, or draw
function playRound (computerChoice, playerChoice) {

    console.log(`Computer's choice is: ${computerChoice}`);
    console.log(`Player's choice is: ${playerChoice}`);

    aiChoiceElement.textContent = computerChoice.toUpperCase();

    if (playerChoice === computerChoice) {
        return DRAW;
    }
    if (WINNING_COMBOS[playerChoice] === computerChoice) {
        return WIN;
    }
    return LOSS;
}

function checkRoundWin(result) {
    // Updates variables based on round result. TODO add rounds
    if (result === WIN) {
        playerScore += 1;
        round += 1;
    }
    else if (result === LOSS) {
        aiScore += 1;
        round += 1;
    }
    else if (result === DRAW) {
        round += 1;
    }
}