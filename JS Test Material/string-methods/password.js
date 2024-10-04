// Function to validate the password
// function validatePassword(password) {
//     // Check if the password meets the requirements
//     if (password.length < 6) {
//         return false;
//     }
//     if (password[0].match(/[0-9]/)) {
//         return false;
//     }
//     if (!password.match(/[a-zA-Z]/) || !password.match(/[0-9]/)) {
//         return false;
//     }
//     return true;
// }

function makingPassword(password) {

    if(password < 6) {
        return false;
    }if(password[0].match(/[0-9]/)) {
        return false;
    }if(!password.match(/[a-zA-Z]/) || !password.match(/[0-9]/)) {
        return false;
    }
    return true;
}

var userPass = prompt("enter the password")

if(makingPassword(userPass)) {
    alert("Valid password!")
}else {
    alert("Invalid password")
}









// Prompt the user for a password
// var userPassword = prompt("Enter a password:");

// // Validate the password
// if (validatePassword(userPassword)) {
//     alert("Valid password!");
// } else {
//     alert("Invalid password. Please enter a valid password.");
// }
