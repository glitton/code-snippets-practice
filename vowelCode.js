const VOWELS = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  let encodedString = "";
  for (let idx = 0; idx < string.length; idx++) {
    if (VOWELS.hasOwnProperty(string[idx])) {
      encodedString += VOWELS[string[idx]];
    } else {
      encodedString += string[idx];
    }
  }
  return encodedString;
}

function decode(string) {
  let decodedString = "";
  let stringArray = string.split("");
  stringArray.map((char, idx) => {
    let vowelKeys = Object.keys(VOWELS);

    // if (char === VOWELS[vowelKeys]) {

    // }
  });
}

// console.log(encode("hello")); //"h2ll4";
// console.log(encode("How are you today?")); // "H4w 1r2 y45 t4d1y?";
// console.log(encode("This is an encoding test.")); // "Th3s 3s 1n 2nc4d3ng t2st.";
console.log(decode("h2ll4")); // "hello"
