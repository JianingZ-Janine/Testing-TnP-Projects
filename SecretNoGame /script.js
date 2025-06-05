let secretNumber = Math.floor(Math.random() * 101);// Generates a random integer between 0 and 100
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function () {
    // Get the user's guess and increment the attempt count
    let userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    //check if the input is a valid number
    if (isNaN(userGuess)) {
        document.getElementById('resultMessage').textContent = 'Please enter a valid number.';
        return;
    }

    if (userGuess === secretNumber) {
        document.getElementById('resultMessage').textContent = 'Congratulations! You guessed the secret number in ' + attempts + ' attempts.';
    } else if (userGuess < secretNumber) {
        document.getElementById('resultMessage').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('resultMessage').textContent = 'Too high! Try again.';
    }
});
