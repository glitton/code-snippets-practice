/*
P: Write a function that removes from a given array of integers all the values contained in a second array. //Version using filter and includes
Input: 2 arrays: integers and values
Output: one array containing integers that do not have the values integers
E:
D:
A: 
- Iterate over the integer list
- Filter out from the integer list, the integers that are included in the
values list
- Return new array

*/

function removeNums(numbers, values) {
  return numbers.filter((num) => !values.includes(num));
}

integerList = [1, 1, 2, 3, 1, 2, 3, 4];
valuesList = [1, 3];
console.log(removeNums(integerList, valuesList)); //[]
