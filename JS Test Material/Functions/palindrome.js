// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam


    var cleanStr = prompt("enter the string to check palindrome");

    var reverseStr = cleanStr.split('').reverse().join('')
    console.log(reverseStr);

    // Check if the string is a palindrome
    if(reverseStr === cleanStr) {
        alert(`${reverseStr} is palindrome it mean word farward to backward is same`);
    }else {
        alert(`${reverseStr} Its not a palindrome`);
    }
  
  