'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //when guess in not a number or 0
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number!';

    //when player wins
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'You won!';
    document.querySelector('.number').textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //CSS styling change
    document.querySelector('body').style.backgroundColor = '#ff9900';
    document.querySelector('body').style.color = 'black';
    document.querySelector('header').style.borderBottom = '5px solid black';
    document.querySelector('.number').style.border = '10px solid black';

    //when guess is not random number
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.color = 'white';
  document.querySelector('header').style.borderBottom = '5px solid white';
  document.querySelector('.number').style.border = '5px solid black';
});
