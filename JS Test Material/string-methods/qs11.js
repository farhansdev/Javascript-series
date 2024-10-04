// 11. Write a program that takes user input. Convert and 
// show the input in title case.

// var input = prompt("enter some text:");

// var titleCase = input.replace(/\w\S*/g, function(text) {
//     return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();

// });

// alert(titleCase)

var input= prompt("");

var title = input.replace(/\w\S*/g, function (text) {
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
})
alert(title)