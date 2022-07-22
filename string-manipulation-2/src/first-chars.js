/* exported firstChars */
// check and index characters of string
// add characters to new string if the index is number is less than the length parameter
// return new string

function firstChars(length, string) {
  var shortString = '';
  for (var i = 0; i < string.length; i++) {
    if (i < length) {
      shortString += string[i];
    }
  }
  return shortString;
}

// checked and indexed characters of string with for loop
// added characters to new string if the index is number is less than the length parameter
// returned new string
