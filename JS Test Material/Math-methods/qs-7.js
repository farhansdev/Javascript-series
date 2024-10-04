// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// const { parse } = require("qs");

var kgs = document.getElementById("kgs");

var userweight = prompt("Enter your weight in kilograms")

 var userW = parseFloat(userweight)

 document.write(`Your weight is ${userW}Kgs`)