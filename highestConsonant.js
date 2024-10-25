/* Highest Consonant Value
https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

//for the word "zodiac", let's cross out the vowels. 
We get: "z  d  c" z=26, d=4, c=3.  The highest is 26

input: string 
output: number 
rules:
  - get the highest value of consonant substrings 
  - consonants are any letters of the alphabet characters except "eoiua";
  - the value of each letter is a number 
d:
- object: to store each letter with its number 

a:
- iterate through the input string 
- get the highest number of consonant substrings 

  - intialize sum to 0
  - intialize ALPHA_VALUES to an object that holds the alphabetic characters and their numbers 
  - iterate through the input string 
  -- if the current letter is a consonant and includes within the ALPHA_VALUES 
  --- get the value of this key 
  --- add the result to sum 
  - return sum 

*/

const ALPHA_VALUES = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function highestValue(string) {}

highestValue("zodiac"); //26
highestValue("strength"); //57
highestValue("az"); //26
highestValue("chruschtschov"); //80
highestValue("twelfthstreet"); // 103;
