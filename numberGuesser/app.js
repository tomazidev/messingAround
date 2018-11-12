// Game values
let min = 1,
    max = 10,
    winingNum = numGenerator(min, max),
    guessesLeft = 3;
// Get UI elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');
        

// Assign max and min values
minNum.textContent = min;
maxNum.textContent = max;

// Play Again
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess number
guessBtn.addEventListener('click', function (e) {
    let guess = parseInt(guessInput.value);
    // let hey = numGenerator();

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter number between: ${min} and ${max}`, 'red');
    }

    if (guess === winingNum) {
        gameOver(true, `${winingNum} is correct!, YOU WIN`);
    } else {
        guessesLeft--;
        if (guessesLeft === 0) {
            gameOver(false, `Game over! YOU LOST, wining number was ${winingNum}`);
        } else {
            // gameOver(false, `${guess} is not correct, ${guessesLeft} guesses left`);
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }

    e.preventDefault();
})

function numGenerator(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function gameOver(won, msg) {
    let color;
    won == true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    playAgain();


}

function playAgain () {
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
