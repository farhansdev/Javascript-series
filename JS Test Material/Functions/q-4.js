// Write a function that squares its argument.

function squares(number) { 
    return number * number
}

var num = +prompt("enter your number for getting squares");

var result = squares(num);

alert(`${num} square is: ${result}`);
