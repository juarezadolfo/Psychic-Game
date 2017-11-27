// variables-arrays
var psychicLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var youWin = 0;
var youLose = 0;
var guessesLeft = 8;
var guessedLetters = []; //Array to capture user letter input

document.onkeyup = function(event) {
  var yourGuess = event.key;
   //variable to capture user's guess
   
  guessedLetters.push(yourGuess); //Capture letters entered by the user    
  var psychicAns = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];
  //If your guess matches psychic's guess,
  //a point is added to the "Wins"/the "guesses remaining" restarts.
  if (yourGuess === psychicAns) {
    youWin++;
    guessesLeft = 8;
    guessedLetters = [];
    
  }
  //Doesn't match the psychic's guess, number of guesses remaining are deducted.
  else {
    guessesLeft--;
  }
  //If the guesses remaining equals 0, you lose, an increment is added to "Losses"/points restart.
  if (guessesLeft === 0) {
    youLose++;
    guessesLeft = 8;
    guessedLetters = [];

  }
  var html = "<p>Guess what letter I'm thinking of:</p>" +
    "<p>Wins: " + youWin + "</p>" +
    "<p>Loses: " + youLose + "</p>" +
    "<p>Guesses Remaining: " + guessesLeft + "</p>" +
    "<p>Guessed Letter: " + guessedLetters.join(', ') + "</p>" ; //Shows guessed letters
    
    document.getElementById("results").innerHTML = html;
}

// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f']

// document.onkeyup = function(){
//     var userguess = String.fromCharCode(event.keyCode).toLowerCase();

//     console.log(userguess);
// }




// if{

// }

// else {

// }

// if else {

// }

// alert("working!");

// I need the user to guess the letter 'I'm thinking'
// User has 8 chances to guess correctly
// Display the incorrect guesses made so far up through 8th guess
// Display the amount of guesses left before 8th and final choice
// if user guesses incorrectly after 8 tries, it's a "LOSS" and game resets
// If user guesses correctly at any time before or on the 8th guess, it's a "WIN" and game resets