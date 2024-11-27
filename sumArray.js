function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) {
    return 0;
  }
  let sorted = array.sort((a, b) => a - b).slice(1, -1); // slice first and last element

  let sum = sorted.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([6, 2, 1, 8, 10]));
