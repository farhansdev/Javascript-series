// 4. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var bill = document.getElementById("bill")

var cutomerName = prompt("Please enter your name");
var currentMonth = prompt("enter the current month");
var unitNumbers = prompt("enter the used unit numbers of current month");

const chargePerUnit = 2
const latePaySurcharge = 20

var netAmountPayble = unitNumbers * chargePerUnit
var grosAmountPayble = netAmountPayble + latePaySurcharge

bill.innerHTML = (`Customer Name : ${cutomerName} <br /> 
Current Month : ${currentMonth} <br />
Numbers of Units : ${unitNumbers} <br />
Charge per unit : ${chargePerUnit} <br />
Net Amount Payable (within Due Date) : ${netAmountPayble} <br />
Late Payment Surcharge : ${latePaySurcharge} <br/>
Gross Amount Payable (after Due Date) : ${grosAmountPayble}`)

const bill = "K Electric";
console.log(bill)

const units = 10;
const month = "Aug";

const chargePrunit = 5;
const lateCharge = 20;

const amountPayable = units * chargePrunit;
const grosAmount = amountPayable + lateCharge;

console.log("used unit", units)
console.log("month", month)
console.log("charge per unit", chargePrunit)
console.log("late charge amount", lateCharge)
console.log("amount payable", amountPayable)
console.log("gross amount", grosAmount)

