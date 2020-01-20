// Game Variables

let min = 1, max = 10, winningNum = getRandomNum(min, max), guessesLeft = 3;

// UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again Event Listener
game.addEventListener('mousedown', function (e) { 
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () { 
    let guess = parseInt(guessInput.value);
    console.log(guess);

    // valiate input
    if(isNaN(guess) || guess < min || guess > max ){
        setMessage(`please enter a number between ${min} and ${max}`, 'red');
    }

    // check if won
    if(guess === winningNum){
        // Game Over - WON
        console.log('check if won');

        // // disbale input
        // guessInput.disabled = true;
        // // set input border color
        // guessInput.style.borderColor = 'green';
        // // set message
        // setMessage(`${winningNum} is Correct, YOU WIN!`, 'green');

        gameOver(true, `${winningNum} is Correct, YOU WIN!`);
    }else{
        // Wrong Number
        guessesLeft -= 1;
                
        if(guessesLeft === 0){
            // Game Over - LOST
            
            // guessInput.disabled = true;
            // // set input border color
            // guessInput.style.borderColor = 'red';
            // // set message
            // setMessage(`Game Over, you lost. The Correct Number Was ${winningNum}`, 'red');

            gameOver(false, `Game Over, you lost. The Correct Number Was ${winningNum}`);            
        }else{
            // Game Continues - answer wron            

            // Clear the input 
            guessInput.value = '';

            // let know user how many guesses left
            setMessage(`${guess} is not Coreect, ${guessesLeft} guesses lest`, 'red');
        }
    }
    
 });

//  game over function
function gameOver(won, msg) { 
    let color;
    won === true ? color = 'green': color = 'red';

    // disbale input
    guessInput.disabled = true;
    // set input border color
    guessInput.style.borderColor = color;
    // set message and message color
    setMessage(msg);
    message.style.color = color;

    // Play Again ?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Random Winning Number
function getRandomNum(min, max) { 
    return Math.floor(Math.random()*(max-min+1)+min);
}

//  set message function
 function setMessage(msg, color) { 
    // set border color
    message.style.color = color;
    // set messege
    message.textContent = msg;
}