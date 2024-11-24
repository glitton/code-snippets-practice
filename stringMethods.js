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
