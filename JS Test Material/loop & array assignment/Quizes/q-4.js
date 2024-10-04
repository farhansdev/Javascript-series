// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

var display = document.getElementById('display');
var length = document.getElementById('length');


function generate() {
    display.innerHTML = ""
var input = document.getElementById('table').value;
    for(let i = 1; i < length.value; i++) {
        display.innerHTML += `<h3>${input} x ${i} = ${input*i}</h3>`;
        input.value += ""
    }
}


// function generate() {
//       display.innerHTML = '';
//     for (let i = 1; i <= length.value; i++) {
//         display.innerHTML += `<h3>${input} x ${i} = ${input*i}</h3>`
//         input += ""
//     }
   
// }