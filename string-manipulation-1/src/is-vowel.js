/* exported isVowel */
// check if character is a vowel
// comparing it to known vowels
// if === equal it is a vowel

function isVowel(char) {
  var lowerCase = char.toLowerCase();
  var ch = lowerCase;
  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'y' || ch === 'w') {
    return true;
  }
  return false;
}

// change character to lowercase
// compare character to vowel characters
// if === equal it is a vowel
// returned true
// if not !== returne false
