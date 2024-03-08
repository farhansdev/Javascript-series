
// let score = '33'; // number value string mn ho k number mn bhi change hogi or string mn bhi lekin string letters NaN mn change hongy
// let score = null; // agr number change kro to null value change in to 0 aayega or agr string mn change kro to null 
// let score = true ; // number mn 1 mn change hogi or string mn true aayegi bs Quatation se convert ho jayegi
// let score = 33; // number
let score = 'true'; // number mn NaN mn or string mn bhi same

// console.log(typeof score);
// console.log(typeof (score));

let changeValueInnumber = Number(score); // formula of conversion dataType "(dataTypeName(variableName))" jis mn data store ki hogi e.g "let score = Number(score)" now check dataType "console.log(typeof(score))" 
 // always use capital letter data type name to change data value 

// console.log(typeof changeValueInnumber);
// console.log(changeValueInnumber);  // same way ham hr data type ki value ko change kr sakty hn is farmuly ki madad se "(dataTypeName(variableName))" .

// '33' => 33
// '33abc' => NaN
// true => 1 , false => 0

let isLoggedIn = 1; // change in to true
// let isLoggedIn = 0; // false
// let isLoggedIn = ""; // false
// let isLoggedIn = "abc"; // true

let changeInBoolean = Boolean(isLoggedIn);
// console.log(changeInBoolean)

// ***********************************Operations*******************************************

let value = 3;
let negValue = -value;
console.log(negValue) // -3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = 2;
let str2 = 2;
let str3 = str1 + str2;
console.log(str3) // 4

console.log('1' + 2) // 12 
console.log(1 + '2') // 12 
console.log('1' + 2 + 2) // 122 
console.log(1 + 2 + '2') // 32  // string value number ko apny sath add kr legi or agr 2 valye nmber hn ak string to nmbr value operate hony k baad string k sath add ho jayengi e.g 32, 1+2 = 3 hwa then + with string value 32

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter)
