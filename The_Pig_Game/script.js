//players names
const newNamePlayer0 = prompt(
  `Give name of player 1.
  For anonymous name press 'OK'`
);
const newNamePlayer1 = prompt(
  `Give name of player 2. 
  For anonymous name press 'OK'`
);

if (newNamePlayer0 !== '') {
  document.querySelector('#name--0').textContent = newNamePlayer0;
}

if (newNamePlayer1 !== '') {
  document.querySelector('#name--1').textContent = newNamePlayer1;
}

//instructions for players
alert(`First player that scores 100 points wins.
Be careful! You will loose your current score when you will roll 1!
Good luck!`);

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

/*STARTING CONDITIONS */
let score, currentScore, activePlayer, playing;

const init = function () {
  //reset of scores
  playing = true;
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  //reset of scores display
  score0El.textContent = score[0];
  score1El.textContent = score[1];
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  //removing dice picture
  diceEl.classList.add('hidden');

  //reset of styling for players
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

//calling starting conditions
init();

/*SWITCH PLAYER */
const switchPlayer = function () {
  //reset of current score & display it
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  //change of active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  activePlayer = activePlayer === 1 ? 0 : 1;
};

/*ROLLING DICE*/
btnRoll.addEventListener('click', function () {
  if (playing) {
    //roll random number between 1 and 6
    const roll = Math.trunc(Math.random() * 6) + 1;
    //changing dice picture accordingly to random number
    diceEl.src = `dice-${roll}.png`;
    //making dice pic visible
    diceEl.classList.remove('hidden');
    console.log(roll);

    if (roll !== 1) {
      currentScore += roll;
      document.querySelector(
        `#current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to total score of active player
    score[activePlayer] += currentScore;
    //display new total score of active player
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      //locking buttons
      playing = false;
      //hide the dice
      diceEl.classList.add('hidden');
      //remove active-player styles
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      //add winner-player styles
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
