/* exported isPalindromic */
/*
  - removes paces from string
  - index string
  - reverse string
  - write reverse string into new array
  - compare if original string is equal to new array
*/
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
