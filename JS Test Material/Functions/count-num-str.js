// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

function countLetterOccurrence(str, letter) {
    var count = 0;
    // Loop through the string
    for (var i = 0; i < str.length; i++) {
      // If the current character matches the letter, increment the count
      if (str[i].toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  console.log(countLetterOccurrence('JSResourceS.com', 'o')); // Output: 1
  