// Chapter 21

// Nested loops

var myFriends = ["Sadiq","Jabir","Iqrar","Sheeraz","Tariq"];

var sirNames = ["Iqbal","Ali","Baladi","Hussain","Niazi"]

var identity = [];

for(let i = 0; i < myFriends.length; i++) {
    for(let j = 0; j < sirNames.length; j++) {
        identity.push(myFriends[i] + sirNames[i])

    }
}
// console.log(identity);

// using methods 
// indexOf(), lastIndexOf(), charAt(), replace(current value, updated value)

var scoreAvg = Math.round(.0678437);
console.log(scoreAvg);

var scoreAvg2 = Math.ceil(.000001);
console.log(scoreAvg2);

var scoreAvg3 = Math.floor(.999999);
console.log(scoreAvg3);

var randomNumber = Math.random() * 10;
console.log(randomNumber);
var ceil = Math.ceil(randomNumber) // always add 1 in current value
console.log(ceil);

var floor = Math.floor(randomNumber) // always give constant value
console.log(floor); 

var myInteger = parseInt("1.9999");
console.log(myInteger);

var myFractional = parseFloat("1.9999");
console.log(myFractional);

// converting strings to numbers , numbers to strings

var str = "23"
var number = Number(str) // number
console.log(typeof number);  // output "23"

var num = 23 
var string = String(num) // number
console.log(typeof string); // output 23

var numbersTostring = 12345
var stringNumbers = numbersTostring.toString() // string
console.log(typeof stringNumbers); // output "12345"

 var now = new Date();
 var theHr = now.getHours();
 var theMin = now.getMinutes();
 console.log("time: " + theHr + ":" + theMin);









