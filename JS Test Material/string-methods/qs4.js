// Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.
// Use string method to check inedexes

const lastIndex = "Hello World";

let checkIndex = lastIndex.lastIndexOf('l'); // lastIndexOf('') method = checking last indexing of 2x charactors in string

alert(`The last index in ${lastIndex} is on ${checkIndex}`)