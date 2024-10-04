// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&"); // replaces all occurrencess with this logic in js

// console.log("Before : " + message + "<br/>")
// console.log("Replace and into '&' : " + newMessage)

// let messag = "Ali and Sami are best friends. They play cricket and football together."

// let and = messag.replace("and", "&")

// console.log(and)

let msg = "Ali and Sami are best friends. They play cricket and football together.";
let global = msg.replace(/and/g,"&");
let block = msg.replace("and", "&")
console.log(block)
console.log(global)