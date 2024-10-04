// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) {
    // Inner function to calculate the square of a number
    function calculateSquare(number) {
      return number * number;
    }
  
    // Calculate the squares of the base and perpendicular
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
  
    // Calculate the square of the hypotenuse
    var hypotenuseSquare = baseSquare + perpendicularSquare;
  
    // Return the square root of the hypotenuse square to get the hypotenuse length
    return Math.sqrt(hypotenuseSquare);
  }
  
  // Example usage:
  console.log(calculateHypotenuse(3, 4)); // Output: 5
  