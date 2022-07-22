/* exported swapChars */
// check and index each character of a string
// check each character against parameter and add to new string in correct order
// return new string

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var length = string.length;
  for (var i = 0; i < length; i++) {
    if (firstIndex === i) {
      newString += string[secondIndex];
    } else if (secondIndex === i) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// checked and indexed each character of string
// using for loop checked if firstindex parameter match var i
// if it matched it was added to newstring
// if not it was directly added to new string
