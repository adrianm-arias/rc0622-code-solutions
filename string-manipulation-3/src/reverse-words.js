/* exported reverseWords */
/*
  - index string by character
  - loop through string
    - at current index reverse and join
      - push that value into new array
  - joins reversed array by space
  - Return reversed string
*/

function reverseWords(string) {
  const splitString = string.split(' ');
  const revArray = [];

  for (let i = 0; i < splitString.length; i++) {
    revArray.push(splitString[i].split('').reverse().join(''));
  }
  var revString = revArray.join(' ');
  return revString;
}
