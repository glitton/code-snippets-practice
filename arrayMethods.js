//1.
function isArray(arr1) {
  return Array.isArray(arr1);
}

// console.log(isArray("w3resource"));
// console.log(isArray([1, 2, 4, 0]));
//2.
function arrayClone(arr) {
  return arr.slice();
}
// console.log(arrayClone([1, 2, 4, 0]));
// console.log(arrayClone([1, 2, [4, 0]]));

//3.
// function first(arr2, n) {
//   // console.log(n);
//   if (arr2.length === 0 || n < 0) {
//     return [];
//   } else if (n === undefined) {
//     return arr2[0];
//   } else {
//     return arr2.slice(0, n);
//   }
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

//4.
function last(arr, n) {
  if (n === undefined) {
    return arr[arr.length - 1];
  } else {
    return arr.reverse().slice(0, n).reverse();
  }
}

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

//5.
// console.log(["Red", "Green", "White", "Black"].join("+"));

//6.  find the most frequent item in an array.
let arrChars = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function frequency(arr, char) {
  let count = 0;
  arr.forEach((el) => {
    if (el === char) {
      count += 1;
    }
  });
  return count;
}

// console.log(frequency(arrChars, 3));

//7.
function swapCase(str) {
  let finalString = "";
  str.split("").map((char) => {
    if (char === char.toUpperCase()) {
      finalString += char.toLowerCase();
    } else {
      finalString += char.toUpperCase();
    }
  });
  return finalString;
}

let sentence = "The Quick Brown Fox";
// console.log(swapCase(sentence));

//8.  Deal with nested loops
let arrNums = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

function logNums(arr1) {
  for (let i in arr1) {
    console.log(`row ${i}`);
    for (let j in arr1[i]) {
      console.log(`${arr1[i][j]}`);
    }
  }
}

// logNums(arrNums);

//9: remove duplicates from an array

const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6, 10, 10, 11, 15, 15];

function removeDuplicates(arr) {
  return arr.filter((num, idx) => {
    return arr.indexOf(num) === idx; // if this is true, then the first occurence is seen, otherwise if it is seen again, it won't be added to the filter
  });
}

// console.log(removeDuplicates(nums));

//10.  Add two arrays from the same index.  Arrays are never empty

/*
- Initialize counters for array1 and array2 respectively, count1, count2
- Initialize a result var to an empty array
- Iterate over the length of both arrays
- add the elements from each array at the appropriate index
- increment counter1

- At the end of the first loop, check if counter1 is equal to array1.length,
- Append the remaining elements from array2
- Else append the remaining elements from array1
*/

function sumArrays(arr1, arr2) {
  let result = [];
  let count1 = 0;
  let count2 = 0;

  while (count1 < arr1.length && count1 < arr2.length) {
    result.push(arr1[count1] + arr2[count1]);
    count1++;
  }

  if (count1 === arr1.length) {
    for (count2 = count1; count2 < arr2.length; count2++) {
      result.push(arr2[count2]);
    }
  } else {
    for (count2 = count1; count2 < arr1.length; count2++) {
      result.push(arr1[count2]);
    }
  }
  return result;
}

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
// console.log(sumArrays(array1, array2));

//[4, 5, 8, 10, 12, 13]

//11. Reverse words

function reverseWords(str) {
  let wordArray = str.split(" ");
  let reverseArray = wordArray.map((word) => word.split("").reverse().join(""));
  return reverseArray.join(" ");
}

// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }
/*
- Split the string into an array of words
- Iterate over the array of words, convert it to a string and split each word into an array of letters.
  - Reverse the array of letters 
- return final array and use join to convert it back to a string  
*/
// console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); //'ehT kciuq nworb xof spmuj revo eht yzal .god'
// console.log(["T", "h", "e"].reverse().join(""));

//12.
// let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
// let myArray = myString.split("+");

let myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

myArray.pop();
myArray.push("Bennie", "Luna");

let newArray = myArray.map((el, idx) => el + ` (${idx})`);
let myString = newArray.join("-");

// console.log(myString);

const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

const removedEagle = birds.splice(birds.indexOf("Eagles"), 1);

let eBirds = birds.filter((bird) => bird.startsWith("E"));
// console.log(eBirds);

//Array plus array https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, curr) => acc + curr, 0);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
