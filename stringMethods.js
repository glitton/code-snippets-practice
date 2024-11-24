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

console.log(disemvowel("This website is for losers LOL!"));

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
console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));
