// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

var guess = document.getElementById("guessed");

var compare = Math.random() * 10;
var round = Math.round(compare)
console.log(round);

var userInput = prompt("Enter number between 1 - 10");

if (userInput == round) {
    // console.log("Congratulations! you guess the correct number")
    guess.innerHTML = "Congratulations, you guessd correct number"
}else {
    // console.log("oops! Try again")
    guess.innerHTML = "Oops! Try again"
}