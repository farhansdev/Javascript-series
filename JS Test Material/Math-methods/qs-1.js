// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// 2. you can check positive and negative value just adding - minus operator in input

var userInput = document.getElementById("nmbrs");
var num = document.getElementById("number")
var roundoff = document.getElementById("roundoff")
var floorr = document.getElementById("floor")
var ceill = document.getElementById("ceil")

function integr() {
   
    num.innerHTML = `<p>Number : ${userInput.value}</p>`

    var round = Math.round(userInput.value)
    roundoff.innerHTML = `<p>Roundoff : ${round}</p>`

    var floor = Math.floor(userInput.value)
    floorr.innerHTML = `<p>Floor : ${floor}</p>`

    var ciel = Math.ceil(userInput.value)
    ceill.innerHTML = `<p>Ceil : ${ciel}</p>`

}