// function abbrevName(name) {
//   let nameArray = name.split(" ");
//   return `${nameArray[0][0].toUpperCase()}.${nameArray[1][0].toUpperCase()}`;
// }

function abbrevName(name) {
  return name
    .split(" ")
    .map((el) => `${el[0].toUpperCase()}`)
    .join(".");
}

console.log(abbrevName("Sam Harris"));
