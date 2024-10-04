// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var array = []; // empty array
array.push([1,2,3]); // add one element in last using "push()" method
array.push([4,5]);   
array.pop(); // remove one element from last using "pop()" method
array.shift(); // remove one element from starting using "shift()" method
array.unshift([6,7]); // add elements in starting using "unshift()" method
console.log(array); // [ [ 1, 2, 3 ], [ 4, 5 ], [ 6 ] ] multidimensional array in an empty array

// ya hum direct bhi bana skty hn 
let array2 = [ [ 1, 2, 3 ], [ 4, 5 ], [ 6 ] ] //  multidimensional array in an empty array
console.log(array2);