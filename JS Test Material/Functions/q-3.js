// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// const num1 = +prompt("enter your first number");
// const num2 = +prompt("enter your second number");

// const result = (num1) + (num2)

// alert(`sum of ${num1} and ${num2} is ${result}`)

function sum() {
    const num1 = +prompt("enter your first number");
    const num2 = +prompt("enter your second number");
    console.log(num1 + num2)     
}
sum()

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function compute() {
    
var a =  +prompt("enter your first number");
var operator = prompt("enter your desire operator");
var b = +prompt("enter your second number");

    let arry = ['+','-','*','/'];
    let result = 0

        if(operator === arry[0]) {
            result = a + b
           alert(result);
          }
              else if(operator === arry[1]) {
        result = a - b
        alert(result);
    }else if(operator === arry[2]) {
        result = a * b
        alert(result);
    }else if(operator === arry[3]) {
        result = a / b
        alert(result);
    }else {
        alert("System Crashed!");
    }