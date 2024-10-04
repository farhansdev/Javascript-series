const name = document.getElementById("name");
const input = document.getElementById("login");
const password = document.getElementById("password");

function signup() {

    var setUser = localStorage.getItem("login");
    var setPass = localStorage.getItem("password");

    if(input.value == "" && password.value == "") {
        alert("please enter name, email and password!")
    } else {
         console.log("User Sigup Succesfully!")
         alert("User Sigup Succesfully!")
       window.location.href = "/login.html"
        
    }
}

function login() {

    var getUser = localStorage.getItem("login");
    var getPass = localStorage.getItem("password");

    if (input.value == "" && password.value == "") {
        console.log("Invalid email or password!");
        alert("Invalid email or password!");
    } else {
        console.log("user successfully login!");
        alert("user successfully login!");
        window.location.href = "/dashboard.html";
        input.value = "";
        password.value = "";
    }

}

     
 

function logOut() {
    window.location.href = "/login.html"
}
