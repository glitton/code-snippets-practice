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

// console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
// console.log(leadingSubstrings("a")); // ["a"]
// console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//5 All Substrings

// console.log(substrings("abcde"));

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

//5. Palindromic substrings

/*
P: Write a function the returns a sequence of characters that read the same forward and backward (palindromic substrings).
The returned array of substrings must be sorted by their order of appearance in the input string.  Duplicate substrings
must be included in order of their appearance.  The substrings are case sensitive
Input: string
Output: array of palindromic substrings
Rules:
- Returned array must contain substrings in order of their appearance in the input string
- Duplicates are expected
- Substrings are case sensitive 'AbcA' is  accepted but not 'Abca'
- Single characters are not palindromes

E: 
D: String and array
A:
- Generate substrings using the substring function
- Check for Palindromes using a helper function
- Iterate through substrings and filter each using isPalindrome helper function
  - Exclude substrings with length of one (single character)
- Return result

- isPalindrome helper function
- convert string to an array
- reverse the array and convert back to a string
- compare original string to reversed string
  - if not equal, return false,
  - if equal, return true
*/

function leadingSubstrings(str) {
  return str.split("").map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  let result = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    let subs = str.slice(idx); // get all substrings
    let leadingSubs = leadingSubstrings(subs); // get substrings starting from index
    result = result.concat(leadingSubs); // add leadingSubs to result
  }
  return result;
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function palindromes(str) {
  let substringsArray = substrings(str);
  return substringsArray.filter((subs) => {
    return subs.length > 1 && isPalindrome(subs);
  });
}
// console.log(palindromes("abcd")); // []
// console.log(palindromes("madam")); // [ "madam", "ada" ]

// console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// console.log(isPalindrome("madam"));

//6.  Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.
// Iterate over the array.  Use reduce for each slice of the array

// function sumOfSums(arr) {
//   let subArray = [];

//   for (let idx = 0; idx < arr.length; idx += 1) {
//     subArray.push(arr.slice(0, idx + 1));
//   }

//   let sum = subArray.map((arr) => {
//     return arr.reduce((acc, value) => acc + value);
//   });
//   return sum.reduce((acc, curr) => acc + curr);
// }

// function sumOfSums(arr) {
//   let sum = 0;
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     sum += arr.slice(0, idx + 1).reduce((acc, curr) => acc + curr);
//   }
//   return sum;
// }

function sumOfSums(arr) {
  return arr
    .map((_, idx) => arr.slice(0, idx + 1).reduce((sum, value) => sum + value))
    .reduce((sum, num) => sum + num);
}

// console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4])); // 4
// console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

//7.  Grocery List

// function buyFruit(arr) {
//   let fruits = [];
//   for (let idx = 0; idx < arr.length; idx++) {
//     let fruit = arr[idx][0];
//     let quantity = arr[idx][1];
//     for (let j = 0; j < quantity; j++) {
//       fruits.push(fruit);
//     }
//   }
//   return fruits;
// }

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }
  return result;
}

function buyFruit(fruitList) {
  return fruitList
    .map((fruit) => repeat(fruit))
    .reduce((list, item) => list.concat(item));
}

let produce = [
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
];
// console.log(buyFruit(produce));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// console.log(repeat(["apple", 3]));

//8: Inventory Item Transactions
// Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.
//Iterate over array
//Return item with specific ID key: transactions.id === transactionId

function transactionsFor(item, transactions) {
  return transactions.filter((inventory) => inventory.id === item);
}

// let transactions = [
//   { id: 101, movement: "in", quantity: 5 },
//   { id: 105, movement: "in", quantity: 10 },
//   { id: 102, movement: "out", quantity: 17 },
//   { id: 101, movement: "in", quantity: 12 },
//   { id: 103, movement: "out", quantity: 20 },
//   { id: 102, movement: "out", quantity: 15 },
//   { id: 105, movement: "in", quantity: 25 },
//   { id: 101, movement: "out", quantity: 18 },
//   { id: 102, movement: "in", quantity: 22 },
//   { id: 103, movement: "out", quantity: 15 },
// ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

//9. Inventory Item Availability: Write a function that returns true or false based on whether or not an inventory item is available. The function takes two arguments: an inventory item and a list of transactions.

//The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

/*
A:  
- Use transactions for to get the transaction item
- Iterate over the transaction array
- Get the sum of the movements (in/out)
  if movement is in, add quantity
  if movement is out, subtract quantity
- Return true if sum > 0, otherwise false
*/
function isItemAvailable(specificItem, specificTransaction) {
  let inventory = transactionsFor(specificItem, specificTransaction);
  let quantity = inventory.reduce((sum, transaction) => {
    if (transaction["movement"] === "in") {
      return sum + transaction.quantity;
    } else {
      sum - transaction.quantity;
    }
  }, 0);
  return quantity > 0;
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
