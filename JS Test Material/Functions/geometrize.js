// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
  }
  
  // Function to calculate the area of a circle
  function calcArea(radius) {
    var area = Math.PI * radius * radius;
    console.log("The area is " + area.toFixed(2));
  }
  
  // Example usage:
  calcCircumference(5); // Should output: "The circumference is 31.42"
  calcArea(5); // Should output: "The area is 78.54"
  