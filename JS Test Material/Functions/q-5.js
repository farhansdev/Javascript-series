// Write a function that computes factorial of a number.

// function factorial(n) {
//     // Base case: if n is 0 or 1, the factorial is 1
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     // Recursive case: multiply n by the factorial of n-1
//     return n * factorial(n - 1);
//   }
  
//   // Example usage:
//   console.log(factorial(5)); // Output: 120

//   7. Write a function that take start and end number as inputs 
//   & display counting in your browser.

var startCounting = 2; //+prompt("start counting from")
var endCounting = 11; //+prompt("end counting at")

// var counting = document.getElementById("counting")
 
for(let i = startCounting; i <= endCounting;i++) {
    console.log(i);
    // counting.innerHTML = (`counting start from ${startCounting} and end at ${endCounting}`);
    // console.log(`counting start from ${startCounting} ${i} and end at ${endCounting}`)
}