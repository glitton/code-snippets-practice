function openOrSenior(data) {
  let category = [];

  data.forEach((arr) => {
    let age = arr[0];
    let handicap = arr[1];

    if (age >= 55 && handicap > 7) {
      category.push("Senior");
    } else {
      category.push("Open");
    }
  });
  return category;
}

//Using destructuring

// function openOrSenior(data) {
//   return data.map(([age, handicap]) =>
//     age >= 55 && handicap > 7 ? "Senior" : "Open"
//   );
// }
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); //['Open', 'Senior', 'Open', 'Senior']
