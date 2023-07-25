function validateNumber(number, numToGuess) {
    // console.log('validateNumber.. ', number, numToGuess);
    if (number == numToGuess){
        return 0;
    }
    else{
        if(isNaN(number)){
            return 1 ;
        }
        else if(number < numToGuess){
            return 2;
        }
        else if(number > numToGuess){
            return 3
        }
    }
}

function playGuessingGame(numToGuess, totalGuesses=10) {
    let numGuesses = 0;
    let number = Number(prompt("Enter a number between 1 and 100"));
    // console.log(numToGuess, totalGuesses, number, numGuesses);
    while (numGuesses < totalGuesses) {
        numGuesses++ ; // totalGuesses--;
        verdict = validateNumber(number, numToGuess)
        if (verdict == 0 ){
            return numGuesses;
        }
        else if (verdict == 1 && numGuesses < totalGuesses){
            number = prompt("Please enter a number");
        }
        else if (verdict == 2 && numGuesses < totalGuesses) {
            number = prompt("X is too small. Guess a larger number.");
        }
        else if (verdict == 3 && numGuesses < totalGuesses) {
            number = prompt("X is too large. Guess a smaller number.");0
        }
    }
    return 0;
}

//console.log(playGuessingGame(10, 4));
//console.log(playGuessingGame(5));