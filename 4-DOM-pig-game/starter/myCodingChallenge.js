/**
 * Coding Challenge
 */
var scores, roundScore, activePlayer, dice, gamePlaying;
init();
var lastDice;


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        // 2. Display the result od dice 
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. Update the round score IF the rolled number was not a 1
        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

        /*if (dice === 6 && lastDice === 6) {
            //Player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            nextPlayer();
        }

        lastDice = dice;
*/
    }
}); // anonymous function withou name and we can use it only in this scope and no outside

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add current score to GLOBAL SCORE
        scores[activePlayer] += roundScore;


        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game

        var input = document.querySelector('.final-score').value;
        var winningScore;
        // Undefined, 0, null or " " COERCED to false
        //Anything else is coerced to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            hideDice();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }

});

function nextPlayer() { // DRY Don't repeat yourself! That is the reason for this function
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //this is the same like
    /*if (activePlayer === 0) {
        activePlayer = 1;
        document.querySelector('.player-0-panel').classList.remove('active'); //change active player
        document.querySelector('.player-1-panel').classList.add('active');
    } else {
        activePlayer = 0;
        document.querySelector('.player-0-panel').classList.add('active'); //change active player
        document.querySelector('.player-1-panel').classList.remove('active');
    }
    */
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';//start from 0 
    document.getElementById('current-1').textContent = '0';//start from 0
    document.querySelector('.player-0-panel').classList.toggle('active'); //change active player
    document.querySelector('.player-1-panel').classList.toggle('active');
    hideDice();

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() { // all things that happens before we start to play
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    hideDice();
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
function hideDice() {
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}