let userScore = 0;
let cpuScore = 0;
let rounds = 0;
const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");
const narrator = document.querySelector('.narrator');
const scoreboard = document.getElementById('scoreboard');
const userPtDisplay = document.getElementById('user-score');
const CPUPtDisplay = document.getElementById('cpu-score');
const rdDisplay = document.getElementById('rounds');

function computerPlay() {
    let move = Math.random();
    if (move < 1/3) {
        return 'Rock';
    }
    else if (move < 2/3) {
        return 'Paper';
    }
    else return 'Scissors';
}

function capitalize(word) {
    let start = word.charAt(0);
    return start.toUpperCase() + word.substring(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    rounds++;
    let player = capitalize(playerSelection);
    let tie = 'Tie!  You both played ' + player;
    let win = 'You win! ' + player + ' beats the CPU\'s ' + computerSelection;
    let lose = 'You lose! CPU selected ' + computerSelection + ', which beats ' + player;

    switch (player) {
        case ('Rock'):
            if (computerSelection === 'Rock') {
                narrator.innerHTML = tie;
            }
            if (computerSelection === 'Paper') {
                cpuScore++;
                narrator.innerHTML = lose;
            }
            if (computerSelection === 'Scissors') {
                userScore++;
                narrator.innerHTML = win;  
            }
            break;
        case ('Paper'):
            if (computerSelection === 'Rock') {
                userScore++;
                narrator.innerHTML = win;
            }
            if (computerSelection === 'Paper') {
                narrator.innerHTML = tie;
            }
            if (computerSelection === 'Scissors') {
                cpuScore++;
                narrator.innerHTML = lose;  
            }
            break;
        case ('Scissors'):
            if (computerSelection === 'Rock') {
                cpuScore++;
                narrator.innerHTML = lose;
            }
            if (computerSelection === 'Paper') {
                userScore++;
                narrator.innerHTML = win;
            }
            if (computerSelection === 'Scissors') {
                narrator.innerHTML = tie;
            }
            break;
        default:
            return 'Invalid move!';
    }
    userPtDisplay.innerHTML = "User: " + userScore;
    CPUPtDisplay.innerHTML = "CPU: " + cpuScore;
    rdDisplay.innerHTML = "Rounds completed: " + rounds;

    if(cpuScore >= 5) {
        narrator.innerHTML = "Sorry! You have lost! Refresh to play again."
        rock.parentNode.removeChild(rock);
        paper.parentNode.removeChild(paper);
        scissors.parentNode.removeChild(scissors);
    }
    if(userScore >= 5) {
        narrator.innerHTML = "Congrats! You have won! Refresh to play again."
        rock.parentNode.removeChild(rock);
        paper.parentNode.removeChild(paper);
        scissors.parentNode.removeChild(scissors);
    }
}

rock.addEventListener("click", () => {
    playRound('rock', computerPlay())
});
paper.addEventListener("click", () => {
    playRound('paper', computerPlay())
});
scissors.addEventListener("click", () => {
    playRound('scissors', computerPlay())
});