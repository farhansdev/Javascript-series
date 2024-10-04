// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var coin = document.getElementById("coin");

function coinValue() {
    let coin = Math.random() * 10;
    let coinvalue = Math.round(coin);

    if(coinvalue % 2 === 0) {
        document.getElementById("coin").innerHTML = "Heads";
        // console.log("heads")
    } else {
        document.getElementById("coin").innerHTML = "Tails";
        // console.log("tails")
    }
}