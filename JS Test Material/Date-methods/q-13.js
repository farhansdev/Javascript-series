// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// Prompt the user for their age
// const userAge = prompt("enter your age:");
const date = new Date()
console.log(date)
const userAge =  2004-12-24
console.log(userAge)

// Get the current year
const currentYear = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}  `
console.log(currentYear)

// Calculate the birth year
const birthYear = currentYear - userAge;


// Show the birth year in an alert
console.log("Your age is: " + birthYear)
// alert("Your age is : " + birthYear)