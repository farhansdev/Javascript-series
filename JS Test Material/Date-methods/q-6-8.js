// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

let currentDate = new Date()
console.log(currentDate);

// let sinceMinutes = Math.floor(currentDate.getTime() / (1000 * 60))
// let sinceMinute = Math.floor(currentDate.getTime() / (1000 * 60)) //validating time (1000 * 60)
// console.log("minutes since midnight, Jan. 1, 1970: " + sinceMinute)
// console.log("Minutes since midnight, Jan. 1, 1970: " + sinceMinutes);

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

let newdate = new Date()

let time = newdate.getHours()
console.log(time);

if (time > 12) {
    console.log("It's PM");
}else {
    console.log("It's AM");
}

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// Create a Date object for the last day of the last month of 2020

let laterdate = new Date('2023-12-31T23:59:59');

console.log("The last day of the last month of 2023 is : " + laterdate);