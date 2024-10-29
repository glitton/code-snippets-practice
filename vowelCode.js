const VOWELS = { a: 1, e: 2, i: 3, o: 4, u: 5 };

function encodeOG(string) {
  let encodedString = "";
  for (let idx = 0; idx < string.length; idx++) {
    if (VOWELS.hasOwnProperty(string[idx])) {
      encodedString += VOWELS[string[idx]];
    } else {
      encodedString += string[idx];
    }
  }
  return encodedString;
}

// function decodeOG(string) {
//   let decodedString = "";
//   let stringArray = string.split("");
//   stringArray.map((char, idx) => {
//     let vowelKeys = Object.keys(VOWELS);

//     // if (char === VOWELS[vowelKeys]) {

//     // }
//   });
// }

/*
Encode Algorithm:

- Create a vowels array outside the function
- initialize an encodedString var and assign it to an empty string
- Iterate over the string
  -- check if each character is part of the vowels array
    -- if yes, get the index of the vowel in the vowels array
    -- Add this index plus 1 to the encoded string variable
    -- else add the character that is not a vowel to the encoded string variable
-- return the encodedString

Decode Algorithm:

- Initialize a decodedString variable, assign it to an empty string
- Iterate over the encoded string, and check each character 
  -- if the character is a number, subtract one from this number and assign it to a vowelIndex variable
    --  Find the vowel of the vowelIndex in the Vowels array
    --  Append the vowel to the decodedString variable
  -- else, character is not a number, append the character to decodedString
-- return the decodedString    
*/

const VOWELS_ARRAY = ["a", "e", "i", "o", "u"];

function encode(string) {
  let encodedString = "";

  for (let idx = 0; idx < string.length; idx++) {
    if (VOWELS_ARRAY.includes(string[idx])) {
      let vowelIndex = VOWELS_ARRAY.indexOf(string[idx]);
      encodedString += vowelIndex + 1;
    } else {
      encodedString += string[idx];
    }
  }
  return encodedString;
}

function decode(string) {
  let decodedString = "";

  for (let idx = 0; idx < string.length; idx += 1) {
    if (
      (string[idx] >= "a" && string[idx] <= "z") ||
      (string[idx] >= "A" && string[idx] <= "Z")
    ) {
      decodedString += string[idx];
    } else {
      let vowelIndex = string[idx] - 1;
      // console.log(vowelIndex);
      decodedString += VOWELS_ARRAY[vowelIndex];
    }
  }
  return decodedString;
}

console.log(encode("hello")); //"h2ll4";
console.log(encode("How are you today?")); // "H4w 1r2 y45 t4d1y?";
console.log(encode("This is an encoding test.")); // "Th3s 3s 1n 2nc4d3ng t2st.";
console.log(decode("h2ll4")); // "hello"

/*
const table = ["a", "e", "i", "o", "u"];
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

*/
