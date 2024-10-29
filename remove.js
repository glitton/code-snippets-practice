//Define a method/function that removes from a given array of integers all the values contained in a second array.

// function remove(integer_list, values_list) {
//   let finalArray = [];

//   arr1.forEach((el) => {
//     if (!arr2.includes(el)) {
//       finalArray.push(el);
//     }
//   });
//   return finalArray;
// }

integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
values_list = [1, 3];
console.log(remove(integer_list, values_list));

//Version using filter and includes

function remove(integer_list, values_list) {
  return integer_list.filter((el) => {
    return !values_list.includes(el);
  });
}
