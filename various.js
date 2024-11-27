function removeEveryOther(arr) {
  return arr.filter((_, idx) => idx % 2 === 0);
}

// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"])); //['Hello', 'Hello Again']

//Mexican Wave
/*
Algo: 
hello
- Iterate over the length of the string
- Create a copy of the string
- Hello => slice index 0, index1 (capitalize end) and index 1,end
  - hEllo => slice index 1 and index 2 (capitalize end), and index 2 to end
- push modified string to an array
- repeat until end of the loop

*/

function wave(str) {
  let result = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] !== " " || str[idx] !== "") {
      let newWave =
        str.slice(0, idx) + str[idx].toUpperCase() + str.slice(idx + 1);

      result.push(newWave);
    } else {
      return [];
    }
  }
  return result.filter((word) => word !== str);
}

// console.log(wave("hello")); //["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// console.log(wave("")); //["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function sumMix(arr) {
  return arr.reduce((acc, val) => Number(acc) + Number(val), 0);
}

// console.log(sumMix([9, 3, "7", "3"]));

// Likes

function likes(names) {
  if (!Array.isArray(names) || names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    let otherNum = names.length - 2;
    return `${names[0]}, ${names[1]} and ${otherNum} others like this`;
  }
}

console.log(likes([])); // "no one likes this";
console.log(likes(["Peter"])); // "Peter likes this";
console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this;
console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this;
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); //"Alex, Jacob and 2 others like this";
