// 1. Write a program that displays current date and time in your browser.

var date = new Date()
// alert(date); // Wed May 08 2024 22:14:38 GMT+0500 (Pakistan Standard Time)
console.log(date)

// 2. Write a program that alerts the current month in words. 
// For example May.

var monthNames = ["January","Fabuarary","March","April","May","June","July","Augast","October","Septmber","November","December"];

// let currentDate = new Date();
// let currentMoth = monthNames[currentDate.getMonth()]
// alert(currentMoth)

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// let newDate = new Date().toLocaleDateString('en-US', {weekday: 'long'});
// alert(newDate.slice(0, 3));
let newDate = new Date().toLocaleDateString('en-Us', {weekday: 'long'})
console.log(newDate.slice(0,3))

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

if(newDate === "Sunday" || "Saturday") {
//     alert("It's Fun day!");
console.log("It's Fun day!")
}else {
    console.log("It's not Fun day!")
//     alert("It's work day");
}