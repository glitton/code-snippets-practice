/* Highest Consonant Value
https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

//for the word "zodiac", let's cross out the vowels. 
We get: "z  d  c" z=26, d=4, c=3.  The highest is 26

*/

highestValue("zodiac"); //26
highestValue("strength"); //57
highestValue("az"); //26
highestValue("chruschtschov"); //80
highestValue("twelfthstreet"); // 103;

/* Palindromes 
https://www.codewars.com/kata/5a1560c980171f3f68000037/train/javascript
Given a string, we'd like to know whether the vowels, consonants or both (assessed separately) are the same backwards as they are forwards. See examples at the bottom of this description.

The test should be case-insensitive, and should only assess letters, ignoring spaces, numbers and other non-letter characters ("_" "*" " " "-"). Vowels are AEIOU. The letter Y is a consonant for this exercise.

If the string doesn't have the same sequence of consonants or vowels backwards, we want to return "neither". If only the vowels are palindromic, return "vowel". If only the consonants are palindromic, return "consonant". If the vowels and the consonants in the string are palindromic, return "both".

You can assume that all test cases will contain at least one vowel and one consonant.


Some examples:

"egg" would return "both", as "e" is the same backwards as it is forwards, as is "gg".

"raCe car" would also return "both" as "rccr" and "aea" are palindromes.

"wizard" would return "neither".

"pea13ce" would return "vowel" as "eae" is palindromic, but "pc" is not.

" *73_ ab" would return "both" as "a" and "b" are palindromic (according to me...)

*/

function palindrome(str) {
  //   return "both";
  //   return "vowel";
  //   return "consonant";
  //   return "neither";
}

palindrome("egg"); // "both"
palindrome("raCe car"); // "both"
palindrome("wizard"); // "neither"
palindrome("pea13ce"); // "vowel"
palindrome(" *73_ ab"); // "both"
palindrome("3-B0oto b"); // "both"
palindrome("_inte 4"); // "neither"
palindrome("neither"); // "vowel"
