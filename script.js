'use strict';

// document is a object.
// HTML ELEMENTS ARE OBJECTS.

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'siddhi 👧🥳🥂';
console.log(document.querySelector('.message'));

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

// Game logic Implementation

let ranNumber = Math.trunc(Math.random() * 20) + 1; // value between 1-20.
let score = 20;
let highScore = 0;
console.log(ranNumber); // EXTRA

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // document.querySelector('.number').textContent = ranNumber;

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!!');
  }
  // when input is same as randum Number
  else if (guess === ranNumber) {
    displayMessage('Correct Number🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = ranNumber;

    // for highScore
    if (score > highScore) highScore = score;
    console.log('score' + score); //extra
    document.querySelector('.highscore').textContent = highScore;
  }
  // refactoring code
  else if (guess !== ranNumber) {
    if (score > 1) {
      displayMessage(guess > ranNumber ? '📈💹 Too High!!! ' : '📉 Too Low!!!'); //calling function using parameter (expression)
      // document.querySelector('.message').textContent =
      // guess > ranNumber ? '📈💹 Too High!!! ' : '📉 Too Low!!!'; //we used ternary operator understand it duplicate
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game💥');
      document.querySelector('.score').textContent = 0;
    }
  }

  /* DUPLICATE
  // when is too high
  else if (guess > ranNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!!! 📈💹';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game💥';
      document.querySelector('.score').textContent = 0;
    }
  }

  // when is too low
  else if (guess < ranNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!!! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game💥';
      document.querySelector('.score').textContent = 0;
    }
  } */
});
// challenge - reset functinality button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ranNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(ranNumber); // extra
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
