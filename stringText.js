//1.  Uppercase Check
function isUppercase(str) {
  return str.toUpperCase() === str;
}

// console.log(isUppercase("t")); // false
// console.log(isUppercase("T")); // true
// console.log(isUppercase("Four Score")); // false
// console.log(isUppercase("FOUR SCORE")); // true
// console.log(isUppercase("4SCORE!")); // true
// console.log(isUppercase("")); // true

//2.  No vowels
const VOWELS = "aeiou";

function removeVowels(arr) {
  return arr.map((char) => {
    let re = /[aeiou]/gi;
    return char.replace(re, "");
  });
}

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]
