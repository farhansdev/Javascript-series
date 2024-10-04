// 1. Write a function that displays current date & time in your 
// browser.

// var time = document.getElementById("time");

function datenTime() {
    var currentDate = new Date() 
    time.innerHTML = currentDate
}

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name

// var firstName = prompt("enter your first Name")
// var lastName = prompt("enter your last Name")

// alert(`Congrats! Mr. ${firstName} ${lastName}`)

function fullName(fName, lName) {
    console.log(`${fName} ${lName}`)
}
fullName("Farhan", "Aziz")