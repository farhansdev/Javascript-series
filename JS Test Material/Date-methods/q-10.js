// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

let sinceSeconds = new Date('Sat Dec 05-2015 22:50:16 GMT+0500(PKT)');

let currentDate = new Date();

let difference = currentDate - sinceSeconds

let inSeconds = Math.floor(difference / (1000 * 60 * 24))

console.log(inSeconds, "seconds has passed since beginning of 2015");