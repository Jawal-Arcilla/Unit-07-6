document.getElementById('button').addEventListener('click', age)

const number = 5
let guess = 0

function age () {
  guess = document.getElementById('button').value
  guess = parseInt(guess)

  while (guess !== number) {
    guess = prompt('Guess a number between 1 and 10')

    if (guess >= 6) {
      document.getElementById('answer').innerHTML = 'You guessed too high.'
  }   else if (guess <= 4) {
      document.getElementById('answer').innerHTML = 'You guessed too low.'
  }   else {
      document.getElementById('answer').innerHTML = 'You guessed the right number!'
    }
  }
}
