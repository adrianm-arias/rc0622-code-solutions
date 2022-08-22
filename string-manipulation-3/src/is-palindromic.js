/* exported isPalindromic */
// check and index the string
// remove spaces from string
// rewrite the string in reverse to recreate the string
// if reverse string is equal to original string then true
// if not not equal then false

function isPalindromic(string) {
  const stringSplit = string.split(' ');
  const originalString = stringSplit.join('');

  const indexString = string.split('');
  const reversedStringArray = [];
  for (let i = 0; i < indexString.length; i++) {
    if (indexString[i] !== ' ') {
      reversedStringArray.push(indexString[i]);
    }
  }
  const reversedString = reversedStringArray.reverse().join('');

  if (!(originalString === reversedString)) {
    return false;
  } else {
    return true;
  }
}
