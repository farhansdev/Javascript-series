const accountId = 112233
let accountEmail = "farhan@gmail.com"
var accountPassword = '12345'
livingCity ="Karachi"

// accountId = 2 // not allowed, TypeError: Assignment to constant variable.
// console.log(accountId)

accountEmail = "aziz@gmail.com"
accountPassword = 1112
livingCity = "Umerkot"


/* prefer not to use var 
because of issue in block scope & functional scope */

let accountState; // undefined

console.table([accountId, accountEmail, accountPassword, livingCity, accountState])