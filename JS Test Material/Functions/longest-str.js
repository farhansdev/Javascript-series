// Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
    // Split the string into an array of words
    var words = str.split(' ');
  console.log(words);

    // Initialize the longest word
    var longestWord = '';
  
    // Iterate through the words to find the longest one
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    // Return the longest word
    return longestWord;
  }
  
  // Example usage:
  console.log(findLongestWord('Web Development Tutorial')); // Output: 'Development'
  