// Create a secretNumber
var secretNumber = 4;
var guess;

while (guess !== secretNumber){
    // Prompt for guessing
    var guessStr = prompt("Guess a number: ");
    var guess = Number(guessStr);
    
    // Check
    
    if (guess === secretNumber) {
        alert("You got it right!");
    } else if (guess > secretNumber) {
        alert("Too high!");
    } else {
        alert("Too low!");
    }
}