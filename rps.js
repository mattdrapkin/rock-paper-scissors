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
    let player = capitalize(playerSelection);
    let tie = 'Tie!  You both played ' + player;
    let win = 'You win! ' + player + ' beats ' + computerSelection;
    let lose = 'You lose! ' + computerSelection + ' beats ' + player;

    switch (player) {
        case ('Rock'):
            if (computerSelection === 'Rock') {
                return tie;
            }
            if (computerSelection === 'Paper') {
                return lose;
            }
            if (computerSelection === 'Scissors') {
              return win;  
            }
            break;
        case ('Paper'):
            if (computerSelection === 'Rock') {
                return win;
            }
            if (computerSelection === 'Paper') {
                return tie;
            }
            if (computerSelection === 'Scissors') {
              return lose;  
            }
            break;
        case ('Scissors'):
            if (computerSelection === 'Rock') {
                return lose;
            }
            if (computerSelection === 'Paper') {
                return win;
            }
            if (computerSelection === 'Scissors') {
                return tie;  
            }
            break;
        default:
            return 'Invalid move!';
    }
}

function game() {
    let input = prompt("Rock, Paper, Scissors, SHOOT!  Your move:");
    for (let i = 0; i < 5; i++) {
        console.log(playRound(input, computerPlay()));
    }
}

game();