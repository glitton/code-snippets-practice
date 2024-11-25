//1.  Remove vowels

// function disemvowel(str) {
//   const VOWELS = "aeiou";
//   let finalString = "";
//   str.split("").map((char) => {
//     if (!VOWELS.includes(char.toLowerCase())) {
//       finalString += char;
//     }
//   });
//   return finalString;
// }

// Use filter

const VOWELS = "aeiou";
function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !VOWELS.includes(letter.toLowerCase()))
    .join("");
}

// console.log(disemvowel("This website is for losers LOL!"));

//2.  Repeat strings
//convert string to an array with split
//Iterate over the array
//Append each character into a separate array index + 1 times
//For the first append of each character, make the character upper case
//Append the rest in lower case
// Return resulting array, convert to a string with - separator

// function accum(str) {
//   let result = [];
//   for (let idx = 0; idx < str.length; idx += 1) {
//     if (idx === 0) {
//       result.push(str[idx].toUpperCase());
//     } else if (idx > 0) {
//       let modifiedStr =
//         str[idx][0].toUpperCase() + str[idx].toLowerCase().repeat(idx);
//       result.push(modifiedStr);
//     }
//   }
//   return result.join("-");
// }

function accum(str) {
  return str
    .split("")
    .map((el, idx) => el.toUpperCase() + el.toLowerCase().repeat(idx))
    .join("-");
}
// console.log(accum("abcd"));
// console.log(accum("ZpglnRxqenU"));

//3.  given a string of space separated numbers, and have to return the highest and lowest number.

// function highAndLow(numbers) {
//   let numsArray = numbers
//     .split(" ")
//     .map((el) => Number(el))
//     .sort((a, b) => b - a);
//   let high = String(numsArray[numsArray.length - 1]);
//   let low = String(numsArray[0]);
//   return `${low} ${high}`;
// }

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// console.log(highAndLow("1 2 3 4 5")); // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

//4.  Return first letter of a string
// function makeString(str) {
//   let result = "";
//   str.split(" ").map((word) => (result += word[0]));
//   return result;
// }

function makeString(str) {
  return str
    .split(" ")
    .map((word) => word.slice(0, 1))
    .join("");
}

// console.log(makeString("This Is A Test"));

function removeExclamationMarks(str) {
  return str.replace(/!/g, "");
}

// console.log(removeExclamationMarks("Hello World!"));
// console.log(removeExclamationMarks("He!o Woowoo"));

//4.  Given a string of words, return the length of the shortest word(s).

// function findShort(str) {
//   return str
//     .split(" ")
//     .map((word) => word.length)
//     .sort((a, b) => a - b)[0];
// }

function findShort(str) {
  return Math.min(...str.split(" ").map((el) => el.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
