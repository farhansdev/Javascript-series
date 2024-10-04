var a = 2, b = 1;
var result = --a - --b + ++b //+ b--;
console.log(result);
// --a = 1
// --a - --b = 1                     // --b = 0
// --a - --b + ++b = 2              // ++b = 1
// --a - --b + ++b + b-- = 3       // b-- = 1

// Initialize array with color names
let colors = ['Red', 'Green', 'Blue'];

// Display the initial array in the browser
document.write('Initial array: ' + colors.join(', ') + '<br>');

// Ask the user for a color to add to the beginning of the array
// let userColor = prompt('What color would you like to add to the beginning?');

// Add the user's color to the beginning of the array
// colors.unshift(userColor);

// Display the updated array in the browser
document.write('Updated array: ' + colors.join(', ') + '<br>');

// Ask user for a color to add to the end of the array
// let endColor = prompt('What color would you like to add to the end?');

// colors.push(endColor);

document.write('adding color at the end of array: ' + colors.join(' ,') + '<br>')

let scores = [550,350,290,705,200,330]
scores.sort()
document.write("Sorting the array scores: " + scores, '<br>')

let cities = ["karachi","lahore","islamabad","quetta","peshawar"];
document.write("Cities: " + cities, '<br>')

let selectedCities = 
cities.slice(2,4);
document.write("selected cities: " + selectedCities + '<br>')

var arr = ['This', 'is', 'my' ,'cat'];
let join = 
arr.join(' ')
document.write(join + '<br>')