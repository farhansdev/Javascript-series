// CHAPTER - 5

let num1 = 5;
let num2 = 3;

let add = num1 + num2;
document.write(`<p>sum of ${num2} and ${num1} is ${add}</p>`);

let sub = num2 - num1;
document.write(`<p>subs of ${num2} and ${num1} is ${sub}</p>`);

let multi = num1 * num2;
document.write(`<p>multi of ${num2} and ${num1} is ${multi}</p>`);

let div = num1 / num2;
document.write(`<p>divi of ${num2} and ${num1} is ${div}</p>`);

// decalared value
let value =  undefined
document.write(`<p>Value after variable declaration is ${value}`)
// initial value
value = 5;
document.write(`<p>after initialize value ${value}`)
value += 1;
document.write(`<p>Value after increment is: ${value}`)
value = value + 7
document.write(`<p>Value after addition is: ${value}`)
value -= 1
document.write(`<p>Value after decrement is: ${value}`)
value = value % 2
document.write(`<p>The remainder is: ${value}</p>`)


// let ticket = 600;
// let byuer = +prompt("enter tickets amount");

// let total = byuer * ticket
// document.write(`<p>Total cost to buy ${byuer} tickets to a movie is ${total}Pkr</p>`)


// let table = +prompt("enter your desire table")

// for (let i = 1; i <= 10; i++) {
//     document.write(`<p>${table}  x  ${i} = ${table*i}</p>`)

// }

// Temprature Converter Program

// let celsius = +prompt("convert Celsius temprature into Fahrenhiete");
// let farnheite = (celsius * 9/5) + 32;

// document.write(`<p>${celsius}°C is ${farnheite}°F</p>`);

// let fahrenhiet = +prompt("convert Fahrenhiete temprature into Celsius");
// let celsus = (fahrenhiet - 32) * 5/9;

// document.write(`<p>${fahrenhiet}°F is ${celsus}°C</p>`)

// Shopping Cart 

// let item1 = +prompt("enter item 1")
// let price1 = 650;
// let item2 = +prompt("enter item 2")
// let price2 = 100
// let quantity = +prompt("enter quantinty of item 1")

// document.write(`<p>price of item ${item1} is ${item1*price1}</p>`)
// document.write(`<p>Quantity of item ${item1} is ${quantity}</p>`)
// document.write(`<p>price of item ${item2} is ${item2*price2}</p>`)
// document.write(`<p>quantity of item ${item2} is ${quantity}</p>`)

// Mark sheet

let totalMarks = 1100
let obtained = 896;
let percentage = obtained / totalMarks * 100
console.log(percentage);

// Currency Converter 

let us$1 = 286, sryal = 76
let pkr = 1 
pkr = us$1 * pkr
console.log(pkr); 