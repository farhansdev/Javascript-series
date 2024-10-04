// . Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";

var split = university.split(" ");

document.write(`split method convert string data into array ${split}`)

var usrInput = prompt("enter any name or sentence")

var lastInd = usrInput.charAt(usrInput.length -1)

document.write("User Input : " + usrInput + "<br />")
document.write("Last charractor of input : " + lastInd)