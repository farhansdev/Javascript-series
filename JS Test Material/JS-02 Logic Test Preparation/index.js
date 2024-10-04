// logic assignment one
alert("welcome to Javascript land!")

alert("please enter a valid password number")

alert("welcome to \n\ disney land")

alert("hello Assalamo alaikum")

// logic assignment two
var useName;
var myName = "farhan ali";
var message = "Hello world";
alert(message);

let studentName = "Sonu";
let sonuAge = 18;
let sonuCourse = "Web development";
alert(studentName)
alert(sonuAge)
alert(sonuCourse)

var fastFood = "PIZZA\n\ PIZZ\n\ PIZ\n\ PI\n\ P";
alert(fastFood)

var email = "example@gmail.com";
alert("My email address is " + email)

var book = "A Smarter Way To Learn Javascript";
alert("I am trying to learn from " + book)

document.write("Yah! I can write Html through Js in Bowser.");

let design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
document.write(design)

// variables for Numbers
let myAge = 19;
alert("My is " + myAge + " year old")

var visitedSite = 12;
alert("You have visited " + visitedSite + " times to this site.")

var birthYear = 2004;
document.write(`My Birth Year was ${birthYear} <br /> Data type of my declared variable is ${typeof birthYear}`);

let customer = "Charli";
let product = "T(shirts)";
let orderd = 5;

document.write(`${customer} ordered ${orderd} ${product} on TurboPakistan.com.`)

// variable names legal & illegal
var inOneStatement = varOne = "kya", varTwo = "hal", var3 = "hain"; // declare three variables in one statement
let r = y = 1, z = 2;
alert(inOneStatement)

// Math expressions
let num1 = 2;
let num2 = 5;
let add = num1 + num2;
document.write(`The sum of ${num1} and ${num2} is ${add} <br/>`)
let sub = num1 - num2;
document.write(`The sum of ${num1} and ${num2} is ${sub} <br/>`)
let multi = num1 * num2;
document.write(`The sum of ${num1} and ${num2} is ${multi} <br/>`)
let divi = num1 / num2;
document.write(`The sum of ${num1} and ${num2} is ${divi}`)

var value;
document.write(`Value after variable declaration is ${value} <br/>`);
value = 5;
document.write(`initial value: ${value} <br/>`);
value++;
console.log(value);
document.write(`value after increament is: ${value} <br/>`)
value = 7 + value;
document.write(`value after addition is: ${value} <br/>`)
--value;
document.write(`value after decreament is ${value} <br/>`)
value = value % 3;
document.write(`The remainedr is: ${value} <br/>`)

let ticketPrice = 600;
let totalTicket = 5;
let totalPrice = totalTicket * ticketPrice;
document.write(`Total cost to buy ${totalTicket} tickets to a movie is Pkr${totalPrice}`)
console.log(totalPrice);

var input = document.getElementById("table");
var tabelList = document.getElementById("tableList");

function generator() {
    for(let i = 1; i <= 10; i++) {
        tabelList.innerHTML += (`<p>${input.value} x ${i} = ${input.value * i}</p>`)
    }
}

var Celsius = 25; // calculating Celsius
var F = (Celsius * 9/5) + 32;
document.write(`${Celsius}C is ${F}F <br/>`)

var Fahrnheite = 77;// calculating Fahrnheite
var C = (Fahrnheite - 32) * 5/9;
document.write(`${Fahrnheite}F is ${C}C`)

var item1price = 650;
document.write(`Price of item 1 is ${item1price} <br />`)
var quantitiyItem1 = 3;
document.write(`Qunatity of item 1 is ${quantitiyItem1}  <br />`)
var item2price = 100;
document.write(`Price of item 2 is ${item2price}  <br />`)
var quantitiyItem2 = 7;
document.write(`Qunatity of item 2 is ${quantitiyItem2}  <br />`)
var shipping = 100;
document.write(`Shipping Charges ${shipping}  <br />`)

let totalPriceItem1 = quantitiyItem1*item1price;
let totalPriceItem2 = quantitiyItem2*item2price;

let totalCost = totalPriceItem1 + totalPriceItem2 + shipping;
document.write(`Total cost of your order is ${totalCost}`)

var totalMarks = 1100;
document.write(`Total Marks: ${totalMarks} <br />`)
var marksObtained = 896;
document.write(`Obtained Marks: ${marksObtained} <br />`)

var percentage = marksObtained / totalMarks * 100;
document.write(`Percentage: ${percentage}`)

var $inPkr = 276;
var suadiRiyal = 74 ;

var dollors = 10;
var saudiRiyals = 25;

var usDollorinPkr = dollors * $inPkr + suadiRiyal * saudiRiyals;

document.write(`The total currency in PKR ${usDollorinPkr}`)

var operations = 2 + 5 * 10 / 2;
console.log(operations);

let num4 = 10;
let result = ((num4 + 5) * 10) /2;
console.log(result);

// Age calculator
var currentYear = 2024;
var birthYear = 2004;

var age = 2024 - 2004;
console.log(age);

var favrtSank = "choclate chip";
document.write(`Favourite Snack is ${favrtSank} <br/>`)
var currentAge = 15;
document.write(`Current Age is ${currentAge} <br/>`)
var estimatedLife = 65;
document.write(`Estimeted Maximum Age ${estimatedLife} <br/>`)
var snakAmountaDay = 3;
document.write(`Amount of Snacks per day ${snakAmountaDay} <br/>`)

var remainingYrs = estimatedLife - currentAge;
var remainingDays = remainingYrs * 365;

var totalAmount = remainingDays * remainingYrs;
document.write(`You will need ${totalAmount} to last you untill ripe old age of ${estimatedLife}`)

let favoritSnack = "chocolate";
let currentAge = 15;
let maximuAge = 65;
let amontPerDay =3;

let yearsRemaing = maximuAge - currentAge;
let daysRemaing = yearsRemaining * 365;
let totalAmount = daysRemaining * amontPerDay;

console.log("You would eat total of " + totalAmount + " " + favoritSnack + " for the rest of your life.");

let favoriteSnack = "cookies";
let currentAge = 15;
let maximumAge = 65;
let amountPerDay = 3;

let yearsRemaining = maximumAge - currentAge;
let daysRemaining = yearsRemaining * 365;
let totalAmount = daysRemaining * amountPerDay;

console.log("You would a total of " + totalAmount + " " + favoriteSnack + " until the age of 65.");

var literalArray = [];
var objectArray = [{}];

var strArray = ["Mango","Banana","Grapes"];
var numArray = [1,2,3,4,5,6,7,8,9];
var boolArray = [true,false];
var mixArray = ["mango",2,true,'',]

var qualifications = [" ","SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M", "Phil", "PhD"];

for(let i = 1; i < qualifications.length; i++) {
    document.write(` <br/>${[i]}) ${qualifications[i]}`);
}

var students = ["champ","charli","bob"];
var assumeScore = 500;
var score = [480,320,230];

for(let a = 0; a < students.length & score.length; a++){
    var percentage = score[a] / 500 * 100;
    document.write(`<br/>score of ${students[a]} is ${score[a]}. ${percentage}%`);
}

var colors = ["blue", "red", "green"];
console.log(colors);

for(let i =0;i<colors.length;i++){
    document.write(`<br/> ${colors[i]}`)
    console.log(colors[i]);
}

colors.unshift("yellow")
document.write(`<br/> ${colors} <br/>`);
// console.log(colors);

colors.push("black")
document.write(`${colors}<br/>`);
// console.log(colors);

colors.unshift("purple","orange");
document.write(`${colors}  <br/>`)
// console.log(colors);

colors.shift()
document.write(`${colors} <br/>`)
// console.log(colors);

var indexAdding = prompt("where you wants to add color or which positin of indexing?")

colors.splice(2,0, indexAdding);
// console.log(colors)
document.write(`${colors}<br/>`)

colors.splice(0,3,)
document.write(`${colors}`)

var studentsScore = [230,480,320,290];
document.write(`score of students ${studentsScore} <br/>`)
studentsScore.sort()
document.write(`ordered score of students ${studentsScore}`);

var cities = ["Karachi","Islamabad","Lahore","Peshawar","Quetta"];
document.write(`Cities: ${cities}<br/>`);
var copy = cities.slice(1,4);
document.write(`selected cities: ${copy}`);

var strArray = ["this","is","my","car"];
console.log(strArray);
var joinArry = strArray.join()
console.log(joinArry);

var firstOrder = [];
firstOrder.push("keyboard");
document.write(`output: ${firstOrder}<br/>`)
firstOrder.shift()
firstOrder.push("moniter");
document.write(`output: ${firstOrder}<br/>`)
firstOrder.shift()
firstOrder.push("mouse");
document.write(`output: ${firstOrder}<br/>`)
firstOrder.shift()
firstOrder.push("printer");
document.write(`output: ${firstOrder}<br/>`)

var reverse = firstOrder.reverse();
document.write(reverse)

const fruts = ["Banana", "Orange", "Apple", "Mango"];
let size = fruts.length
console.log(size);

let strg = fruts.toString()
console.log(strg);

let indexes = fruts.at(2);
console.log(indexes);

let joinArry = fruts.join();
console.log(joinArry);

let shift = fruts.shift()
console.log(shift);

fruts.unshift("hi");
console.log(fruts);

let deleteArry = delete fruts[2];
console.log(deleteArry);

const arry0 = [1,2,3,4,5];
const arry2 = [,6,7,8,9,0];

console.log(arry0 +  arry2)

var arry = [
    [],
    [],
];

var arry1 = [
    [1,2,3],
    [4,5,6]
];
document.write(`<br/> ${arry1}`)

for(let i = 1; i <= 10; i++){
    document.write(`<br/> ${i}`)
}

var input = document.getElementById("table");
var length = document.getElementById("length");

function generator() {
    for(let i = 1; i <= length.value; i++) {
        document.write(`<br/> ${input.value} x ${[i]} = ${input.value * [i]}`)
    }
}

var fruits = ["apple", "banana", "mango", "orange","strawberry"]
for(let i = 0; i < fruits.length; i++) {
    document.write(`<br/> element at index ${[i]} ${fruits[i]}`);
}

var counting = [1,2,3,4,5,6,7,8,9,0];
document.write(`Counting: ${counting} <br/>`);
let reverse =
counting.reverse();
document.write(`Reverse: ${reverse} <br/>`);

for(let i = 0; i < counting.length; i++){

if(counting[i] % 2 == 0) {
    document.write(`${counting[i]}<br/>`)
}

}

let odd = []
if(counting[i] % 2 == 1) {
    counting.push(odd)
    document.write(`<br/> ${counting[i]}`)

}

var items = ["cake","pie","biscuit","ice cream","patties"];

var userInput = prompt("welcom to our bakery");

userInput = userInput.toLowerCase();

var found = false;

for(let i = 0; i < items.length;i++) {
    if(items[i] === userInput) {
        found = true;
        alert("item is availble")
    }
    break;
}

let A = [24, 53, 78, 91, 12];

let B = Math.max(...A);
console.log(B)

let C = Math.min(...A);
console.log(C)

// Assume the first element as the smallest number
let smallest = A[0];

// Iterate through each element of the array and update 'smallest' if a smaller number found
for (let i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

console.log(smallest);

let largest = A[0];

for(let a = 0; a < A.length; a++) {
    if(A[a] > largest) {
        largest = A[a]
    }
}
console.log(largest);

function power(a, b) {
    if (b === 0) return 1;
    if (b === 1) return a;
    return a * power(a, b - 1);
  }

  // Example usage
  console.log(power(2, 3)); // Output: 8
  console.log(power(5, 2)); // Output: 25

  function isLeapYear(year) {
    // Check for divisibility by 400 (guaranteed leap year)
    if (year % 400 === 0) return true;

    // Otherwise, check for divisibility by 4 and not by 100
    return (year % 4 === 0) && (year % 100 !== 0);
  }

  // Get user input for the year
  const year = parseInt(prompt("Enter a year: "));

  // Check if it's a leap year and display the result
  if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }

var date = new Date();
document.write(date)

function greet() {
    let firstName = "farhan";
    let lastName = "Aziz"

    return firstName  +  lastName;
}
document.write(greet())

var num12 = parseInt(prompt("enter first number"))
var operators = prompt("which operator you wants to perform?")
var num22 = parseInt(prompt("enter second number"))

var operations = ["+","-","*","/"];
    if(operators === operations[0]){
        let result = num12 + num22
        document.write(`${num12} ${operators} ${num22} = ${result}`)
     } if(operators === operations[1]){
           let result = num12 - num22
            document.write(`${num2} ${operators} ${num22} = ${result}`)
       }  if(operators === operations[2]){
                let result = num12 * num22
              document.write(`${num12} ${operators} ${num22} = ${result}`)
           }    if(operators === operations[3]){
                    let result = num12 * num22
                     document.write(`${num12} ${operators} ${num22} = ${result}`)
               }     if(operators === operations[4]){
                     let result = num12 / num22
                      document.write(`${num12} ${operators} ${num22} = ${result}`)

    }

function square(number) {
    return number * number
}
console.log(square(4))

function factorial(num) {
    if (num < 0) {
      return "Factorial is not defined for negative numbers";
    } else if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  // Example usage
  console.log(factorial(5)); // Output: 120

var checkingIndex = "Pakistani";
var index = checkingIndex.indexOf('n');
console.log(index);

var lastIndex = "Hello world";
var index = lastIndex.lastIndexOf('l')
console.log(index);

var thirdIndex = "Pakistani";
var index = thirdIndex.charAt(3);
console.log(index);

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
console.log(newCity);

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMsg = message.replace("and", "&");
console.log(newMsg);

let str = "234";
let inNumbr = Number(str);
console.log(typeof inNumbr);

let numbr = 234;
let inStr = String(numbr);
console.log(inStr);

var userInput = prompt("write some text");
var resulInput = userInput.toUpperCase();
console.log(resulInput);

function titleCase(str) {
  str = str.toLowerCase()

  const words = str.split('')
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return words.join(' ')
}

var userInput = prompt("write some text");

var titleCaseText = titleCase(userInput);
console.log(titleCaseText);

var num = 35.35;
var numStr = num.toString().replace('.','');
console.log(numStr);

function makingPassword(password) {

  if(password < 6){
    return false
  }if(password[0].match(/[0-9]/)){
    return false
  }if(!password.match(/[a-zA-z]/) || !password.match(/[0-9]/)){
    return false
  }
  return true
}

var userInput = prompt("enter your password");

if(makingPassword(userInput)){
  alert("correct password")
}else {
  alert("wrong password")
}

var char = "Pakistan";
var lastChar = char.charAt(char.length - 1)
console.log(lastChar);

const text = "The quick brown fox jumps over the lazy dog";
const wordToFind = "the";

// Convert the text to lowercase for case-insensitive counting (optional)
const textLower = text.toLowerCase();

// Split the text into words
const words = textLower.split(' ');

// Count the occurrences of the word
let count = 0;
for (const word of words) {
  if (word === wordToFind) {
    count++;
  }
}

console.log(`The word '${wordToFind}' appears ${count} times in the text.`);

// positve number
var random = Math.random()* 10;
console.log(random);
var round = Math.round(random);
console.log(round);
var floor = Math.floor(round);
console.log(floor);
var ceil = Math.ceil(floor)
console.log(ceil);

// negative number
var random1 = Math.random()* -10;
console.log(random1);
var round1 = Math.round(random1);
console.log(round1);
var floor1 = Math.floor(round1);
console.log(floor);
var ceil1 = Math.ceil(floor1)
console.log(ceil1);

var absolut = -5;
var abs = Math.abs(absolut);
console.log(abs);

var ludo = document.getElementById("dice");

function diceValue() {

  var dice = Math.random()* 6;
var round = Math.round(dice);

  if(round){
    ludo.innerHTML += (`<br/> random dice value ${round}`)
    }
}

var div = document.getElementById("coin")

function coinValue() {

  var coin = Math.random()* 10;
  var round = Math.round(coin);

  if(round % 2 == 0){
    div.innerHTML = (`${round} <br/> randome coin value : Heads`);
  }else {
    div.innerHTML = (`${round} <br/> the random coin value: Tails`)
  }
}

var months = ["January","Faburary","March","April","May","June","July","August","september","octomber","November","December"];

var currentDate = new Date();
var currentMonth = months[currentDate.getMonth()]
console.log(currentMonth);

var days = ["saturday","sunday","monday","tuseday","wednesday","friday",];

var currentDay = days[currentDate.getDay()];
console.log(currentDay);

var newDate = new Date().toLocaleDateString("en-US", {weekday: 'long'})
console.log(newDate);

if(newDate === days) {
  console.log("Its fun day");
}else {
  console.log("Its work day");
}

var date = new Date();
var today = date.getDate()

if(today > 15){
  console.log("last fifteen days of month");
}else {
  console.log("first fifteen days of month");
}

var currentDate = new Date()
var time = Math.floor(currentDate.getTime() / (1000 * 60))
console.log("Minuites since midnight, Jan 1 1970 " + time);

var todayDate = new Date();
var now = Math.floor(todayDate.getDate('2024-05-24 00:00:00'))
console.log("One hour ago " + todayDate);

var currentDate = new Date();

var ramadan2015 = new Date("2015-06-18T00:00:00");

var timeDifference = currentDate - ramadan2015;

var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60));

console.log(daysPassed);

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100)
console.log("100 years back date was " + currentDate);

var userAge = 20;

var currentYear = new Date().getFullYear()

var birthYear = currentYear - userAge
console.log(birthYear);

var x = 5;
switch(x) {
  case "5":
    console.log("x is '5'");
    break;
  case 5:
    console.log("x is 5");
    break;
  default:
    console.log("x is neither '5' nor 5");
}

var a = "hello";
switch(a) {
    case "hi":
        console.log("hi kese ho");
        break;
        case "hello":
            console.log("hello kese ho");
            default:
                console.log("mm thk hu");
}


var nums = document.getElementById("numbers")

for (let i = 0; i <= 10; i++) {
  nums.innerHTML =+ (`<div>${i[i]}</div>`)
  console.log(i)
}
























