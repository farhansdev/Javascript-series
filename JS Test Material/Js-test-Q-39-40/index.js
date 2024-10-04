
// chapter 39 
// switch case 

// var dayOfWk = "";

// switch(dayOfWk) {
//     case "Sat" :
//         console.log("Whoopee!")
//         break;
//         case "Sun" :
//             console.log("whoopee!")
//             break;
//             case "Fri" :
//                 console.log("TGIF")
//                 break;
//                 default :
//                 console.log("Shoot me now!");
// }

// while loops 

// var i = 0;

// while(i <= 4) {
//     console.log(i);
//     i++;
// }

//  do while loops 

// var i = 0;
//  do {
//  console.log(i);
//  i++;
//  } while (i <= 3);

// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while(i <= 3)

// function Sayhi() {
//     console.log("Say Hi");
// }
// Sayhi()

// for (var i = 0; i
//      if (animals[i] === "bat") {
//      animals[i] = "cat";
//      }
//     )

// function checkAddress(fieldId) {
//      if (document.getElementByID(fieldId).value === "") {
//      alert("Email address required.");
//      }
//      }

//      function fillCity() {
//          var cityName;
//          var zipEntered = document.getElementById("zip").value;
//          switch (zipEntered) {
//          case "60608" :
//          cityName = "Chicago";
//          break;
//          case "68114" :
//          cityName = "Omaha";
//          break;
//          case "53212" :
//          cityName = "Milwaukee";
//          }
//          document.getElementById("city").value = cityName;
//          }

var par = document.getElementsByTagName("p")

par[1].innerHTML = "This SUV is too big.";