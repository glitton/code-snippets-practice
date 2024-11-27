// let student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// function printStudent(obj) {
//   console.log(Object.keys(obj));
// }

// printStudent(student);
// console.log(student);
// let noRoll = delete student.rollno;
// console.log(student);

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// library.forEach((obj) => {
//   if (obj.readingStatus) {
//     console.log(`Already read ${obj.title} by ${obj.author} `);
//   } else {
//     console.log(`I need to read ${obj.title} by ${obj.author} `);
//   }
// });

// Add usersAnswer property to object

let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

function addProps(arr) {
  arr.forEach((obj) => (obj.userAnswer = null));
  return arr;
}

// function addProps(arr) {
//   for (let obj of arr) {
//     obj["userAnswers"] = null;
//   }
//   return arr;
// }
// console.log(addProps(questions));

// Sort list of objects by specific property: sortBy

function sortList(sortBy, arr) {
  return arr.sort((a, b) => a.sortBy - b.sortBy);
}

let list = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];

// console.log(sortList("a", list));

// Object destructuring

// const person = { name: "Alice", age: 30, city: "New York" };
// const { name, age } = person;
// console.log({ name, age });

// Iterate over an object
// const student = { name: "John", score: 90, grade: "A" };

function printStudent(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

// printStudent(student);

// Object methods

let person = {
  firstName: "Bennie",
  lastName: "Litton",
  age: 10,
  celebrateBirthday: function () {
    return `Hello ${this.firstName} your are ${
      this.age + 1
    } today.  Happy Birthday!`;
  },
};

// console.log(person.celebrateBirthday());

// Merge objects

function mergeObjects(obj1, obj2) {
  let merged = Object.assign({}, obj1, obj2);
  // iterate over obj1, if key is the same as obj2, add the values
  let keyInObj2 = Object.keys(obj2);
  for (let key in obj1) {
    if (keyInObj2.includes(key)) {
      merged[key] += obj1[key];
    }
  }
  return merged;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); //{ a: 1, b: 5, c: 4 }
