/*
P:You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.
Input: array of integers
Output: single integer that is unique
Rules: 
Explicit: The input array will always be valid! (odd-length >= 3)
Implicit: There is only one unique integer

E: 
D: Object to store the count of each element
A:
- Iterate over the array
- Count the frequencies of the appearance of each element
- if the count of an element is equal to 1, return that element

*/

// function stray(array) {
//   let numberObj = {};

//   array.forEach((num) => {
//     if (!numberObj[num]) {
//       numberObj[num] = 1;
//     } else {
//       numberObj[num] += 1;
//     }
//   });

//   for (let num in numberObj) {
//     if (numberObj[num] === 1) {
//       return parseInt(num);
//     }
//   }
// }

const stray = (numbers) =>
  numbers.filter((el) => numbers.indexOf(el) === numbers.lastIndexOf(el))[0];
console.log(stray([1, 1, 2])); // 2;
console.log(stray([1, 2, 1])); // 2;
console.log(stray([2, 1, 1])); // 2;
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3;
