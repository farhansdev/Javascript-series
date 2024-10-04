// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var counting = document.getElementById("countings");

var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
// counting.innerHTML += `<h1> Countings: <br/> ${count}</h1>`

// count.reverse();
// counting.innerHTML += `<h1>Reverse Counting: <br/> ${count}</h1>`


for (let i = 0; i < 20; i++) {

    if (count[i] % 2 !== 0) {  // odd 
        // counting.innerHTML += `<p>${count[i]}k<h1/>`    // series numbers
        // counting.innerHTML += `<h1>${count[i]},</h1>`    // Odd numbers
        console.log(count[i]);
    }else {

    }
}

for (let a =0;a<20;a++) {
    if (count[a] % 2 == 0) { // even   
        // counting.innerHTML += `<h1>${count[i]},<h1/>`  // Even numbers
        console.log(count[a]);
    }else {

    }
}

   // counting.style.display = "flex"
    // counting.style.justifyContent = "center"
    // counting.style.alignItems = 'center'