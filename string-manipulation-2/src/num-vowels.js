/* exported numVowels */
// lowercase string
// index the characters of a string
// check if any of those characters are vowels
// add vowel characters to new string
// return string length of vowel string to see how many vowels in selected string

function numVowels(string) {
  var str = string.toLowerCase();
  var newString = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      newString += str[i];
    }
  }
  return newString.length;
}

// lowercased string
// indexed the characters of a string
// checked if any of those characters are vowels
// added vowel characters to new string
// returned string length of vowel string to see how many vowels in selected string
