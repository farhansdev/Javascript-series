// 6. Write a program that shows a random number between 1 
// and 100 in your browser.

var nums = document.getElementById("numbrs");

function numbers() {

    var num = Math.random() * 100;
    var newdata = Math.round(num)
    nums.innerHTML = `Random value between 100 to 1 : ${newdata}`
}