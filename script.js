let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
   let targetNumber = Math.floor(Math.random() * 10);
   return targetNumber;
};  // Generates a random integer between 0 and 9

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Input is out of range! Try again using a number between 0 and 9')
    }
    if (humanGuess != computerGuess) {
        humanGuessAbs = Math.abs(humanGuess - targetNumber)
        computerGuessAbs = Math.abs(computerGuess - targetNumber)
        if (humanGuessAbs < computerGuessAbs) {
            return true;
        } else {
            return false;
        }
    } else {
        return true
    }
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1 // Adds one to human score
    } else {
        computerScore += 1 // Adds one to computer score
    }
};

const advanceRound = () => {
    if (currentRoundNumber <=4) {
        if (humanScore <= 3 || computerScore <= 3) {
            currentRoundNumber ++
        } else {
            endGame();
        }
    } else if(currentRoundNumber > 4) {
        if (humanScore > 3 || computerScore > 3) {
            endGame();
        }
    }
};

const endGame = () => {
  const loseMessage=document.getElementById('lose');
  const winMessage=document.getElementById('win');
  const finalScoreW=document.getElementById('final-score-w');
  const finalScoreL=document.getElementById('final-score-l');
  if(humanScore>=4) {
    winMessage.style.display = 'block';
    finalScoreW.textContent= `Congratulations! Your score is ${humanScore}. The computer's score is ${computerScore}. If you want to restart the game, just reload the page.`;
  } else {
    loseMessage.style.display = 'block';
    finalScoreL.textContent= `The computer's score is ${computerScore}. Your score is ${humanScore}. If you want to restart the game, just reload the page.`;
  }
};