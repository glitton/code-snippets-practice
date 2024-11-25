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

// console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]

//3.  Lettercase Counter

function letterCaseCount(str) {
  let lowercase = str.match(/[a-z]/g) || [];
  let uppercase = str.match(/[a-z]/g) || [];
  let neither = str.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercase.length,
    uppercase: uppercase.length,
    neither: neither.length,
  };
}

// console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

//. Capitalize Words

function wordCap(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'
