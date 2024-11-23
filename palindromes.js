/* P: Write a function the returns a sequence of characters that read the same forward and backward (palindromic substrings).
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
D: 
A:
- create substrings from input string - helper function
- check if each substring with at least two chars is a palindrome - helper function
- Return the array of palindromes

Helper: function substrings 

- Iterate over input string, set up index, i = 0
- nest another loop, set up index, j =1, up to length
- Get substrings using slice
  - 1st iteration: slice(i, j) i = 0, j = 1...length
  - wnd iteration: slice(i, j) i = 1, j = 2...length
- output for madam 
  m, ma, mad, mada, madam, a, ada, adam, d, da, dam
- return substrings array

Helper: function isPalindrome(substring)

  - convert string to an array
  - reverse array and join, save to new string
  - compare original string to new string
  - return boolean

Main function: Palindromes
- check substring length is greater than 1 and check for palindrome
- use substrings and isPalindrome helpers
- return final array  
*/

function substrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}

function isPalindrome(substring) {
  return substring === substring.split("").reverse().join("");
}

function palindromes(str) {
  let subs = substrings(str);

  return subs.filter((str) => {
    return str.length > 1 && isPalindrome(str);
  });
}
console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]

console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns[
//   ("ll",
//   "-madam-",
//   "-madam-did-madam-",
//   "madam",
//   "madam-did-madam",
//   "ada",
//   "adam-did-mada",
//   "dam-did-mad",
//   "am-did-ma",
//   "m-did-m",
//   "-did-",
//   "did",
//   "-madam-",
//   "madam",
//   "ada",
//   "oo")
// ];

console.log(palindromes("knitting cassettes"));
// returns[("nittin", "itti", "tt", "ss", "settes", "ette", "tt")];
