//1. Sum of Digits
// function sum(nums) {
//   let stringNums = String(nums);
//   return stringNums.split("").reduce((acc, curr) => acc + Number(curr), 0);
// }

// console.log(sum(23)); // 5
// console.log(sum(496)); // 19
// console.log(sum(123456789)); // 45

//2. Alpha Numbers
/*
A:
- Create an object where key is the digit and the value is the word version 
- Create a sorted array with the words of each digit
- Iterate over the sorted word array
  - For every element in the array, find the equivalent key in the object and push it to a new array
- return final array  
*/

const NUMBER_ALPHA = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};

function alphabeticNumberSort(array) {
  let alphaNumSort = [];
  let sortedAlphaNumbers = Object.keys(NUMBER_ALPHA).sort();

  sortedAlphaNumbers.forEach((key) => {
    if (array.includes(NUMBER_ALPHA[key])) {
      alphaNumSort.push(NUMBER_ALPHA[key]);
    }
  });
  return alphaNumSort;
}

// console.log(
//   alphabeticNumberSort([
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//   ])
// );
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

//3. Multiply All Pairs
function multiplyAllPairs(arr1, arr2) {
  let multipliedPairs = [];

  arr1.forEach((el1) =>
    arr2.forEach((el2) => {
      multipliedPairs.push(el1 * el2);
    })
  );
  return multipliedPairs.sort((a, b) => a - b);
}

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]

//4.  Leading Substrings

// function leadingSubstrings(str) {
//   let substrings = [];

//   for (let length = 0; length < str.length; length++) {
//     substrings.push(str.slice(0, length + 1));
//   }
//   return substrings;
// }

// function leadingSubstrings(str) {
//   let substrings = "";

//   return str.split("").map((char) => {
//     return (substrings = substrings + char);
//   });
// }

function leadingSubstrings(str) {
  return str.split("").map((_, idx) => str.slice(0, idx + 1));
}

// console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
// console.log(leadingSubstrings("a")); // ["a"]
// console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//5 All Substrings

function substrings(str) {
  let result = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    let subs = str.slice(idx); // get all substrings
    let leadingSubs = leadingSubstrings(subs); // get substrings starting from index
    result = result.concat(leadingSubs); // add leadingSubs to result
  }
  return result;
}

console.log(substrings("abcde"));

// returns
// [
//   "a",
//   "ab",
//   "abc",
//   "abcd",
//   "abcde",
//   "b",
//   "bc",
//   "bcd",
//   "bcde",
//   "c",
//   "cd",
//   "cde",
//   "d",
//   "de",
//   "e",
// ];
