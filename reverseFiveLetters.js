// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

/*
P: Return the input string but with the string that has five or more characters reversed.
Input: string
Output: string 
Rules:
- strings that have five or more characters should return reversed

E:
D: Array use to store strings and to reverse the string that have five or more characters

A:


- Initialize a finalWords variable and assign to an empty array
- Convert the input string to an array of words => words.split(' ') save to wordsArray
- Iterate over wordsArray
  - Check the length of each word in the array
    - For every word that has a length greater than or equal to five => word.length >= 5, 
      - reverse the string via the helper function
      Helper function: reverse 
      - split each word by character and save it to reverseWord
      - reverse characters in the array, and convert back to a string using join
    - append reversed word to finalWords

  - For every word that has a length < 5, append the word to finalWords
  - return finalWords in string format using join(' ')
*/

// function reverseFiveLetters(words) {
//   let wordsArray = words.split(" ");
//   let finalWords = [];

//   for (let word of wordsArray) {
//     if (word.length >= 5) {
//       finalWords.push(reverse(word));
//     } else {
//       finalWords.push(word);
//     }
//   }
//   return finalWords.join(" ");
// }

// function reverse(word) {
//   let reverseWord = word.split("");
//   return reverseWord.reverse().join("");
// }

// function reverseFiveLetters(words) {
//   return words
//     .split(" ")
//     .map((word) => {
//       if (word.length >= 5) {
//         return word.split("").reverse().join("");
//       } else {
//         return word;
//       }
//     })
//     .join(" ");
// }

function reverseFiveLetters(words) {
  return words
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}
console.log(reverseFiveLetters("Hey fellow warriors")); //--> "Hey wollef sroirraw"
console.log(reverseFiveLetters("This is a test")); //--> "This is a test"
console.log(reverseFiveLetters("This is another test")); //--> "This is rehtona test"
