// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array

var item = document.getElementById('items');

function check() {

var food = ["cake", "apple pie", "cookie", "chips", "patties"];

for (let i = 0; i < food.length; i++) {

var input = document.getElementById('input').value;

if (input === food) {
    // console.log("your order is availble");
    item.innerHTML = `${input}`;
}else {
    item.innerHTML = `your order is not availble`;
    // console.log('your order is not availble');
}
}    
}