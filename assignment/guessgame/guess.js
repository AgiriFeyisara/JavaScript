function guessNumber(guess) {
  let randomNum = Math.floor(Math.random() * 100 + 1);

  if (guess > randomNum) {
    return "Oops, guess is too high";
  } else if (guess < randomNum) {
    return "Oops, guess is too low";
  } else {
    return "Congratulations, you guessed right!!!";
  }
}
let finalGuess = guessNumber(15);
console.log(finalGuess);
