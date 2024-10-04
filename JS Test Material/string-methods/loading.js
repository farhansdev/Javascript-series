// Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(userInput) {
  // Convert both the user input and array items to lowercase for case-insensitive comparison
  var lowerCaseInput = userInput.toLowerCase();
  var found = A.some(function(item) {
    return item.toLowerCase() === lowerCaseInput;
  });

//   Inform the user about the availability
  if (found) {
    alert(lowerCaseInput + " is available in the list.");
  } else {
    alert(lowerCaseInput + " is not available in the list.");
  }
}

// Example usage: Prompt the user for an item to search
var userSearch = prompt("Enter an item to search:");

searchItem(userSearch);
