// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeFirstLetter(str) {
    // Split the string into an array of words
    var words = str.split(' ');
  
    // Capitalize the first letter of each word
    // for (var i = 0; i < words.length; i++) {
    //   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    // }

    for(let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
  
    // Join the words back into a string
    return words.join(' ');
  }
  
  // Example usage:
  console.log(capitalizeFirstLetter('the quick brown fox')); // Output: 'The Quick Brown Fox'
  