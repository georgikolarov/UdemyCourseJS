/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*Math.random() * 5
Math.floor(decimal 5.6) that give integer number
Math.floor(Math.random() * 5) that give number integer random number between 0 and 5
Math.floor(Math.random() * 5) + 1 that give random integer number between 1 and 5
*/

var scores, roundScore, activePlayer, dice;
init();

//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//DOM Manipulation
//select elements from all css - querySelector
// to change the content have two ways - textContent(only set text no HTML)
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


//var x = document.querySelector('#current-' + activePlayer).textContent; // save the result in variable
//console.log(x);

//document.querySelector('.dice').style.display = 'none';
//document.getElementById is faster than querySelector
/* different ways to select
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/





document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result od dice
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was not a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        nextPlayer();
    }
}); // anonymous function withou name and we can use it only in this scope and no outside

document.querySelector('.btn-hold').addEventListener('click', function () {
    // Add current score to GLOBAL SCORE
    scores[activePlayer] += roundScore;


    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // Next player
        nextPlayer();
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

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() { // all things that happens before we start to play
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
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