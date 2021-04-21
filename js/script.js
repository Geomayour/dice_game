var scores, roundScores, activePlayer, dice;

scores = [0, 0];
roundScores = 0;
activePlayer = 0;

document.getElementById('dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

// roll dice
document.querySelector('.btn-roll').addEventListener('click', function () {
    // generate the random number
    dice = Math.floor(Math.random() *6) +1;

    // assign the rondom number to variable
    var diceDom = document.querySelector('#dice');
    diceDom.style.display = 'block';

    // peg the dice to the image to roll img
    diceDom.src = 'img/dice-' + dice + '.png';

    // give it a conditon to get the dice and Add it together

    if (dice !== 1) {
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    }else{
        nextPlayer();
    }


});

// add to score

document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += roundScores;

    // update the active scores
    document.querySelector('#score-' + activePlayer).innerHTML = scores[activePlayer];

    // update the next player
    nextPlayer()
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    if (activePlayer === 1) {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
    }else{
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');

        document.querySelector('#dice').style.display = 'none';
    }
}