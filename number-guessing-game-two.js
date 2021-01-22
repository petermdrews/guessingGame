function runGame() {
  /* generate a random number */
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let stringGuess = '';
  let numberGuess = 0;
  let numTries = 0;

  while (numberGuess !== randomNumber) {
    stringGuess = prompt("Guess a number between 1 and 100");
    numberGuess = Number(stringGuess);
    numTries += 1;
    if (isNaN(numberGuess)) {
        alert('You didn\'t guess a number ya shit!\n\nGuess a number between 1 and 100');
    } else if ((numberGuess > 100) || (numberGuess < 1)) {
        alert('I said between 1 and 100 you shit!\n\nGuess a number between 1 and 100');
    } else if (numberGuess > randomNumber) {
        alert('Your guess was toooooo high! Try again');
    } else if (numberGuess < randomNumber) {
        alert('Your guess was toooooo low! Try again');
    }
  } alert('Winner winner chicken dinner!\n\nThe number was ' + randomNumber + ' and it took you ' + numTries + ' tries to guess correctly.')
}
