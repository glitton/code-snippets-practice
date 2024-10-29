/*
P: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
E: 
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

D: 

A: 
- initiate a sum variable
- iterate the number of times of the argument
- Add argument to sum, decrement it by 1 and add the argument until argument reaches 0
- return sum

*/

function summation(num) {
  let count = num;
  let sum = 0;

  while (count !== 0) {
    sum += count;
    count--;
  }
  return sum;
}

console.log(summation(1)); // 1;
console.log(summation(2)); // 3;
console.log(summation(8)); //36;
