/* Sort Odds 
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

Given an array of numbers, sort the odd numbers in ascending order while leaving the even numbers at their original positions.

sortOdds([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4];
sortOdds([5, 3, 1, 8, 0]) // [1, 3, 5, 8, 0];
sortOdds([]) //[];

input: array
output: array (not the same array) 
rules:
  - sort the odd numbers within the input array 
  - even numbers should be in their original positions 
  - if the input array is empty return empty array 

d:
- array: to stro the odd numbers 

a:
- iterate through the input array 
- sort the odd numbers within the input array in ascending order

  - if the input array is empty return empty array 
  - initialize oddArr to empty array 
  - iterate through the input array 
  -- if the current number is odd 
  --- append it to the oddArr 
  - sort the oddArr in ascending order 
  
  - get a copy of the input array, assign the result to copyArr
  -- iterate through the copyArr 
  --- if the current number is odd 
  ---- replace the current number with the current number oddArr, reassign the current number of oddArr with sorted odd number 
  - return copyArr
*/

function sortOdds(array) {
  if (array.length === 0) return [];
  let oddArr = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 1) {
      oddArr.push(array[i]);
    }
  }
  oddArr.sort((a, b) => a - b);

  let copyArr = array.slice();

  for (let i = 0; i <= copyArr.length; i += 1) {
    if (copyArr[i] % 2 === 1) {
      copyArr[i] = oddArr.shift();
    }
  }
  return copyArr;
}

console.log(sortOdds([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4];
console.log(sortOdds([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0];
console.log(sortOdds([])); //[];
