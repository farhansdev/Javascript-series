// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

const B = [24, 53, 78, 91, 12];

// let smallerNumber = Math.min(...B)
// console.log(smallerNumber);

let largeNumber = Math.max(...B)
// console.log(largeNumber);

for (let i = 1; i < B.length; i++) {
     if (B[i] > largeNumber) {
        largeNumber = B[i]
        console.log(largeNumber);
     }
}


// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

// const A = [24, 53, 78, 91, 12];

// let smallNumber = A[0];
// // console.log(smallNumber);

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallNumber) {
//     smallNumber = A[i];
//     console.log(smallNumber);
//   }
// }