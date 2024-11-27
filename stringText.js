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

//4. Capitalize Words

function wordCap(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// console.log(wordCap("four score and seven")); // "Four Score And Seven"
// console.log(wordCap("the javaScript language")); // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'

//5. Swap Case

// function swapCase(str) {
//   return str
//     .split("")
//     .map((char) => {
//       if (char === char.toUpperCase()) {
//         char = char.toLowerCase();
//       } else {
//         char = char.toUpperCase();
//       }
//       return char;
//     })
//     .join("");
// }

// console.log(swapCase("CamelCase")); // "cAMELcASE"
// console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"

//6.  Staggered Caps 1
//Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

// even indexed are capitalized

// function staggeredCase(str) {
//   let finalString = "";
//   for (let idx = 0; idx < str.length; idx++) {
//     if (idx % 2 === 0) {
//       finalString += str[idx].toUpperCase();
//     } else {
//       finalString += str[idx].toLowerCase();
//     }
//   }
//   return finalString;
// }

// console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
// console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"

// staggered Caps 2

function staggeredCase(words) {
  let needUpper = true; // this starts the first letter as upperCase

  return words
    .split("")
    .map((word) => {
      word = word.toLowerCase();
      if (word >= "a" && word <= "z") {
        if (needUpper) {
          needUpper = false;
          return word.toUpperCase();
        } else {
          needUpper = true;
          return word.toLowerCase();
        }
      } else {
        return word;
      }
    })
    .join("");
}

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

//7.  How long are you?

function wordLengths(words) {
  if (words === undefined || words === "") {
    return [];
  }
  return words.split(" ").map((word) => `${word} ${word.length}`);
}

// console.log(wordLengths("cow sheep chicken"));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths("baseball hot dogs and apple pie"));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths("Supercalifragilisticexpialidocious"));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths("")); // []
// console.log(wordLengths()); // []

//8.  Search word 1

function searchWord(word, text) {
  let count = 0;
  text.split(" ").forEach((char) => {
    if (char.toLowerCase() === word) {
      count += 1;
    }
  });
  return count;
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

console.log(searchWord("sed", text)); // 3
