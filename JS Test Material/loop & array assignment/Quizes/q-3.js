// 3. Write a program to print numeric counting from 1 to 10.

var loop = document.getElementById("count");

for (let i = 1; i <= 10; i++) {
    loop.innerHTML += `<h2>${i}</h2>`;
}